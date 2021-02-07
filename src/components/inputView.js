import React from "react";
import InputList from "./inputList";
import { Graph } from "./graph";
import {
  TextField,
  Container,
  Box,
  Collapse,
  IconButton,
  Snackbar,
  Typography,
  Paper,
  withStyles,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Alert } from "@material-ui/lab";
import Emoji from "./emoji";
import { CSVLink, CSVDownload } from "react-csv";

class InputView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "",
      ti: 20,
      te: -15,
      rsi: 0.125,
      rse: 0.042,
      fi: 60,
      fe: 80,
      P: "",
      Ps: "",
      g: "",
      values: [
        {
          index: Math.random(),
          d: 0.12,
          l: 1.74,
          u: 21.3,
        },
        {
          index: Math.random(),
          d: 0.0002,
          l: 0,
          u: 50000,
        },
        {
          index: Math.random(),
          d: 0.08,
          l: 0.04,
          u: 1,
        },
        {
          index: Math.random(),
          d: 0.08,
          l: 1.74,
          u: 21.3,
        },
      ],
    };
    this.compute();
  }

  round = (value, decimals) => {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
  };

  compute = () => {
    let r = [],
      rv = [],
      d = [],
      l = [],
      u = [],
      g = [0],
      x = this.state,
      v = this.state.values,
      r_total = 0,
      ps_ti = 610.5 * Math.exp((17.269 * x.ti) / (237.3 + x.ti)),
      ps_te = 610.5 * Math.exp((21.875 * x.te) / (265.5 + x.te)),
      pi = (x.fi / 100) * ps_ti,
      pe = (x.fe / 100) * ps_te;

    for (let i = 0; i < v.length; i++) {
      d.push(v.[i].d)
      l.push(v.[i].l)
      u.push(v.[i].u)
      if (v[i].l === 0) {
        r.push(0);
      } else {
        r.push(v[i].d / v[i].l);
      }
      rv.push(v[i].d * v[i].u);
      r_total += r[i];
    }
    let sum_r = [r[0] + x.rsi];
    let sum_rv = [rv[0]];
    for (let i = 1; i < v.length; i++) {
      let t = Number(parseFloat(g[i - 1]) + parseFloat(v[i].d));
      g.push(t.toFixed(3));
      sum_r.push(sum_r[i - 1] + r[i]);
      sum_rv.push(sum_rv[i - 1] + rv[i]);
    }

    //let rt = r_total + x.rsi + x.rse,
    let delta = [x.ti - (x.rsi / r_total) * (x.ti - x.te)],
      ps = [ps_ti];
    for (let i = 1; i <= v.length; i++) {
      delta.push(x.ti - (sum_r[i - 1] / r_total) * (x.ti - x.te));
    }
    for (let i = 0; i < delta.length; i++) {
      if (delta[i] > 0) {
        ps.push(610.5 * Math.exp((17.269 * delta[i]) / (237.3 + delta[i])));
      } else {
        ps.push(610.5 * Math.exp((21.875 * delta[i]) / (265.5 + delta[i])));
      }
    }
    ps.push(ps_te);
    let p = [pi];

    for (let i = 0; i < sum_rv.length; i++) {
      p.push(pi - (sum_rv[i] / sum_rv[rv.length - 1]) * (pi - pe));
    }
    for (let i = 0; i < ps.length - v.length; i++) {
      g.push("");
    }
    const output = [
      ["ti [°C]", this.state.ti],
      ["te [°C] ", this.state.te],
      ["Rsi [°C] ", this.state.rsi],
      ["Rse [°C] ", this.state.rse],
      ["φi [%]", this.state.fi],
      ["φe [%] ", this.state.fe],
      ["d [m]", ...d],
      ["λ [W/mK]", ...l],
      ["μ", ...u],
      ["P [Pa]", ...this.state.P],
      ["Ps [Pa]", ...this.state.Ps],
      ["grosime [m]", ...this.state.g],
    ];
    console.log(output);

    console.log(this.transpose(output));
    this.setState({ P: p, Ps: ps, g: g, output: this.transpose(output) });

  };
  transpose = (matrix) => {
    let arr=[];
    for(let i=0;i<matrix.length;i++){
      arr.push([])
      for(let j=0;j<matrix.length;j++){
        arr[i].push(matrix[j][i])
      }
    }
    return arr
  }

  handleChange = (e) => {
    if (["d", "l", "u", "r"].includes(e.target.name)) {
      let parameters = [...this.state.values];
      parameters[e.target.dataset.id][e.target.name] = e.target.value;
      this.compute();
    } else {
      this.setState({ [e.target.name]: e.target.value }, () => {
        this.compute();
      });
    }
  };

  addNewRow = (e) => {
    if (this.state.values.length < 20) {
      this.setState((prevState) => ({
        values: [
          ...prevState.values,
          {
            index: Math.random(),
            d: "",
            l: "",
            u: "",
            r: "",
          },
        ],
      }));
      this.compute();
    } else {
      this.setState({
        alert: 1,
        alertText: "Poti avea maxim 10 straturi!",
      });
    }
  };

  deleteRow = (index) => {
    if (this.state.values.length > 2) {
      this.setState({
        values: this.state.values.filter((s, sindex) => index !== sindex),
      });
      this.compute();
    } else {
      this.setState({
        alert: true,
        alertText: "Poti avea minim 2 straturi!",
      });
    }
  };

  clickOnDelete(record) {
    if (this.state.values.length > 2) {
      this.setState({
        values: this.state.values.filter((r) => r !== record),
      });
      this.compute();
    } else {
      this.setState({
        alert: true,
        alertText: "Poti avea minim 2 straturi!",
      });
    }
  }

  rmAlert = (a) => {
    this.setState({
      alert: false,
      alertText: "",
    });
  };

  componentDidMount = () => {
    this.compute();
  };

  StyledContainer = withStyles((props) => {
    return {
      root: {
        paddingRight: "2px",
        paddingLeft: "2px",
        [props.breakpoints.only("xs")]: {
          paddingRight: "0",
          paddingLeft: "0",
          marginRight: "0",
          marginLeft: "0",
        },
      },
    };
  })(Container);

  render() {
    let { values } = this.state;
    return (
      <>
        <this.StyledContainer maxWidth="xl">
          <form onChange={this.handleChange}>
            <Snackbar
              open={this.state.alert}
              autoHideDuration={6000}
              onClose={this.rmAlert}
            >
              <Collapse in={this.state.alert}>
                <Alert
                  severity="error"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={this.rmAlert}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  {this.state.alertText}
                </Alert>
              </Collapse>
            </Snackbar>
            <Container>
              <Box mb={3} pt={5}>
                <Typography variant="h3" component="h3" align="center">
                  <Emoji symbol="🧮" label="sheep" />
                  Higrotermica Clădirilor
                </Typography>
              </Box>

              <Graph
                g={this.state.g}
                p={this.state.P}
                ps={this.state.Ps}
                output={this.state.output}
              />
              <Paper elevation={1}>
                <Box
                  flexDirection="row"
                  flexWrap="wrap"
                  justifyContent="space-around"
                  order="ascending"
                  display="flex"
                  p={3}
                  m={1}
                >
                  <Box p={1}>
                    <TextField
                      type="number"
                      variant="outlined"
                      label="ti [°C]"
                      id="ti [°C]"
                      min="0"
                      step="0.001"
                      name="ti"
                      onChange={this.handleChange}
                      defaultValue={this.state.ti}
                    />
                  </Box>
                  <Box p={1}>
                    <TextField
                      type="number"
                      variant="outlined"
                      label="te [°C]"
                      id="te [°C]"
                      min="0"
                      step="0.001"
                      name="te"
                      onChange={this.handleChange}
                      defaultValue={this.state.te}
                    />
                  </Box>
                  <Box p={1}>
                    <TextField
                      type="number"
                      variant="outlined"
                      label="Rsi [°C]"
                      id="Rsi [°C]"
                      min="0"
                      step="0.001"
                      name="rsi"
                      onChange={this.handleChange}
                      defaultValue={this.state.rsi}
                    />
                  </Box>
                  <Box p={1}>
                    <TextField
                      type="number"
                      variant="outlined"
                      label="Rse [°C]"
                      id="Rse [°C]"
                      min="0"
                      step="0.001"
                      name="rse"
                      onChange={this.handleChange}
                      defaultValue={this.state.rse}
                    />
                  </Box>
                  <Box p={1}>
                    <TextField
                      type="number"
                      variant="outlined"
                      label="φi [%]"
                      id="φi [%]"
                      min="0"
                      step="0.001"
                      name="fi"
                      onChange={this.handleChange}
                      defaultValue={this.state.fi}
                    />
                  </Box>
                  <Box p={1}>
                    <TextField
                      type="number"
                      variant="outlined"
                      label="φe [%]"
                      id="φe [%]"
                      min="0"
                      step="0.001"
                      name="fe"
                      onChange={this.handleChange}
                      defaultValue={this.state.fe}
                    />
                  </Box>
                </Box>
                <InputList
                  add={this.addNewRow}
                  delete={this.clickOnDelete.bind(this)}
                  onChange={this.handleChange}
                  change={values}
                />
              </Paper>
              <Box p={2}>
                <Typography variant="button" display="block" align="right">
                  © Said Sakuh 2021
                </Typography>
              </Box>
            </Container>
          </form>
        </this.StyledContainer>
      </>
    );
  }
}
export default InputView;
