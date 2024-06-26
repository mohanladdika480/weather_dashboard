import { styled } from "@mui/system";
import { TextField, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const CustomTextField = styled(TextField)`
  .MuiFormControl-root {
    background-color: #424662 !important;
  }
  & input {
    color: white;
    overflow: unset;
    padding: 12px 14px;
    height: 20px !important;
    min-height: 0px !important;
    border-radius: 8px;
    background: #424662;
    min-width: 0 !important;
    &::placeholder {
      color: white !important;
      opacity: 0.5;
    }
  }
  & input:-webkit-autofill {
    border-radius: 8px;
    height: 20px;
    box-shadow: 0 0 0 30px #424662 inset !important;
  }
  & fieldset {
    border-style: unset;
  }
  & svg {
    background-color: #424662;
  }
  border-radius: 8px;
`;

export const PrimaryButton = styled(Button)(({ theme }) => ({
  padding: "8px 12px",
  backgroundColor: "#ff009061",
  color: "white",
  fontWeight: "bold",
  fontFamily: "cursive",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#ff0c0c69",
  },
}));

export const SecondaryButton = styled(Button)(({ theme }) => ({
  padding: "8px 12px",
  backgroundColor: "#111f37",
  color: "#fff",
  fontWeight: "bold",
  border: "2px solid #ff009061",
  textTransform: "none",
  fontFamily: "cursive",
  "&:hover": {
    backgroundColor: "#ff0c0c69",
    border: "0px",
    color: "#fff",
  },
}));

export const StyledDatePicker = styled(DatePicker)({
  backgroundColor: "#424662",
  borderRadius: "8px",

  // Override MUI InputBase styles
  "& .MuiInputBase-root.MuiOutlinedInput-root": {
    color: "white",
    borderRadius: "8px",
    border: "0px solid transparent !important",
    "& .MuiOutlinedInput-input": {
      padding: "12px 0 12px 14px"
    }
  },
  
  // Customize Input Adornment button color
  "& .MuiInputAdornment-root .MuiButtonBase-root": {
    color: "white",
  },

  // Override MUI OutlinedInput notched outline
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none !important",
  },
});
