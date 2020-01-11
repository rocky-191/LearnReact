import React, { useEffect,useState } from 'react'

export default function MyEffect(){
    const [date,setDate]=useState(new Date())
    useEffect(()=>{
        const timeId=setInterval(()=>{
            setDate(new Date())
        })
        return ()=>clearInterval(timeId)
    },1000)
    return <div>{date.toLocaleTimeString()}</div>
}