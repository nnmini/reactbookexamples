
import {FaStar} from "react-icons/fa"
import React from "react"
const createArray = size => [...Array(size)]

export default function StartRating({totalStars = 5, selectedStars,color}){
       
    return createArray(totalStars).map((n,i)=>{
        if(i<selectedStars)
        return (<FaStar key={i} selected={true} color={color}></FaStar>)
        else
        return (<FaStar key={i} ></FaStar>)
        
    })
}