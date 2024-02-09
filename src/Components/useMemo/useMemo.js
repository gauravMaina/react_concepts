import React, { useState } from 'react'

function UseMemo() {

    const [counterone, setCounterone] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne =()=>{
        setCounterone(counterone+1)
    }
    const incrementTwo =()=>{
        setCounterTwo(counterTwo+1)
    }
  return (
    <div>
      {counterone}
      <button onClick={incrementOne}>counterOne</button>
      {counterTwo}
      <button onClick={incrementTwo}>counterTwo</button>
    </div>
  )
}

export default UseMemo
