import { Grid, Stack } from "@mui/material"
import BasicButton from "../../../../components/BasicButton"
import BasicTextField from "../../../../components/BasicTextField"


export default function AddMachine(props) {
    let { onChangeMachineTag, onClickAddMachine } = props
    return (
        // <Grid container spacing={0} lg={12} justifyContent={"center"} alignItems={"center"} direction={"row"}>
        //     <Grid item xs={6} alignSelf={"left"}>
        //         <BasicTextField onChange={onChangeMachineTag}></BasicTextField>
        //     </Grid>
        //     <Grid item xs={6}>
        //         <BasicButton label="Add Machine" onClick={onClickAddMachine}></BasicButton>
        //     </Grid>
        // </Grid>
        <Stack direction={"row"} spacing={2} justifyContent={"center"} alignItems={"center"}>
            <BasicTextField placeholder="Please fill machine tag" onChange={onChangeMachineTag}></BasicTextField>
            <BasicButton label="Add Machine" onClick={onClickAddMachine}></BasicButton>
        </Stack>
    )
}