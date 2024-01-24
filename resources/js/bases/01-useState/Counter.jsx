import React, { useEffect, useState } from 'react'

const Counter = () => {

  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   console.log('useEffect')
  // }, [])

  // useEffect(() => {
  //   console.log('counter');
  // }, [counter])
      
  const onIncrement = () =>{
    setCounter(counter + 1);
  }

  const onDecrement = () =>{
    setCounter(counter - 1);
  }

  const onIncrementBy10 = () =>{
    setCounter(counter + 10);
  }

  const onReset = () =>{
    setCounter(0);
  }

  // useEffect(() => {
  //   console.log('se ejecuta interval');

  //   const interval = setInterval(() => {
  //     setCounter((prev) => {
  //       prev + 1
  //     })
  //   },2000);

  //   return () => {
  //     clearInterval(interval);
  //     console.log('se detuvo el interval')
  //   }
  // }, []);
  

  return (
    <div>
      <h1>React BootCamp</h1>
      <h2>{counter}</h2>
      <button className="btn btn-primary" onClick={onIncrement}>Incrementar</button>
      <button onClick={onDecrement}>Decrementar</button>
      <button onClick={onIncrementBy10}>IncrementBy10</button>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}

export default Counter
