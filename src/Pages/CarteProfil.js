import React from 'react'

export default function CarteProfil({nom, age, profession, image}) {

    // let AffichageNom = ()=> alert(`Vous avez cliquer sur : ${nom}`)
  return (
      <div className='card w-25 m-auto'>
        <img src={image} className='card-img-top' style={{borderRadius:"10px", height:'150px'}} alt=""/>
        <h1 className='card-title'>Nom: {nom}</h1>
        <p className='card-text'>Age: {age}</p>
        <p className='card-text'>Profession: {profession}</p>
        {/* <button className='btn btn-info' onClick={AffichageNom}>Cliquer ici</button> */}
      </div>
  )
}
