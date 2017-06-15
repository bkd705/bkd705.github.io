import React from 'react'

const TitleBar = ({ heading, subheading }) => {
  return (
    <div className="title-bar">
      <h1>{heading}</h1>
      <h3>{subheading}</h3>
    </div>
  )
}

export default TitleBar
