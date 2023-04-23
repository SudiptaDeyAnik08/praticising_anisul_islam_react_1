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


    const [todo,setTodo] = useState(null)
    const [isloading,setIsloading] = useState(true)

    const loadingMassage = <p>Massage is loading</p>

    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res=>{
        return res.json();
      })
      .then(res=> {
        setTodo(res);
      setIsloading(false);
      });
    },[])

  return (
    <div>UseEffect
    <h2>Count: {count}</h2>
    <button onClick={handelChange}>Count</button>
    {
      isloading&& loadingMassage
    }
    </div>
  )
}

export default UseEffect