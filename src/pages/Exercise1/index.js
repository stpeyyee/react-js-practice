import * as React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { useState, useCallback } from 'react';

import AddMachine from './modules/AddMachine';
import ShowMachine from './modules/ShowMachine';
import StatFullTemplate from '../../modules/StatFullTemplate';

const demoData = [
    { id: 1, tag: 'MACHINE_TAG_001', type: 'Gas Turbine' },
    { id: 2, tag: 'MACHINE_TAG_002', type: 'Power Turbine' },
    { id: 3, tag: 'MACHINE_TAG_003', type: 'Motor' },
    { id: 4, tag: 'MACHINE_TAG_004', type: 'Pump' },
    { id: 5, tag: 'MACHINE_TAG_005', type: 'Gas Turbine' },
];

export default function Exercise1() {

    let [machineRows, setMachineRows] = useState(demoData)
    let [newMachineTag, setNewMachineTag] = useState("")
    let [newMachineType, setNewMachineType] = useState("None")

    // Text machine tag
    let onChangeMachineTag = useCallback((value) => {
        setNewMachineTag(value)
    }, [setNewMachineTag])

    // Text machine type
    let onChangeMachineType = useCallback((value) => {
        setNewMachineType(value)
    }, [setNewMachineType])

    // Add machine 
    let onClickAddMachine = useCallback(() => {
        if (newMachineType === "None" || newMachineTag === "") {
            window.alert("Please fill data.")
        } else if (machineRows?.findIndex((row) => row.tag === newMachineTag) !== -1) {
            window.alert("Duplicate data.")
        } else {
            let updateData = [
                ...machineRows,
                { id: machineRows?.length + 1, tag: newMachineTag, type: newMachineType }
            ]
            setMachineRows(updateData)
        }
        setNewMachineTag("")
        setNewMachineType("None")
    }, [newMachineTag, newMachineType, machineRows, setMachineRows, setNewMachineTag, setNewMachineType])


    return (
        <Grid container spacing={2} justifyContent={"center"} alignItems={"center"} direction={"row"}>
            <Grid item sm={12} md={12} lg={12} xl={12} >
                <Grid item sm={12} md={12} lg={12} xl={12} align="left">
                    <Box
                        sx={{
                            minHeight: "20vh",
                            borderRadius: "0",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant='h6' fontWeight={"bold"}>Exercise #1</Typography>
                        <Typography variant='body1' fontWeight={"bold"}>
                            1. Add more information to machine page​<br></br>
                        </Typography>
                        <Typography variant='caption'>
                            1.1 Add machine type selector​​<br></br>
                            1.2 Show "TYPE" column in datagrid​​<br></br>
                        </Typography>
                        <Typography variant='body1' fontWeight={"bold"}>
                            2. Function validation​​<br></br>
                        </Typography>
                        <Typography variant='caption'>
                            2.1 Validate "Add Machine" button​​<br></br>
                            2.2 Validate textfield
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <StatFullTemplate value={machineRows?.length} unit={"machines"} />
            </Grid>
            <Grid item xs={12}>
                <AddMachine newMachineTag={newMachineTag} newMachineType={newMachineType} onChangeMachineType={onChangeMachineType} onChangeMachineTag={onChangeMachineTag} onClickAddMachine={onClickAddMachine} />
            </Grid>
            <Grid item xs={10}>
                <ShowMachine machineRows={machineRows} />
            </Grid>
        </Grid>
    );
}
