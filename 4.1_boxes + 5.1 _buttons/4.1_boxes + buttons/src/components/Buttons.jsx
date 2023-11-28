import React from 'react'
import "./buttons.css"
export default function Buttons(props) {
  return (
<button className={props.className}>{props.btnText} {props.img}</button>  )
}
