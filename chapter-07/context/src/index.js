import React, { createContext } from "react"
import {render} from "react-dom"
import colors from "./colorsdata.json"
import App from "./App"
//Create Context and export
//Set color in newly created context
//Wrap arround App.

export const ColorContext = createContext();
console.log("colors......",colors)
render(
    <ColorContext.Provider value={{colors}}>
        <App />
    </ColorContext.Provider>,
    document.getElementById("root")
)