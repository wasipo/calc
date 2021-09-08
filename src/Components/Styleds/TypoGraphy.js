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