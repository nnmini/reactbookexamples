import React, { useState } from "react"
import {FaStar} from "react-icons/fa"
const createArray = size => [...Array(size)]
function selected(e){
    alert("e...")
   console.log(e)
}
export default function StartRating({totalStars = 5}){
    const [selectedStars,setSelectedStars] = useState(0)
    
    return createArray(totalStars).map((n,i)=>{
        console.log(selectedStars, "render again");
        
        if(i<selectedStars){
            return (<FaStar key={i} color="red"  onClick ={()=>setSelectedStars(selectedStars+1)}></FaStar>)
        }else{
            return (<FaStar key={i} color="grey" onClick ={()=>setSelectedStars(selectedStars+1)}></FaStar>)
        }
    })
}

// Declare a new state variable, which we'll call "count"
/*export default function StartRating({totalStars = 5}){
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}*/