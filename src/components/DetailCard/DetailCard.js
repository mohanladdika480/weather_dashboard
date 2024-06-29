import React from "react";
import { Box, Typography } from "@mui/material";

const DetailCard = ({ text, icon, value }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        background: "#616790",
        p: "5px",
        borderRadius: "6px",
        width: { xs: "120px", sm: "150px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box component={"img"} src={icon} alt={text} className="icon_1" />
        <Typography className="text_2 ml_5">{text}</Typography>
      </Box>
      <Typography className="text_2 mt_5">{value}</Typography>
    </Box>
  );
};

export default DetailCard;
