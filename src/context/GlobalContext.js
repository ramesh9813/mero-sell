import React,{createContext} from "react";
export const global=createContext();

const std={
    fname:'samrat',
    age:23
}

const GlobalContextProvider=(props)=>(
    <global.Provider value={std}>
        {props.children}
    </global.Provider>
)

export default GlobalContextProvider