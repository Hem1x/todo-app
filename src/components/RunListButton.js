import React from 'react'

const RunListButton = ({children, ...props}) => {
  return (
    <button className="runListBtn" {...props}>{children}</button>
  )
}

export default RunListButton