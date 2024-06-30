import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

const ButtonLoader = (props) => {
  const { isBtnLoading, btnText } = props || {};
  return (
    <>
      {isBtnLoading ? (
        <>
          <CircularProgress
            sx={{
              color: "#dad7d7",
              width: "20px !important",
              height: "20px !important",
            }}
          />
          <Box
            component="span"
            sx={{
              ml: "8px",
              fontSize: "15px",
              textAlign: "center",
            }}
          >
            Loading...
          </Box>
        </>
      ) : (
        btnText
      )}
    </>
  );
};

export default ButtonLoader;
