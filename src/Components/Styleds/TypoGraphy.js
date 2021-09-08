import {
    Box,
    Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';


export const MainHeadLine = styled(Typography)(({ theme }) => ({
    ...theme.typography.h1,
    fontSize: 30,
    textAlign: 'center',
    margin: '0 auto',
    color: theme.palette.text.primary,
}));

export const ViewResult = styled(Typography)(({theme}) => ({
    ...theme.typography.h2,
    fontSize: 30,
    padding: 50,
    textAlign: 'center',
    margin: '0 auto',
    color: theme.palette.text.primary,
}));