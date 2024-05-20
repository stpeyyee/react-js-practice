import { Grid, Stack } from "@mui/material"
import BasicButton from "../../../../components/BasicButton"
import BasicTextField from "../../../../components/BasicTextField"
import BasicSelect from "../../../../components/BasicSelect"


export default function AddMachine(props) {
    let { newMachineTag, newMachineType, onChangeMachineTag, onChangeMachineType, onClickAddMachine } = props
    return (
        <Stack direction={"row"} spacing={2} justifyContent={"center"} alignItems={"center"}>
            <BasicTextField value={newMachineTag} placeholder="Please fill machine tag" onChange={onChangeMachineTag}></BasicTextField>
            <BasicSelect title="Type" value={newMachineType} choices={["Power Turbine", "Gas Turbine", "Motor"]} onChange={onChangeMachineType}></BasicSelect>
            <BasicButton label="Add Machine" onClick={onClickAddMachine}></BasicButton>
        </Stack>
    )
}