import React from "react"

export default function Color({id,title,color}){
    return(
        <>
       Title: {title}
       <div style={{height:50,backgroundColor:color}}></div>
        </>
    )
} 