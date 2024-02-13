import React, { useCallback, useMemo, useState } from 'react'
import Parent from './Parent'

function UseCallBack() {
  //all states
  const [counterone, setCounterone] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementOne = () => { setCounterone(counterone + 1) }
  const Learning =useCallback(()=>{},[counterTwo])
  return (
    <div>
      <Parent counterTwo={counterTwo} setCounterTwo={setCounterTwo} Learning={Learning} />
      <div className='use-memo-counter'>
        <button className='btn' onClick={incrementOne}>counterOne</button>
        <span className='counter-value'>{counterone}</span>
      </div>
      <h2>counter two</h2>
      <button className='btn' onClick={()=>setCounterTwo(counterTwo+1)}>counterTwo</button>
        <span className='counter-value'>{counterTwo}</span>
    </div>
  )
}

export default UseCallBack
