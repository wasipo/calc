import {
    TextField,
    Button,
    Stack,
    Grid,
    FormLabel
} from '@mui/material';
import { useForm } from "react-hook-form";
import { TextItem,CalcExec } from '../Styleds/Box'
import Display from '../Displays/CalcResultDisplay'

const DefaultCalcForm = (Props) => {

    const result = 230;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = inputData => calcs(inputData);

    const calcs = data => {
        const callTime = Number(data.call_time_minutes * 60)+Number(data.call_time_second);
        result = (callTime/data.billing_term)*data.cost;
    };

    return (
        <div>
        <Display cost={result} />
        <Stack component="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <TextItem mx="auto">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FormLabel>通話時間(分)</FormLabel>
                        <TextField {...register("call_time_minutes", { required: true })} size="small" />
                    </Grid>
                    <Grid item xs={6}>
                        <FormLabel>通話時間(秒)</FormLabel>
                        <TextField {...register("call_time_second", { required: true })} size="small" />
                    </Grid>
                </Grid>
            </TextItem>
            <TextItem mx="auto">
            <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FormLabel>課金時間(秒)</FormLabel>
                        <TextField {...register("billing_term", { required: true })} size="small" />
                    </Grid>
                    <Grid item xs={6}>
                        <FormLabel>料金</FormLabel>
                        <TextField {...register("cost", { required: true })} size="small" />
                    </Grid>
                </Grid>
            </TextItem>
            <CalcExec type="submit" variant="contained" style={{width: '230px',margin: '0 auto',marginTop: '50px'}}>計算するよ</CalcExec>
        </Stack>

        </div>
    );
};


export default DefaultCalcForm;