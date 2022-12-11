import React from 'react'

export default function socialMedia(props) {
  return (
    <div>
      <a href={props.social}><button id='socials'>{props.icon}</button></a>
    </div>
  )
}
