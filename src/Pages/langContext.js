import React, { createContext, useState } from "react";

export const LangContext = createContext();

export default function LangProvider({ children }) {
  const [lang, setLang] = useState();
  let titre='Welcome to MyApp!'
    let text=`Explore a variety of powerful tools that help you stay productive, informed, and entertained. Whether you're calculating numbers, managing tasks, learning about world geography, or managing profiles, MyApp Hub has everything you need to simplify your digital life.
    Explore Our Apps:
    Calculator: Perform complex calculations with ease using our simple yet powerful calculator app. From basic arithmetic to advanced functions, it's the perfect tool for all your mathematical needs.
    Tasks App: Stay organized and productive! Manage your tasks, set deadlines, and track your progress in one easy-to-use app. Whether it's personal tasks or work-related, never miss an important deadline again.
    World Geography: Explore the globe! Learn about countries, capitals, continents, and more. Whether you're a geography enthusiast or preparing for a trivia night, this app offers fun and educational content.
    Flags & Countries: Test your knowledge of world flags and countries! From recognizing national flags to learning interesting facts about each country, this app is both educational and fun.
    Profile Manager: Keep all your important profiles in one place. Whether it's for social media, work, or personal accounts, the Profile Manager makes managing and updating your profiles quick and secure.`
  
  if(lang==='EN') {
    titre= "Welcome to MyApp!"
    text = `Explore a variety of powerful tools that help you stay productive, informed, and entertained. Whether you're calculating numbers, managing tasks, learning about world geography, or managing profiles, MyApp Hub has everything you need to simplify your digital life.

    Explore Our Apps:

    Calculator: Perform complex calculations with ease using our simple yet powerful calculator app. From basic arithmetic to advanced functions, it's the perfect tool for all your mathematical needs.
    Tasks App: Stay organized and productive! Manage your tasks, set deadlines, and track your progress in one easy-to-use app. Whether it's personal tasks or work-related, never miss an important deadline again.
    World Geography: Explore the globe! Learn about countries, capitals, continents, and more. Whether you're a geography enthusiast or preparing for a trivia night, this app offers fun and educational content.
    Flags & Countries: Test your knowledge of world flags and countries! From recognizing national flags to learning interesting facts about each country, this app is both educational and fun.
    Profile Manager: Keep all your important profiles in one place. Whether it's for social media, work, or personal accounts, the Profile Manager makes managing and updating your profiles quick and secure.`
  }
  else if(lang==='ES') {
    titre= "¡Bienvenido a MyApp!"
    text= `Explora una variedad de herramientas poderosas que te ayudarán a mantenerte productivo, informado y entretenido. Ya sea calculando números, gestionando tareas, aprendiendo sobre geografía mundial o gestionando perfiles, MyApp Hub tiene todo lo que necesitas para simplificar tu vida digital.

    Explora Nuestras Aplicaciones:

    Calculadora: Realiza cálculos complejos con facilidad usando nuestra sencilla pero potente aplicación de calculadora. Desde la aritmética básica hasta funciones avanzadas, es la herramienta perfecta para todas tus necesidades matemáticas.
    Aplicación de Tareas: ¡Mantente organizado y productivo! Gestiona tus tareas, establece plazos y realiza un seguimiento de tu progreso en una sola aplicación fácil de usar. Ya sean tareas personales o relacionadas con el trabajo, nunca más perderás un plazo importante.
    Geografía Mundial: ¡Explora el mundo! Aprende sobre países, capitales, continentes y mucho más. Ya seas un entusiasta de la geografía o te estés preparando para una noche de trivia, esta aplicación ofrece contenido educativo y divertido.
    Banderas y Países: ¡Pon a prueba tus conocimientos sobre las banderas y países del mundo! Desde reconocer banderas nacionales hasta aprender hechos interesantes sobre cada país, esta aplicación es tanto educativa como divertida.
    Gestor de Perfiles: Mantén todos tus perfiles importantes en un solo lugar. Ya sea para redes sociales, trabajo o cuentas personales, el Gestor de Perfiles hace que gestionar y actualizar tus perfiles sea rápido y seguro.`
  }
  else{
    titre= "Bienvenue sur MyApp!"
    text= `Explorez une variété d'outils puissants qui vous aident à rester productif, informé et diverti. Que vous calculiez des nombres, gériez des tâches, appreniez la géographie mondiale ou gériez des profils, MyApp Hub a tout ce dont vous avez besoin pour simplifier votre vie numérique.

    Explorez Nos Applications :

    Calculatrice : Effectuez des calculs complexes facilement grâce à notre application de calculatrice simple mais puissante. De l'arithmétique de base aux fonctions avancées, c'est l'outil parfait pour tous vos besoins mathématiques.
    Application de Tâches : Restez organisé et productif ! Gérez vos tâches, définissez des échéances et suivez vos progrès dans une application facile à utiliser. Que ce soit pour des tâches personnelles ou professionnelles, ne manquez plus jamais une échéance importante.
    Géographie du Monde : Explorez le globe ! Découvrez les pays, les capitales, les continents, et bien plus encore. Que vous soyez un passionné de géographie ou que vous vous prépariez pour une soirée quiz, cette application offre un contenu à la fois éducatif et amusant.
    Drapeaux et Pays : Testez vos connaissances des drapeaux et pays du monde ! De la reconnaissance des drapeaux nationaux à l'apprentissage de faits intéressants sur chaque pays, cette application est à la fois éducative et divertissante.
    Gestionnaire de Profils : Gardez tous vos profils importants en un seul endroit. Que ce soit pour les réseaux sociaux, le travail ou les comptes personnels, le Gestionnaire de Profils facilite la gestion et la mise à jour de vos profils de manière rapide et sécurisée.`
  }
  return (
    <>
      <LangContext.Provider value={{setLang, text, titre}}>
        {children}
      </LangContext.Provider>
    </>
  );
}
