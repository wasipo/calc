import {
    TextField,
    Button,
    Stack
} from '@mui/material';

  
const DefaultCalcForm = () => {
    return (
        <Stack
        component="form"
        sx={{
          '& > :not(style)': { m: 2, width: '25ch', textAlign: 'center'},
        }}
        noValidate
        autoComplete="off">
            <TextField size="small" />
            <TextField size="small" />
            <Button>計算するよ</Button>
        </Stack>
    );
};


export default DefaultCalcForm;