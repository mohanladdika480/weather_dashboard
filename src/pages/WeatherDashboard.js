import React, { useState } from "react";
import { Box, Typography, InputAdornment } from "@mui/material";
import { CustomTextField } from "../components/common/CustomStyledComponents";
import SearchIcon from "@mui/icons-material/Search";
import apiRequest from "../services/api";
import { APIEndpoints } from "../components/constants/APIEndpoints";
import PageLoader from "../components/common/PageLoader";
import HourlyForecast from "../components/HourlyForecast/HourlyForecast";
import WeatherForDay from "../components/WeatherForDay/WeatherForDay";
import CurrentWeatherDetails from "../components/CurrentWeatherDetails/CurrentWeatherDetails";
import TenDayForecast from "../components/TenDayForecast/TenDayForecast";

const WeatherDashboard = () => {
  const [cityName, setCityName] = useState("");
  const [cityNameError, setCityNameError] = useState("");
  const [forecastData, setForecastData] = useState(null);
  const [isAPICalled, setIsAPICalled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [forecastforDay, setForecastforDay] = useState(null);

  const handleCityNameChange = (e) => {
    setCityName(e.target.value);
    setCityNameError("");
  };

  const getWeatherData = async () => {
    setIsLoading(true);
    await apiRequest({
      method: "GET",
      url: APIEndpoints?.forecast,
      params: {
        q: cityName,
        days: 10,
        aqi: "no",
        alerts: "yes",
      },
    })
      .then((response) => {
        setIsAPICalled(true);
        setIsLoading(false);
        setForecastData(response);
        setForecastforDay(response?.forecast?.forecastday?.[0]);
      })
      .catch(() => {
        setIsAPICalled(true);
        setIsLoading(false);
        setForecastData(null);
        setForecastforDay(null);
      });
  };

  const handleSubmit = () => {
    if (cityName === "") {
      setCityNameError("This field is required");
    } else {
      getWeatherData();
    }
  };

  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const renderFieldsComponent = () => {
    return (
      <Box sx={{ maxWidth: "400px" }} onKeyDown={handleKeyEnter}>
        <Typography className="text_bold" sx={{ mb: "5px" }}>
          Location
        </Typography>
        <CustomTextField
          fullWidth
          placeholder="Enter location"
          value={cityName}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon
                  sx={{ ml: "10px", cursor: "pointer", color: "#dad7d7" }}
                  onClick={handleSubmit}
                />
              </InputAdornment>
            ),
          }}
          onChange={handleCityNameChange}
          helperText={cityNameError}
          error={Boolean(cityNameError)}
        />
      </Box>
    );
  };

  const renderForecastDetails = () => {
    return (
      <Box sx={{ mt: "20px" }}>
        <CurrentWeatherDetails forecastData={forecastData} />
        <TenDayForecast forecastData={forecastData?.forecast?.forecastday} setForecastforDay={setForecastforDay} forecastforDay={forecastforDay}/>
        <WeatherForDay weather={forecastforDay} />
        <HourlyForecast hourlyData={forecastforDay?.hour} />
      </Box>
    );
  };

  return (
    <Box className="page_main_container">
      {renderFieldsComponent()}
      {!forecastData && isAPICalled && (
        <Typography
          sx={{
            fontSize: "24px",
            color: "red",
            mt: "15px",
            fontWeight: "bold",
          }}
        >
          Data not found for the specified location.
        </Typography>
      )}
      {forecastData && renderForecastDetails()}
      {isLoading && <PageLoader loading={isLoading} />}
    </Box>
  );
};

export default WeatherDashboard;
