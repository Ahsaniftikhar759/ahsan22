import React,{useState} from 'react'

function Hook2() {
    let initial=0
    let [count,setcount]=useState(initial)
    return (
        <div>
            Count:{count} 
            <button onClick={()=>setcount(initial)}>reset</button>
            <button onClick={()=>setcount(++initial)}>increment</button>
            <button onClick={()=>setcount(--initial)}>decrement</button>
       
        </div>
    )
}

export default Hook2
