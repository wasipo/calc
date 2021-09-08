import {
    TextField,
    Button,
    Stack,
    FormLabel
} from '@mui/material';
import { TextItem } from '../Styleds/Box.js'


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
            <Button mx="auto">計算するよ</Button>
        </Stack>
        </div>
    );
};


export default DefaultCalcForm;