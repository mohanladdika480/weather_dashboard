import React from "react";
import { Box, Typography } from "@mui/material";
import temperatureIcon from "../../assets/temperature.png";
import humidityIcon from "../../assets/humidity.png";
import precipIcon from "../../assets/rain.png";
import windIcon from "../../assets/wind.png";
import DetailCard from "../DetailCard/DetailCard";

const CurrentWeatherDetails = (props) => {
  const { forecastData } = props;
  return (
    <>
      <Typography className="text_6 text_color0">
        Current Weather in {forecastData?.location?.name}{" "}
        <Box
          component={"span"}
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            color: "#898989",
            display: { xs: "block", sm: "inline" },
          }}
        >
          ({forecastData?.location?.region}, {forecastData?.location?.country})
        </Box>
      </Typography>
      <Box className="card_style">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box
              component={"img"}
              src={forecastData?.current?.condition?.icon}
              alt="weather condition"
            />
            <Typography className="text_2">
              {forecastData?.current?.condition?.text}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <DetailCard
              text={"Temperature"}
              value={`${forecastData?.current?.temp_c}°C`}
              icon={temperatureIcon}
            />
            <DetailCard
              text={"Precipitation"}
              value={`${forecastData?.current?.precip_mm}mm`}
              icon={precipIcon}
            />
            <DetailCard
              text={"Wind"}
              value={`${forecastData?.current?.wind_kph}kph`}
              icon={windIcon}
            />
            <DetailCard
              text={"Humidity"}
              value={`${forecastData?.current?.humidity}%`}
              icon={humidityIcon}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CurrentWeatherDetails;
