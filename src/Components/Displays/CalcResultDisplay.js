import {
    Box,
} from '@mui/material';

import {ViewResult} from '../Styleds/TypoGraphy'


const CalcResultDisplay = (Props) => {
    return (
        <Box sx={{ flexGrow: 1, mx: 'auto', lineHeight: 7, textAlign: 'center'}}>
                <ViewResult>{Props.cost}</ViewResult>
        </Box>
    );
}

export default CalcResultDisplay;