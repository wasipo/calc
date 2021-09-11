import {
    TextField,
    Button,
    Stack,
    Grid,
    FormLabel,
    getInputAdornmentUtilityClass,
} from '@mui/material';
import {useState} from "react";
import { useForm } from "react-hook-form";
import { TextItem,CalcExec } from '../Styleds/Box'
import Display from '../Displays/CalcResultDisplay'

const DefaultCalcForm = () => {

    const [setCost,setCostProp] = useState(0);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = inputData => {
        const callTime = Number(inputData.call_time_minutes * 60)+Number(inputData.call_time_second);
        const cost = (callTime/inputData.billing_term)*inputData.cost;
        setCostProp(Number(cost));
    };

    return (
        <div>
        <Display cost={setCost} />
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
                        <FormLabel>料金/(秒)</FormLabel>
                        <TextField {...register("cost", { required: true })} size="small" />
                    </Grid>
                </Grid>
            </TextItem>
            <CalcExec type="submit" variant="contained" style={{width: '230px',margin: '0 auto',marginTop: '50px'}}>計算</CalcExec>
        </Stack> 
        </div>
    );
};


export default DefaultCalcForm;