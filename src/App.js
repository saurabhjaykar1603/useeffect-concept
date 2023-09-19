import React from 'react'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const increment = () =>{
    setCount(count + 1)

  } 
  const decrement = () =>{
    setCount(count - 1)
  }
return (
    <>
      <h1 className='Count'>Count :{count}</h1>
      <div className='d-flex justify-center'>
        <button onClick={decrement}>Dec</button>
        <button onClick={increment} >Inc</button>
      </div>
    </>
  )
}



export default App
