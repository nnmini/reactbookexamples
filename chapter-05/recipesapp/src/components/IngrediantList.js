import React from "react"
import Ingrediant from "./Ingrediant"

export default function IngrediantList({list}){
    console.log("list............",list)
    return(
        <ul>
            {
                list.map((ingrediant,i) =>
                    <Ingrediant key={i} {...ingrediant}></Ingrediant>
                )
            }
        </ul>
    )
}

