const Veggies =["Tomoto","Cabage","Spinach"]

//console.log("reverse....,",Veggies.reverse())
//console.log("origina....,",Veggies)

console.log("reverse....,",[...Veggies].reverse())
console.log("origina....,",Veggies)

const morning= {
    breakfast: "oatmeal",
    lunch: "rice"
}

const dinner = "Mac and Cheese";

const fullDay = {
    ...morning,
    dinner
}

console.log("fullday....",fullDay)