import * as React from 'react';

export default function ShowMachine(props) {
    let { data } = props
    return (
        <div>
            <table style={{ width: 700 }}>
                <tr>
                    <th style={{ border: '1px solid black' }}>ID</th>
                    <th style={{ border: '1px solid black' }}>TAG</th>
                    <th style={{ border: '1px solid black' }}>TYPE</th>
                </tr>
                {data.map((obj) => {
                    return (
                        <tr>
                            <td style={{ border: '1px solid black' }}>{obj.id}</td>
                            <td style={{ border: '1px solid black' }}>{obj.tag}</td>
                            <td style={{ border: '1px solid black' }}>{obj.type}</td>
                        </tr>
                    )
                })}
            </table>
        </div >

    );
}
