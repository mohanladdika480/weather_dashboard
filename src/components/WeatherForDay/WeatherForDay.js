import React from "react";
import { Box, Typography } from "@mui/material";
import temperatureIcon from "../../assets/temperature.png";
import humidityIcon from "../../assets/humidity.png";
import precipIcon from "../../assets/rain.png";
import windIcon from "../../assets/wind.png";
import DetailCard from "../DetailCard/DetailCard";
import { getDayName } from "../../utils/utils";

const WeatherForDay = (props) => {
  const { weather, location } = props;

  const renderHeader = () => {
    if (!location) {
      return (
        <Typography className="text_6 text_color0">
          {weather?.date} ({getDayName(weather?.date)}) Weather Conditions
        </Typography>
      );
    } else {
      return (
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
          <Typography className="text_6 text_color0" sx={{ mr: "7px" }}>
            {weather?.date}
          </Typography>
          <Typography
            className="text_6 mt_2 text_color0"
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: { xs: "wrap", sm: "nowrap" },
              columnGap: "5px",
            }}
          >
            {location?.name} Weather Forecast
            <Box
              component={"span"}
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                color: "#898989",
                display: { xs: "block", sm: "inline" },
              }}
            >
              ({location?.region}, {location?.country})
            </Box>
          </Typography>
        </Box>
      );
    }
  };

  return (
    <Box sx={{ mt: "20px" }}>
      {renderHeader()}
      <Box className="card_style">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              columnGap: "20px",
              rowGap: "10px",
            }}
          >
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Box
                component={"img"}
                src={weather?.day?.condition?.icon}
                alt="weather"
              />
              <Box>
                <Typography
                  className="text_2 text_color1"
                  sx={{ whiteSpace: {xs: "wrap", sm:"nowrap"} }}
                >
                  {weather?.day?.condition?.text}
                </Typography>
                <Typography className="text_4 mt_5">
                  {weather?.day?.avgtemp_c}
                  &deg;C
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "16px",
                p: "10px",
                background: "#52577b",
                borderRadius: "6px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography className="text_1">
                  Sunrise: {weather?.astro?.sunrise}
                </Typography>
                <Typography className="text_1">
                  Sunset: {weather?.astro?.sunset}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography className="text_1">
                  Moonrise: {weather?.astro?.moonrise}
                </Typography>
                <Typography className="text_1">
                  Moonset: {weather?.astro?.moonset}
                </Typography>
              </Box>
            </Box>
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
              value={`${weather?.day?.avgtemp_c}°C`}
              icon={temperatureIcon}
            />
            <DetailCard
              text={"Precipitation"}
              value={`${weather?.day?.totalprecip_mm}mm`}
              icon={precipIcon}
            />
            <DetailCard
              text={"Wind"}
              value={`${weather?.day?.maxwind_kph}kph`}
              icon={windIcon}
            />
            <DetailCard
              text={"Humidity"}
              value={`${weather?.day?.avghumidity}%`}
              icon={humidityIcon}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WeatherForDay;
