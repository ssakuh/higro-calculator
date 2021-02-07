import React from "react";
import {
  Select,
  Box,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const InputList = (props) => {
  const classes = useStyles();
  return props.change.map((val, idx) => {
    return (
      <div key={val.index}>
        <Box
          flexDirection="row"
          display="flex"
          p={1}
          m={1}
          justifyContent="center"
        >
          <Box p={1}>
            <TextField
              type="number"
              variant="outlined"
              label="d [m]"
              id="d [m]"
              min="0"
              step="0.001"
              name="d"
              onChange={props.onChange}
              inputProps={{ "data-id": `${idx}` }}
              defaultValue={props.change[idx].d}
            />
          </Box>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">
              λ [W/mK]
            </InputLabel>
            <Select
              native
              defaultValue={props.change[idx].l}
              onChange={props.onChange}
              label="λ [W/mK]"
              name="d"
              inputProps={{ "data-id": `${idx}` }}
            >
              <option aria-label="None" value="" />
              <option value={0}>Gol (0)</option>
              <option value={1.74}>Beton armat (1,74)</option>
              <option value={0.93}>Mortar de ciment (0,93)</option>
              <option value={0.87}>Mortar de ciment și var (0,87)</option>
              <option value={0.7}>Mortar de var (0,7)</option>
              <option value={0.042}>Vată minerală (0,042)</option>
              <option value={1.16}>Pământ vegetal în stare umedă (1,16)</option>
              <option value={0.17}>Lemn de pin și brad (0,17)</option>
              <option value={0.23}>Lemn de stejar și fag (0,23)</option>
              <option value={0.8}>Zidărie din cărămizi pline (0,8)</option>
              <option value={0.3}>Zidărie din BCA (0,3)</option>
              <option value={58}>Oțel de construcții (58)</option>
              <option value={0.044}>Polistiren celular (0,044)</option>
              <option value={0.46}>
                Zidărie din cărămizi cu goluri mari (0,46)
              </option>
              <option value={props.change[idx].l}>
                Altceva {props.change[idx].l}
              </option>
            </Select>
          </FormControl>
          <Box p={1}>
            <TextField
              type="number"
              variant="outlined"
              label="μ"
              id="μ"
              min="0"
              step="0.001"
              name="u"
              onChange={props.onChange}
              inputProps={{ "data-id": `${idx}` }}
              defaultValue={props.change[idx].u}
            />
          </Box>
          {idx === 0 ? (
            <Box p={1} m={0.5}>
              <IconButton aria-label="delete" onClick={() => props.add()}>
                <AddIcon />
              </IconButton>
            </Box>
          ) : (
            <Box p={1} m={0.5}>
              <IconButton aria-label="delete" onClick={() => props.delete(val)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          )}
        </Box>
      </div>
    );
  });
};
export default InputList;
