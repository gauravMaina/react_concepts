import React, { useRef } from 'react'

function UseRefDemo() {

    let clickRef= useRef(0)
 
    const handleClick =()=>{
        clickRef.current= clickRef.current + 1
        alert(`You click ${clickRef.current} times`)
    }

    console.log('click ref first value',clickRef.current)

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default UseRefDemo
