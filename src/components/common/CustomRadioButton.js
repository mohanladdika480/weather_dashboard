import React from "react";
import { FormControlLabel, Radio } from "@mui/material";

const CustomRadioButton = (props) => {
  const { value } = props;
  return (
    <FormControlLabel
      value={value}
      control={
        <Radio
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 24,
              fill: "#0896b6",
            },
            color: "#0896b6",
            p: "0px 5px 0 0",
          }}
        />
      }
      label={value}
      sx={{ m: "0px", fontFamily: "" }}
    />
  );
};

export default CustomRadioButton;
