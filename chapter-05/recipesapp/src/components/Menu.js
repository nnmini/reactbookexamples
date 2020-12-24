import React from "react"
import Recipe from "./Recipes"

export default function Menu({recipes}){
    console.log("recipes.............",recipes)
return(
    <article>
        <header>
            <h1>Delicious Food</h1>
        </header>
        <div className="recipes">
        {
        recipes.map((recipe,i) => <Recipe key={i} {...recipe}></Recipe>
        )
    }
    </div>
    </article>
)

}