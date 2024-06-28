import React from "react";
import { Box, Typography, InputAdornment } from "@mui/material";
import { CustomTextField } from "../components/common/CustomStyledComponents";
import SearchIcon from "@mui/icons-material/Search";

const WeatherDashboard = () => {
  return (
    <Box className="page_main_container">
      <Box sx={{ maxWidth: "400px" }}>
        <Typography className="text_bold" sx={{ mb: "5px" }}>
          Enter City Name
        </Typography>
        <CustomTextField
          fullWidth
          placeholder="City name"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon
                  sx={{ ml: "10px", cursor: "pointer", color: "white" }}
                  onClick={() => {}}
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default WeatherDashboard;
