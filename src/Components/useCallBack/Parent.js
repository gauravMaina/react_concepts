import React, { memo } from 'react'
import Child from './Child'

function Parent() {
    console.log('this parent component called')
  return (
    <div>
      <Child/>
      <span>This is parent component</span>
    </div>
  )
}

export default memo(Parent)
