
import React, { useState } from "react"
import ColorList from "./ColorList"
import colorsData from "./colorsdata.json"

export default function App(){
   const [colors,setColors] =  useState(colorsData)
   console.log("colors..App....",colors)
   
 return (<ColorList colors= {colors} removeColor={ id=>{
 const newColors = colors.filter(
   color =>color.id!=id);
   setColors(newColors)
 
 }}/>)
 

}