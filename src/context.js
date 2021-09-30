import React, { useContext, useState } from "react"
const AppContext = React.createContext()
//React.createContext will give provider and consumer component
//provider is only that well use

const AppProvider = ({children})=>{
    const [bar,setBar] = useState(false)
    const [cross,setCross] = useState(false)
    const handleBar = ()=>{
        setBar(true)
        
    }
    const handleCross = ()=>{
        setCross(true)
        setBar(false)
    }
    return (
        <AppContext.Provider value = {{bar,cross,handleBar,handleCross}}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export { AppContext, AppProvider, useGlobalContext };