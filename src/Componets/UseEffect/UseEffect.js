import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("UseEffect Loading");
    })


  return (
    <div>UseEffect
    <h2>Count: {count}</h2>
    <button >Count</button>
    </div>
  )
}

export default UseEffect