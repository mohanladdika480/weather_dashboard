import React from "react";
import { Box, Typography } from "@mui/material";
import { formatTime } from "../../utils/utils";

const HourlyForecast = (props) => {
  const { hourlyData } = props;

  return (
    <Box sx={{ mt: "20px" }}>
      <Typography
        sx={{ fontSize: { xs: "16px", sm: "20px" }, fontWeight: "bold" }}
      >
        Hourly Forecast
      </Typography>
      <Box
        sx={{
          background: "#424663",
          p: "16px",
          borderRadius: "6px",
          display: "flex",
          gap: { xs: "24px", sm: "32px" },
          mt: "5px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Typography className="text_1">Time</Typography>
          <Box sx={{ height: "36px", display: "flex", alignItems: "center" }}>
            <Typography className="text_1">Weather</Typography>
          </Box>
          <Typography className="text_1">Temperature</Typography>
          <Typography className="text_1">Precipitation</Typography>
          <Typography className="text_1">Wind</Typography>
          <Typography className="text_1">Humidity</Typography>
        </Box>
        <Box
          sx={{
            gap: { xs: "24px", sm: "36px" },
            flexGrow: 1,
          }}
          className="horizontal_scroll_style"
        >
          {hourlyData?.map((data, index) => {
            return (
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "24px" }}
                key={index}
              >
                <Typography className="text_3" sx={{ fontWeight: "bold" }}>
                  {formatTime(data?.time)}
                </Typography>
                <Box
                  component={"img"}
                  src={data?.condition?.icon}
                  alt="weather condition"
                  sx={{ width: "36px", height: "36px" }}
                />
                <Typography className="text_3">{data?.temp_c}&deg;C</Typography>
                <Typography className="text_3">{data?.precip_mm}mm</Typography>
                <Typography className="text_3">{data?.wind_kph}kph</Typography>
                <Typography className="text_3">{data?.humidity}%</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default HourlyForecast;
