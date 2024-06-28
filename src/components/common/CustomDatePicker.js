import React, { useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box } from "@mui/material";
import { StyledDatePicker } from "./CustomStyledComponents";

const CustomDatePicker = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  useEffect(() => {
    setOpen(false);
  }, []);

  const handleChange = (value) => {
    props?.handleChange("date", value);
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ maxWidth: "300px" }} onClick={handleClick}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StyledDatePicker
          open={open}
          value={props?.value}
          onChange={(newValue) => {
            handleChange(newValue);
          }}
          disablePast
          onClose={handleClose}
          maxDate={props?.maxDate}
          slotProps={{
            layout: {
              sx: {
                backgroundColor: "#424662",
                mt: "2px",
                fontFamily: "Arial, sans-serif",
                // Style MUI ButtonBase inside MuiPickersLayout
                "& .MuiButtonBase-root": {
                  color: "white",
                  fontFamily: " Arial, sans-serif",
                  
                  // Customize disabled state
                  "&.Mui-disabled": {
                    color: "#8c9db2 !important",
                  },
                },
                
                "& .MuiPickersCalendarHeader-label, & .MuiPickersDay-root:not(.Mui-selected), & .MuiDayCalendar-weekDayLabel":
                {
                    fontFamily: " Arial, sans-serif",
                    color: "white",
                    borderColor: "white",
                  },
              },
            },
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default CustomDatePicker;
