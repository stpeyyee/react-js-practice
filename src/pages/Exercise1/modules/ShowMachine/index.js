import * as React from 'react'
import BasicDataGrid from '../../../../components/BasicDataGrid'

export default function ShowMachine(props) {
    let { machineRows } = props
    const machineColumns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'tag',
            headerName: 'TAG',
            width: 200,
        },
        {
            field: 'type',
            headerName: 'TYPE',
            width: 200,
        }
    ];
    return (
        <BasicDataGrid rows={machineRows} columns={machineColumns}></BasicDataGrid>
    )
}