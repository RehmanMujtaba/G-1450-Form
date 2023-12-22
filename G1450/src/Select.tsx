import Select from '@mui/material/Select';
import { styled } from '@mui/system';

const BlueBorderSelect = styled(Select)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'blue',
      margin: '80px', // Add margin here
      padding: '4px', // Add padding here
      border: '10px'
    },
    '&:hover fieldset': {
      borderColor: 'blue',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'blue',
    },
  },
}));

const CustomizedSelect = () => {
  return (
    <BlueBorderSelect
      label="Blue Border Select"
      variant="outlined"
    >
    </BlueBorderSelect>
  );
};

export default CustomizedSelect;
