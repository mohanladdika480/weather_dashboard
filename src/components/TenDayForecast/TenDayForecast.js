import React from "react";
import { Box, Typography } from "@mui/material";

const TenDayForecast = (props) => {
  const { forecastData, setForecastforDay, forecastforDay } = props;

  const handleDaysForecast = (data) => {
    setForecastforDay?.(data);
  };

  return (
    <Box sx={{ mt: "20px" }}>
      <Typography
        sx={{ fontSize: { xs: "16px", sm: "20px" }, fontWeight: "bold" }}
      >
        10-day Forecast
      </Typography>
      <Box className="card_style horizontal_scroll_style">
        {forecastData?.map((weather, index) => (
          <Box
            key={index}
            sx={{
              cursor: "pointer",
              mr: `${forecastData?.length !== index + 1 ? "16px" : "0px"}`,
            }}
            onClick={() => handleDaysForecast(weather)}
            className={
              forecastforDay?.date === weather?.date
                ? "active_card_style"
                : "hover_card_styles"
            }
          >
            <Box sx={{ width: "125px", textAlign: "center" }}>
              <Box
                component={"img"}
                src={weather?.day?.condition?.icon}
                alt="Weather"
              />
              <Typography className="text_bold text_2 mt_2">
                {index === 0 ? "Today" : weather?.date}
              </Typography>
              <Typography className="text_2 text_normal mt_2">{weather?.day?.avgtemp_c}&deg;C</Typography>
              <Typography className="text_2 text_normal mt_2">{weather?.day?.condition?.text}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TenDayForecast;
