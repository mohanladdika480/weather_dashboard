import React, { useState } from "react";
import { Box, Typography, RadioGroup } from "@mui/material";
import { useFormik } from "formik";
import dayjs from "dayjs";
import { object, string } from "yup";
import CustomRadioButton from "../components/common/CustomRadioButton";
import {
  CustomTextField,
  PrimaryButton,
} from "../components/common/CustomStyledComponents";
import CustomDatePicker from "../components/common/CustomDatePicker";
import ButtonLoader from "../components/common/ButtonLoader";
import {
  formatDateToYYYYMMDD,
  isMoreThan14DaysFromToday,
} from "../utils/utils";
import apiRequest from "../services/api";
import { APIEndpoints } from "../components/constants/APIEndpoints";
import WeatherForDay from "../components/WeatherForDay/WeatherForDay";
import HourlyForecast from "../components/HourlyForecast/HourlyForecast";
import PageLoader from "../components/common/PageLoader";
import WeatherSuggestion from "../components/WeatherSuggestion/WeatherSuggestion";

const TailoredWeatherForecasts = () => {
  const today = dayjs();
  const maxDate = today.add(300, "day");

  const [locationDetails, setLocationDetails] = useState(null);
  const [forecastforDay, setForecastforDay] = useState(null);
  const [isAPICalled, setIsAPICalled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("")

  const initialValues = {
    category: "Farm Forecast",
    location: "",
    date: null,
  };

  const validationSchema = object().shape({
    location: string().trim().required("Location is required"),
    date: string()
      .trim()
      .required("Date is required")
      .test("is-valid", "Invalid date", (value) => {
        return dayjs(value).isValid();
      })
      .test("is-future", "Date cannot be in the past", (value) => {
        return dayjs(value).isAfter(today) || dayjs(value).isSame(today, "day");
      })
      .test("is-in-range", "Date must be within the next 300 days", (value) => {
        return (
          dayjs(value).isBefore(maxDate) || dayjs(value).isSame(maxDate, "day")
        );
      }),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      fetchForecastForDay(values);
    },
    enableReinitialize: true,
  });

  const fetchForecastForDay = async (values) => {
    setIsLoading(true);
    if (isMoreThan14DaysFromToday(values?.date)) {
      await apiRequest({
        method: "GET",
        url: APIEndpoints.futureForecast,
        params: {
          q: values.location,
          dt: formatDateToYYYYMMDD(values.date),
        },
      })
        .then((response) => {
          setLocationDetails(response?.location);
          setForecastforDay(response?.forecast?.forecastday?.[0]);
          setIsAPICalled(true);
          setIsLoading(false);
          setCategory(values.category);
        })
        .catch(() => {
          setIsLoading(false);
          setIsAPICalled(true);
          setLocationDetails(null);
          setForecastforDay(null);
        });
    } else {
      await apiRequest({
        method: "GET",
        url: APIEndpoints.forecast,
        params: {
          q: values.location,
          days: 14,
        },
      })
        .then((response) => {
          setLocationDetails(response.location);
          const dayForecast = response?.forecast?.forecastday?.find(
            (day) => day?.date === formatDateToYYYYMMDD(values.date)
          );
          setForecastforDay(dayForecast);
          setIsAPICalled(true);
          setIsLoading(false);
          setCategory(values.category);
        })
        .catch(() => {
          setIsLoading(false);
          setIsAPICalled(true);
          setLocationDetails(null);
          setForecastforDay(null);
        });
    }
  };

  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      formik.handleSubmit();
    }
  };

  const renderFieldsComponent = () => {
    return (
      <Box onKeyDown={handleKeyEnter}>
        <Typography className="text_5" sx={{ mb: "5px" }}>
          Choose Category
        </Typography>
        <RadioGroup
          sx={{ display: "flex", flexDirection: "row", gap: "16px", mt: "5px" }}
          value={formik.values.category}
          onChange={formik.handleChange}
          name="category"
        >
          <CustomRadioButton value={"Farm Forecast"} />
          <CustomRadioButton value={"Travel Guide"} />
          <CustomRadioButton value={"Event Planner"} />
        </RadioGroup>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", gap: "15px", mt: "15px" }}
        >
          <Box sx={{ width: { xs: "100%", sm: "260px" }, maxWidth: "300px" }}>
            <Typography className="text_5" sx={{ mb: "5px" }}>
              Location
            </Typography>
            <CustomTextField
              fullWidth
              placeholder="Enter location"
              value={formik.values.location}
              onChange={formik.handleChange}
              helperText={formik.touched.location ? formik.errors.location : ""}
              error={Boolean(formik.touched.location && formik.errors.location)}
              name={"location"}
            />
          </Box>
          <Box sx={{ width: { xs: "100%", sm: "260px" } }}>
            <Typography className="text_5" sx={{ mb: "5px" }}>
              Date
            </Typography>
            <CustomDatePicker
              name={"date"}
              date={formik.values.date}
              formik={formik}
              errorMessage={formik.touched.date ? formik.errors.date : ""}
            />
          </Box>
        </Box>
      </Box>
    );
  };

  const renderButtonsComponent = () => {
    return (
      <Box sx={{ mt: "15px" }}>
        <PrimaryButton onClick={() => formik.handleSubmit()}>
          <ButtonLoader btnText={"Submit"} isBtnLoading={false} />
        </PrimaryButton>
      </Box>
    );
  };

  const renderForecastDetails = () => {
    return (
      <Box sx={{ mt: "20px" }}>
        <WeatherForDay weather={forecastforDay} location={locationDetails}/>
        <WeatherSuggestion category={category} forecastforDay={forecastforDay}/>
        <HourlyForecast hourlyData={forecastforDay?.hour} />
      </Box>
    );
  };

  return (
    <Box className="page_main_container">
      {renderFieldsComponent()}
      {renderButtonsComponent()}
      {!forecastforDay && isAPICalled && (
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
      {forecastforDay && renderForecastDetails()}
      {isLoading && <PageLoader loading={isLoading} />}
    </Box>
  );
};

export default TailoredWeatherForecasts;
