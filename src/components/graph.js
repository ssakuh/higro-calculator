import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Button, Fade, Box, Container, Paper } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { triggerBase64Download } from "react-base64-downloader";
import { CSVDownload, CSVLink } from "react-csv";

export const Graph = (props) => {
  const graphData = {
    labels: props.g,
    canvas: {
      backgroundColor: "rgba(50, 50, 50, 0.5)",
    },
    datasets: [
      {
        label: "P",
        data: props.p,
        fill: false,
        backgroundColor: "rgb(63, 81, 181)",
        borderColor: "rgba(63, 81, 181, 0.5)",
        lineTension: 0,
      },
      {
        label: "Ps",
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

  const chartRef = useRef(null);
  const [image, setImage] = useState(0);
  const [isDrawn, setDrawn] = useState(false);
  const [csv, setCsv] = useState(false);
  useEffect(() => {
    setImage(chartRef.current.chartInstance.toBase64Image());
    if (props.p) {
      setDrawn(true);
    }
  }, [props.p]);
  const filename = "grafic_hidro_" + Date.now();

  return (
    <>
      <Container mt={10}>
        <Paper elevation={10}>
          <Box p={1} mb={5} height={500}>
            <Line data={graphData} options={options} ref={chartRef} />
          </Box>
        </Paper>
        <Paper elevation={1}>
          <Box p={1} mb={5} alignItems="center">
            <Fade in={isDrawn}>
              <Box justifyContent="space-around" display="flex">
                <Box p={1}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    startIcon={<SaveIcon />}
                    onClick={() => triggerBase64Download(image, filename)}
                  >
                    png grafic
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
                    csv date
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