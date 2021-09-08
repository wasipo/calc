import {
    Box
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeaderStyle = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const TextItem = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    width: 300,
    color: theme.palette.text.secondary,
}));