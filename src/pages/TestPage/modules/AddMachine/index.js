import * as React from 'react';

export default function AddMachine(props) {
    let { tag, type, onChangeTag, onChangeType, onClickAdd } = props
    return (
        <div style={{ padding: 5 }}>
            <label for="fname">TAG: </label>
            <input type="text" value={tag} placeholder="Please fill machine tag" onChange={(event) => onChangeTag(event.target.value)}></input>
            &nbsp;&nbsp;
            <label for="fname">TYPE: </label>
            <select value={type} onChange={(event) => onChangeType(event.target.value)}>
                <option>Please choose machine type</option>
                {["GAS_TURBINE", "POWER_TURBINE"].map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
            </select>
            &nbsp;&nbsp;
            <button type="button" onClick={() => onClickAdd()}>Add</button>
  
        </div>
    );
}
