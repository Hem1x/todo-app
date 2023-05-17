import React from 'react'

const RunListButton = ({children, ...props}) => {
  return (
    <button {...props}>{children}</button>
  )
}

export default RunListButton