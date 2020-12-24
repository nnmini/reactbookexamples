import React from "react"

export default function Ingrediant({name,amount,measurement}){
console.log("name,",name)
console.log("amount,",amount)
console.log("measurement,",measurement)
    return(
        <li key={name}>{name} {amount} {measurement}</li>
    )
    
}