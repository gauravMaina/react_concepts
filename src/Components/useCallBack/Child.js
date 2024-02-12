import React, { memo } from 'react'

function Child() {
    console.log('this child component called')

  return (
    <div>
      This is Child Coponent
    </div>
  )
}

export default memo(Child)
