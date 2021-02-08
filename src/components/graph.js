import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Button, Fade, Box, Container, Paper } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { triggerBase64Download } from "react-base64-downloader";
import { CSVDownload } from "react-csv";

export const Graph = (props) => {
  const graphData = {
    labels: props.g,
    canvas: {
      backgroundColor: "rgba(50, 50, 50, 0.5)",
    },
    datasets: [
      {
        label: "Presiune parțială a vaporilor - P",
        data: props.p,
        fill: false,
        backgroundColor: "rgb(63, 81, 181)",
        borderColor: "rgba(63, 81, 181, 0.5)",
        lineTension: 0,
      },
      {
        label: "Presiune de saturație - Ps",
        data: props.ps,
        fill: false,
        backgroundColor: "rgb(181, 163, 63)",
        borderColor: "rgba(181, 163, 63, 0.5)",
        lineTension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
          scaleLabel: {
            display: true,
            labelString: "Grosime [m]",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
          scaleLabel: {
            display: true,
            labelString: "Presiune [Pa]",
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  const graphData2 = {
    labels: props.delta,
    canvas: {
      backgroundColor: "rgba(50, 50, 50, 0.5)",
    },
    datasets: [
      {
        label: "θ",
        data: props.delta,
        fill: false,
        backgroundColor: "rgb(63, 81, 181)",
        borderColor: "rgba(63, 81, 181, 0.5)",
        lineTension: 0,
      },
    ],
  };
  const options2 = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
          scaleLabel: {
            display: true,
            labelString: "θ [°C]",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
          scaleLabel: {
            display: true,
            labelString: "Temperatură [°C]",
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);
  const [graph1_image, setImage1] = useState(0);
  const [graph2_image, setImage2] = useState(0);
  const [isDrawn, setDrawn] = useState(false);
  const [csv, setCsv] = useState(false);
  useEffect(() => {
    setImage1(chartRef1.current.chartInstance.toBase64Image());
    setImage2(chartRef2.current.chartInstance.toBase64Image());
    if (props.p) {
      setDrawn(true);
    }
  }, [props.p]);
  const filename = "grafic_hidro_" + Date.now();

  return (
    <>
      <Container mt={10}>
        <Paper elevation={2}>
          <Box p={1} mb={5} height={500}>
            <Line data={graphData} options={options} ref={chartRef1} />
          </Box>
        </Paper>
        <Paper elevation={2}>
          <Box p={1} mb={5} height={500}>
            <Line data={graphData2} options={options2} ref={chartRef2} />
          </Box>
        </Paper>
        <Paper elevation={10}>
          <Box p={1} mb={5} alignItems="center">
            <Fade in={isDrawn}>
              <Box justifyContent="space-around" display="flex">
                <Box p={1}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    startIcon={<SaveIcon />}
                    onClick={() =>
                      triggerBase64Download(graph1_image, filename)
                    }
                  >
                    png grafic presiune
                  </Button>
                </Box>
                <Box p={1}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    startIcon={<SaveIcon />}
                    onClick={() =>
                      triggerBase64Download(graph2_image, filename)
                    }
                  >
                    png grafic temperatură
                  </Button>
                </Box>
                {csv ? (
                  <CSVDownload
                    data={props.output}
                    target="_self"
                    filename={filename}
                  />
                ) : (
                  () => setCsv(!csv)
                )}
                <Box p={1}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    startIcon={<SaveIcon />}
                    onClick={() => {
                      setCsv(!csv) && setCsv(!csv);
                    }}
                  >
                    csv rezultate
                  </Button>
                </Box>
              </Box>
            </Fade>
          </Box>
        </Paper>
      </Container>
    </>
  );
};
