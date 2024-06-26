import React from "react";
import CustomDatePicker from "../components/common/CustomDatePicker";
import { Box } from "@mui/material";
import { CustomTextField, PrimaryButton, SecondaryButton } from "../components/common/CustomStyledComponents";
import ButtonLoader from "../components/common/ButtonLoader";

const WeatherDashboard = () => {
  return (
    <>
      <div>WeatherDashboard</div>
      <CustomDatePicker />
      <Box
        sx={{
          width: "90vw",
          height: "100px",
          backgroundColor: "#424662",
          m: "10px",
          borderRadius: "8px",
        }}
      ></Box>
      <CustomTextField />
      <PrimaryButton>
        <ButtonLoader isBtnLoading={true} btnText={"Submit"}/>
      </PrimaryButton>
      <SecondaryButton sx={{ml: "10px"}}>
        <ButtonLoader isBtnLoading={false} btnText={"Submit"}/>
      </SecondaryButton>
    </>
  );
};

export default WeatherDashboard;
