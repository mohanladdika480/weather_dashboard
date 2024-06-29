import React from "react";
import { Box, Typography } from "@mui/material";
import temperatureIcon from "../../assets/temperature.png";
import humidityIcon from "../../assets/humidity.png";
import precipIcon from "../../assets/rain.png";
import windIcon from "../../assets/wind.png";
import DetailCard from "../DetailCard/DetailCard";
import { getDayName } from "../../utils/utils";

const WeatherForDay = (props) => {
  const { weather } = props;
  return (
    <Box sx={{ mt: "20px" }}>
      <Typography
        sx={{ fontSize: { xs: "16px", sm: "20px" }, fontWeight: "bold" }}
      >
        {weather?.date}({getDayName(weather?.date)}) Weather Conditions
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
                  sx={{ whiteSpace: "nowrap" }}
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
                background: "#616790",
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
