import React, { useContext } from "react"
import {render} from "react-dom"
import {ColorContext} from "./"
import Color from "./Color"


export default function ColorList(){
    const {colors} = useContext(ColorContext)
    if(colors.length===0) return <div>No Colors available</div>
    else{
        return(
        colors.map((color)=> <Color key= {color.id} {...color}></Color>
        )
        )
    }

}