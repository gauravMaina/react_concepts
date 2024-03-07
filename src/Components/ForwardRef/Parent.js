import React, { useRef } from 'react'
import Child from './Child'

function Parent() {
    const inputRef = useRef(null)
    function handleClick(){
        inputRef.current.value= '1000'
    }
  return (
    <div>
    <h4>Forward ref in react</h4>
    <Child ref={inputRef} />
    <button onClick={handleClick}>Click Me</button>
    </div>

  )
}

export default Parent
