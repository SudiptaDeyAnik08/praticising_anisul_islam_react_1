import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("UseEffect Loading");
    },[count])

    const handelChange =()=>{
        const sum = count + 1;
        setCount(sum);
    }
  return (
    <div>UseEffect
    <h2>Count: {count}</h2>
    <button onClick={handelChange}>Count</button>
    </div>
  )
}

export default UseEffect