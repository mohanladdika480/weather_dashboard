import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Box, FormHelperText } from "@mui/material";
import { StyledDatePicker } from "./CustomStyledComponents";
import dayjs from "dayjs";

const CustomDatePicker = (props) => {
  const { formik, name, date, errorMessage } = props;
  const maxDate = dayjs().add(300, "day");

  const handleChange = (value) => {
    formik.setFieldValue(name, value ? value.toDate() : null);
  };

  return (
    <Box sx={{ maxWidth: "300px" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={["DatePicker", "DatePicker"]}
          sx={{ p: "0px" }}
        >
          <StyledDatePicker
            value={date ? dayjs(date) : null}
            onChange={(newValue) => {
              handleChange(newValue);
            }}
            disablePast
            maxDate={maxDate}
            slotProps={{
              layout: {
                sx: {
                  backgroundColor: "#424662",
                  mt: "2px",
                  fontFamily: "Arial, sans-serif",
                  // Style MUI ButtonBase inside MuiPickersLayout
                  "& .MuiButtonBase-root": {
                    color: "#dad7d7",
                    fontFamily: " Arial, sans-serif",

                    // Customize disabled state
                    "&.Mui-disabled": {
                      color: "#8c9db2 !important",
                    },
                  },

                  "& .MuiPickersCalendarHeader-label, & .MuiPickersDay-root:not(.Mui-selected), & .MuiDayCalendar-weekDayLabel":
                    {
                      fontFamily: " Arial, sans-serif",
                      color: "#dad7d7",
                      borderColor: "#dad7d7",
                    },
                  "& .MuiPickersYear-yearButton.Mui-disabled": {
                    color: "#8c9db2",
                  },
                  "& .MuiPickersYear-yearButton": {
                    color: "#dad7d7",
                  },
                  "& .MuiPickersYear-yearButton.Mui-selected": {
                    backgroundColor: "#616790",
                  },
                  "& .MuiYearCalendar-root": {
                    scrollbarWidth: "none",
                    "-msOverflowStyle": "none",
                  },
                },
              },
            }}
            sx={{ width: "100%" }}
          />
        </DemoContainer>
      </LocalizationProvider>
      {errorMessage ? (
        <FormHelperText
          sx={{
            color: "#d32f2f",
            fontSize: "14px",
            m: "3px 0 0",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {errorMessage}
        </FormHelperText>
      ) : (
        ""
      )}
    </Box>
  );
};

export default CustomDatePicker;
