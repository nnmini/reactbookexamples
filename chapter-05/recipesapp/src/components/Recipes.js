import React from "react"
import IngradientList from "./IngrediantList"
import Instructions from "./Instructions"

export default function Recipes({name,ingredients,steps}){
    return(
        <section>
        <h1>{name}</h1>
        <IngradientList list={ingredients}></IngradientList>
        <Instructions steps={steps}></Instructions>
        </section>
    )
}