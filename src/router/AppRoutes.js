import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import WeatherDashboard from "../pages/WeatherDashboard";
import TailoredWeatherForecasts from "../pages/TailoredWeatherForecasts";
import Header from "../components/Header/Header";
import { RoutingURLs } from "../components/constants/RoutingURLs";

const AppRoutes = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={RoutingURLs.dashboard} element={<WeatherDashboard />} />
        <Route
          path={RoutingURLs.tailoredForecast}
          element={<TailoredWeatherForecasts />}
        />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
