import { styled } from "@mui/system";
import { TextField, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const CustomTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    background-color: #424662 !important;
    border-radius: 8px;
  }

  & input {
    color: #dad7d7;
    overflow: unset;
    padding: 12px 14px;
    height: 20px !important;
    min-height: 0px !important;
    border-radius: 8px;
    background: #424662;
    min-width: 0 !important;
    &::placeholder {
      color: #dad7d7 !important;
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
  .MuiFormHelperText-root {
    margin: 3px 0 0;
    font-size: 14px;
    font-family: Arial, sans-serif;
    color: #d32f2f;
  }
`;

export const PrimaryButton = styled(Button)(({ theme }) => ({
  padding: "8px 12px",
  backgroundColor: "#00639a",
  color: "#dad7d7",
  fontWeight: "bold",
  fontFamily: "Arial, sans-serif",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#007e9a",
  },
}));

export const SecondaryButton = styled(Button)(({ theme }) => ({
  padding: "8px 12px",
  backgroundColor: "#111f37",
  color: "#fff",
  fontWeight: "bold",
  border: "2px solid #ff009061",
  textTransform: "none",
  fontFamily: "Arial, sans-serif",
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
    color: "#dad7d7",
    borderRadius: "8px",
    lineHeight: "1.25",
    border: "0px solid transparent !important",
    "& .MuiOutlinedInput-input": {
      padding: "12px 0 12px 14px",
      height: "auto",
    },
  },

  // Customize Input Adornment button color
  "& .MuiInputAdornment-root .MuiButtonBase-root": {
    color: "#dad7d7",
  },

  // Override MUI OutlinedInput notched outline
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none !important",
  },
});
