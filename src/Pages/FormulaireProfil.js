import React, { useState } from 'react'

export default function FormulaireProfil({AjouterProfil}) {
    const [nom, setNom] = useState(''); 
    const [age, setAge] = useState(''); 
    const [profession, setProfession] = useState(''); 
    const [image, setImage] = useState(''); 

    const submet=(event)=>{
        event.preventDefault();
                
        const newProfil={nom, age, profession, image};

        AjouterProfil(newProfil);

        setNom('');
        setAge('');
        setProfession('');
        setImage('');
    }

  return (
    <>
      <form onSubmit={submet} className='form w-50 m-auto bordered'>
        Nom: <input type="text" className='form-control' value={nom} onChange={(e)=>setNom(e.target.value)} />
        Age: <input type="text"  className='form-control'value={age} onChange={(e)=>setAge(e.target.value)} />
        Profession: <input type="text" className='form-control' value={profession} onChange={(e)=>setProfession(e.target.value)} />
        Image: <input type="text" className='form-control' onChange={(e)=>setImage(e.target.value)} />
        <button type='submet' className='btn btn-primary w-100 '>AjouterProfil</button>
      </form>
    </>
  )
}
