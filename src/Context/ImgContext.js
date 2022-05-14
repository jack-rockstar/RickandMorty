import React, {useState} from "react";

const Context=React.createContext({})

export function ImgContext({children}){
    const [img , setImg]=useState([])
    return <Context.Provider value={{img, setImg}}>
        {children}
    </Context.Provider>
}

export default Context