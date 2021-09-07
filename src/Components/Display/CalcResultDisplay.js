import {
    Box,
    Grid,
    Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const CalcResultDisplay = () => {
    return (
        <Box sx={{ flexGrow: 1, mx: 'auto', height: 100, lineHeight: 7, textAlign: 'center'}}>
                165165661
        </Box>
    );
}

export default CalcResultDisplay;