import React from "react"
import StartRating from "./StarRating"
import {FaTrash} from "react-icons/fa"
export default function Color({id,title,color,rating,onRemove= f=>f}){
    return (
        <section>
            <title>{title}</title>
            <button onClick= {()=>onRemove(id)}>
                <FaTrash/>
            </button>
            <div style={{height:50,backgroundColor:color}}></div>
            <StartRating color={color} selectedStars={rating} ></StartRating>
        </section>
    )
}