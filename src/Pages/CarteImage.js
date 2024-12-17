import React from 'react'

export default function CarteImage({img, titre, description}) {
  return (
    <div className='card h-25 m-2 p-1' style={{width:'300px'}}>
        <img src={img} className='card-img-top' style={{borderRadius:"10px", height:'150px'}} alt=""/>
        <h1 className='card-title'>{titre}</h1>
        <p>{description}</p>
    </div>
  )
}
