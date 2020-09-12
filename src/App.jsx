import React, { useState } from "react"


const App=()=>{
    let time=new Date().toLocaleTimeString()
    const [currentTime,updatedTime]=useState(time)

    const timeFun=()=>{
        let time=new Date().toLocaleTimeString()
        updatedTime(time)
    }
    setInterval(timeFun,1000)

    return(
        <>
             <h1>{currentTime}</h1>
        </>
    )
}
export default App