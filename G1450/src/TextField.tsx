import { TextField } from "@mui/material";
import {styled } from "@mui/system";

const BlueBorderTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(125,153,233,255)",
      marginLeft: "15px",
      marginRight: "15px",
    },
    "&:hover fieldset": {
      borderColor: "cornflowerblue",
    },
    "&.Mui-focused fieldset": {
      borderColor: "cornflowerblue",
    },
    "& .MuiInputBase-input": {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
}));

const CustomizedTextField = () => {
  return <BlueBorderTextField variant="outlined" />;
};

export default CustomizedTextField;
