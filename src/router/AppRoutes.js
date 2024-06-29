import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherDashboard from "../pages/WeatherDashboard";
import TailoredWeatherForecasts from "../pages/TailoredWeatherForecasts";
import Header from "../components/Header/Header";
import { RoutingURLs } from "../components/constants/RoutingURLs";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={RoutingURLs.dashboard} element={<WeatherDashboard />} />
        <Route
          path={RoutingURLs.tailoredForecast}
          element={<TailoredWeatherForecasts />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
