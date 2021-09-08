import {
    TextField,
    Button,
    Stack,
    FormLabel
} from '@mui/material';
import { TextItem,CalcExec } from '../Styleds/Box.js'


const DefaultCalcForm = () => {
    return (
        <div>
        <Stack component="form" autoComplete="off">
            <TextItem mx="auto">
                <FormLabel>ナビダイヤル通話時間</FormLabel>
                <TextField size="small" />
            </TextItem>
            <TextItem mx="auto">
                <FormLabel>10秒毎の料金</FormLabel>
                <TextField size="small" />
            </TextItem>
            <CalcExec variant="contained" style={{width: '230px',margin: '0 auto',marginTop: '50px'}}>計算するよ</CalcExec>
        </Stack>

        </div>
    );
};


export default DefaultCalcForm;