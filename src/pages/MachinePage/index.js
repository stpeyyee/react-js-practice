import * as React from 'react';
import { Grid } from '@mui/material';
import { useState, useCallback } from 'react';

import AddMachine from './modules/AddMachine';
import ShowMachine from './modules/ShowMachine';
import StatFullTemplate from '../../modules/StatFullTemplate';

const demoData = [
    { id: 1, tag: 'MACHINE_TAG_001' },
    { id: 2, tag: 'MACHINE_TAG_002' },
    { id: 3, tag: 'MACHINE_TAG_003' },
    { id: 4, tag: 'MACHINE_TAG_004' },
    { id: 5, tag: 'MACHINE_TAG_005' },
];

export default function MachinePage() {

    let [machineRows, setMachineRows] = useState(demoData)
    let [newMachineTag, setNewMachineTag] = useState("")

    // Text machine tag
    let onChangeMachineTag = useCallback((value) => {
        setNewMachineTag(value)
    }, [setNewMachineTag])

    // Add machine 
    let onClickAddMachine = useCallback(() => {
        let updateData = [
            ...machineRows,
            { id: machineRows?.length + 1, tag: newMachineTag }
        ]
        setMachineRows(updateData)
    }, [newMachineTag, machineRows, setMachineRows])


    return (
        <Grid container spacing={2} justifyContent={"center"} alignItems={"center"} direction={"row"}>
            <Grid item xs={12}>
                <StatFullTemplate value={machineRows?.length} unit={"machines"} />
            </Grid>
            <Grid item xs={12}>
                <AddMachine onChangeMachineTag={onChangeMachineTag} onClickAddMachine={onClickAddMachine} />
            </Grid>
            <Grid item xs={10}>
                <ShowMachine machineRows={machineRows} />
            </Grid>
        </Grid>
    );
}
