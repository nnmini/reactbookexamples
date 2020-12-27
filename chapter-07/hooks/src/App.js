import React, { useEffect, useState } from "react"

export default function App(){
    const [val,setVal] = useState("");
    const [phrase,setPhrase] = useState("test pharse");

    const createPhrase = ()=>{
        setPhrase(val);
        setVal("");
    }

    useEffect(
        () =>{
            console.log("value....",val)

        },[val]
    )

    useEffect(
        ()=>{
            console.log("phrase....",phrase)
        },[phrase]
    )
    return(
        <>
        <input value={val}
        placeholder={phrase}
        onChange = {(e)=>setVal(e.target.value)}></input>
        <button onClick ={createPhrase}>Add Phrase</button>
        </>
    )
}