import React from 'react'

export default function TexteColoree({colour, taille, text}) {
    let style={
        color:colour,
        fontSize:taille,
    }
  return (
    <>
      <p style={style}>{text}</p>
    </>
  )
}
