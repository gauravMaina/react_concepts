import React, { useMemo, useState } from 'react'
import './style.css'
function UseMemo() {

    const [counterone, setCounterone] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterone(counterone + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(()=>{
        console.log('isEven called')
        return counterone%2===0
    },[counterone])

    // usememo reduce unnecessary called of isEven function
    return (
        <div>
            <div className='use-memo-counter'>
                <button className='btn' onClick={incrementOne}>counterOne</button>
                <span className='counter-value'>{counterone}</span>
                <span className='counter-value'>{isEven?'Even':'Odd'}</span>
            </div>
            <div className='use-memo-counter'>

                <button onClick={incrementTwo} className='btn'>counterTwo</button>
                <span className='counter-value'>{counterTwo}</span>
            </div>
        </div>
    )
}

export default UseMemo
