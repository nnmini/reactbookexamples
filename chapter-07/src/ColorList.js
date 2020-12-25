import React from "react"
import Color from "./Color"

export default function ColorList({colors, removeColor= f=>f }){
    console.log("colors.............",colors)
    return (
        
            colors.map((color,i)=><Color key={i} {...color} onRemove= {removeColor}></Color>)
        
    )
}