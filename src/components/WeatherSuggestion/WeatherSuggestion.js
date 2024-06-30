import React from "react";
import { Box, Typography } from "@mui/material";
import weatherSuggestionData from "../constants/WeatherSuggestions.json";

const WeatherSuggestion = (props) => {
  const { category, forecastforDay } = props;

  const getSuggestionDayByCategory = () => {
    let data = null;
    if (category === "Farm Forecast") {
      data = weatherSuggestionData?.farming;
    } else if (category === "Travel Guide") {
      data = weatherSuggestionData?.travel;
    } else {
      data = weatherSuggestionData?.events;
    }
    return data;
  };

  const getTemperatureSuggestion = () => {
    const temperature = forecastforDay?.day?.avgtemp_c;
    const categoryData = getSuggestionDayByCategory()?.temperature;
    let tempSuggestion = "";
    if (temperature < 22) {
      tempSuggestion = categoryData?.below_22C;
    } else if (temperature < 28) {
      tempSuggestion = categoryData?.["22C_to_28C"];
    } else if (temperature < 36) {
      tempSuggestion = categoryData?.["28C_to_36C"];
    } else {
      tempSuggestion = categoryData?.above_36C;
    }
    return tempSuggestion;
  };

  const getPrecipitationSuggestion = () => {
    const precipitation = forecastforDay?.day?.totalprecip_mm;
    const categoryData = getSuggestionDayByCategory()?.precipitation;
    let precipSuggestion = "";
    if (precipitation === 0) {
      precipSuggestion = categoryData?.none;
    } else if (precipitation < 4) {
      precipSuggestion = categoryData?.light;
    } else if (precipitation < 10) {
      precipSuggestion = categoryData?.moderate;
    } else {
      precipSuggestion = categoryData?.heavy;
    }
    return precipSuggestion;
  };

  const getWindSuggestion = () => {
    const wind = forecastforDay?.day?.maxwind_kph;
    const categoryData = getSuggestionDayByCategory()?.wind;
    let windSuggestion = "";
    if (wind < 15) {
      windSuggestion = categoryData?.light;
    } else if (wind < 30) {
      windSuggestion = categoryData?.moderate;
    } else {
      windSuggestion = categoryData?.strong;
    }
    return windSuggestion;
  };

  const getHumditySuggestion = () => {
    const humidity = forecastforDay?.day?.avghumidity;
    const categoryData = getSuggestionDayByCategory()?.humidity;
    let humiditySuggestion = "";
    if (humidity < 40) {
      humiditySuggestion = categoryData?.below_40;
    } else if (humidity < 60) {
      humiditySuggestion = categoryData?.["40_to_60"];
    } else {
      humiditySuggestion = categoryData?.above_60;
    }
    return humiditySuggestion;
  };

  const getHeaderName = () => {
    let heading = "";
    if (category === "Farm Forecast") {
      heading = "Farming Weather Suggestions";
    } else if (category === "Travel Guide") {
      heading = "Travel Weather Suggestions";
    } else {
      heading = "Event Planning Weather Suggestions";
    }
    return heading;
  };

  const renderSuggestionComponent = () => {
    return (
      <Box className="card_style">
        {forecastforDay?.day?.totalprecip_mm < 4 && (
          <Typography className="text_2">
            Temperature ({forecastforDay?.day?.avgtemp_c}°C):{" "}
            <span className="text_2 text_normal">
              {getTemperatureSuggestion()}
            </span>
          </Typography>
        )}
        <Typography
          className={`text_2 ${
            forecastforDay?.day?.totalprecip_mm < 4 ? "mt_16" : ""
          }`}
        >
          Precipitation ({forecastforDay?.day?.totalprecip_mm}mm):{" "}
          <span className="text_2 text_normal">
            {getPrecipitationSuggestion()}
          </span>
        </Typography>
        <Typography className="text_2 mt_16">
          Wind ({forecastforDay?.day?.maxwind_kph}kph):{" "}
          <span className="text_2 text_normal ">{getWindSuggestion()}</span>
        </Typography>
        <Typography className="text_2 mt_16">
          Humidity ({forecastforDay?.day?.avghumidity}%):{" "}
          <span className="text_2 text_normal ">{getHumditySuggestion()}</span>
        </Typography>
      </Box>
    );
  };

  return (
    <Box sx={{ mt: "20px" }}>
      <Typography className="text_6 text_color0">{getHeaderName()}</Typography>
      {renderSuggestionComponent()}
    </Box>
  );
};

export default WeatherSuggestion;
