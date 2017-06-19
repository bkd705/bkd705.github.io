// @flow
import React from 'react'
import type { Element } from 'react'
import './titlebar.css'

type titleBarType = {
  heading: string,
  subheading?: string,
  style?: Object
}

const TitleBar = ({
  heading,
  subheading,
  style
}: titleBarType): Element<any> => {
  return (
    <div className="title-bar" style={style}>
      <h1>{heading}</h1>
      <h3>{subheading}</h3>
    </div>
  )
}

export default TitleBar
