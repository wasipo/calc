import {
    Box,
} from '@mui/material';

import {ViewResult} from '../Styleds/TypoGraphy'
import {RegisterForm} from 'react-hook-form'


const CalcResultDisplay = (Props) => {

    const {call_time_minutes,call_time_second,billing_term,cost } = Props;
    return (
        <Box sx={{ flexGrow: 1, mx: 'auto', lineHeight: 7, textAlign: 'center'}}>
                <ViewResult>{Props.cost}</ViewResult>
        </Box>
    );
}

export default CalcResultDisplay;