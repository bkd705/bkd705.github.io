import React from 'react'
import './titlebar.css'

const TitleBar = ({ heading, subheading, style }) => {
  return (
    <div className="title-bar" style={style}>
      <h1>{heading}</h1>
      <h3>{subheading}</h3>
    </div>
  )
}

export default TitleBar
