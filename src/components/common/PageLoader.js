import { Backdrop, CircularProgress } from "@mui/material";

const PageLoader = (props) => {
  return (
    <Backdrop
      sx={{
        color: "#dad7d7",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backdropFilter: "blur(2px)",
      }}
      open={props?.loading}
      onClick={() => {}}
    >
      <CircularProgress
        sx={{
          color: "#28cdea",
          width: "60px !important",
          height: "60px !important",
        }}
      />
    </Backdrop>
  );
};

export default PageLoader;
