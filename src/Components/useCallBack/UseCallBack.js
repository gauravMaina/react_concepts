import React, { useCallback, useMemo, useState } from 'react'
import Parent from './Parent'

function UseCallBack() {
    const [counterone, setCounterone] = useState(0)

    const isEven = useMemo(()=>{
        return counterone%2===0
    },[counterone])


    const incrementOne =useCallback(()=>{setCounterone(counterone + 1)},[counterone])
  return (
    <div>
      <Parent counterone={counterone} incrementOne={incrementOne}/>

      <div className='use-memo-counter'>
                <button className='btn' onClick={incrementOne}>counterOne</button>
                <span className='counter-value'>{counterone}</span>
                <span className='counter-value'>{isEven?'Even':'Odd'}</span>
            </div>
    </div>
  )
}

export default UseCallBack
