// import logo from './logo.svg';
// import Message from './Pages/Message';
// import Action from './Pages/Action';
// import TexteColoree from './Pages/TexteColoree';
// import CarteImage from './Pages/CarteImage';
import 'bootstrap/dist/css/bootstrap.min.css'
import ListeProfils from './ListeProfils';
import FormulaireProfil from './FormulaireProfil';
import { useState } from 'react';
import NavBar from '../Components/NavBar';
function Profiles() {

  const [profils, setProfil]= useState([
    {
      nom: 'Alice',
      age: 25,
      profession: 'Développeuse',
      image: 'https://cdn.ebaumsworld.com/mediaFiles/picture/718392/86147753.jpg'
  },
  {
      nom: 'Bob',
      age: 30,
      profession: 'Designer',
      image: 'https://cdn.ebaumsworld.com/mediaFiles/picture/718392/86147753.jpg'
  },
  {
      nom: 'Jack',
      age: 22,
      profession: 'Artist',
      image: 'https://cdn.ebaumsworld.com/mediaFiles/picture/718392/86147753.jpg'
  },
  {
      nom: 'Anouar',
      age: 50,
      profession: 'barista',
      image: 'https://cdn.ebaumsworld.com/mediaFiles/picture/718392/86147753.jpg'
  }
  ])

  const AjouterProfil=(profil)=>{
    const newProfil=[...profils, profil];
    setProfil(newProfil);
  }

  const supprProfil = (index) => {
    const newProfil = profils.filter((_, i) => i !== index);
    setProfil(newProfil);
    };
  return (
    <>
    <NavBar/>
      <h1 className='text-center'>Ajouter Profil</h1>
      <FormulaireProfil AjouterProfil={AjouterProfil}/>
      <hr />
      <h1 className="text-center mt-4">Liste des Profils</h1>
      <ListeProfils profils={profils} supprProfil={supprProfil}/>
    </>
  );
}

export default Profiles;
