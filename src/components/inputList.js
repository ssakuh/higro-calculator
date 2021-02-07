import React from "react";
import { Box, IconButton, TextField } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

const InputList = (props) => {
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
          <Box p={1}>
            <TextField
              type="number"
              variant="outlined"
              label="λ [W/mK]"
              id="λ [W/mK]"
              min="0"
              step="0.001"
              name="l"
              onChange={props.onChange}
              inputProps={{ "data-id": `${idx}` }}
              defaultValue={props.change[idx].l}
            />
          </Box>
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
