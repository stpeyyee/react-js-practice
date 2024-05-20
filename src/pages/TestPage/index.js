import * as React from 'react';
import { useState, useCallback, useEffect, useMemo } from 'react';

import AddMachine from './modules/AddMachine';
import ShowMachine from './modules/ShowMachine';

export default function TestPage() {
    // Demo data
    let arrayMachine = [
        { id: 1, tag: 'MACHINE_TAG_001', type: "GAS_TURBINE", },
        { id: 2, tag: 'MACHINE_TAG_002', type: "GAS_TURBINE" },
        { id: 3, tag: 'MACHINE_TAG_003', type: "POWER_TURBINE" },
        { id: 4, tag: 'MACHINE_TAG_004', type: "BLOWER" },
        { id: 5, tag: 'MACHINE_TAG_005', type: "PUMP" },
    ]

    // useState
    let [data, setData] = useState(arrayMachine)
    let [tag, setTag] = useState("")
    let [type, setType] = useState("")

    // useCallback
    const onChangeTag = useCallback((str) => {
        // console.log("str",str)
        setTag(str)
    }, [setTag])

    console.log("tag",tag)
    const onChangeType = useCallback((str) => {
        setType(str)
    }, [setType])

    const onClickAdd = useCallback(() => {
        console.log("data", ...data, data)
        let updateData = [...data, { id: data?.length+1, tag: tag, type: type }]
        setData(updateData)
        setTag("")
        setType("")
        console.log("updateData", updateData)
    }, [tag, type, data, setData, setTag, setType])

    // useEffect
    let [count, setCount] = useState(1)

    useEffect(() => {
        // console.log("useEffect")
        // setCount(count + 1)
        console.log("count")
    }, [])

    // useMemo
    // let [labelData, setLabelData] = useState()
    let labelData = useMemo(() => {
        // Add properties "name"
        // let arr = arrayMachine
        // arr.map((obj) => {
        //     obj.name = obj.tag.replace("_", " ")
        // })
        return arrayMachine.map((v) => {
            return {
                ...v,
                name: v.tag.replace("_", "")
            }
        })
    }, [arrayMachine])

    console.log("labelData", labelData)
    
    console.log("arrayMachine", arrayMachine)




    // const labelData = useMemo(() => {
    //     // Add properties "name"
    //     let arr = arrayMachine.map((obj) => {
    //         return obj.name = obj.tag.replace("_", " ")
    //     })
    //     return arr
    // }, [arrayMachine])

    // console.log("labelData",labelData)
    // console.log("arrayMachine",arrayMachine)



    // console.log("labelData", labelData)
    console.log("method-array", arrayMachine)
    console.log("method-destruct", ...arrayMachine)
    console.log("method-filter", arrayMachine.filter((obj) => obj.type === "GAS_TURBINE"))
    console.log("method-length", arrayMachine.length)
    console.log("method-findIndex", arrayMachine.findIndex((obj) => obj.tag === "MACHINE_TAG_002"))

    return (
        <div
            style={{
                minHeight: "100vh",
                borderRadius: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >

            <AddMachine tag={tag} type={type} onChangeTag={onChangeTag} onChangeType={onChangeType} onClickAdd={onClickAdd} />
            <ShowMachine data={data} />
        </div>
    );
}
