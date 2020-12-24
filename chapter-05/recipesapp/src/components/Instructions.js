import React from "react"

export default function Instructions({steps}){
    return(
        steps.map((step,i)=>
            <p key={i}>{step}</p>
        

        )
    
    )
}