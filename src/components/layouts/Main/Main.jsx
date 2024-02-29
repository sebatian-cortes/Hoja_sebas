import React from 'react'
import { Perfil } from '../../Perfil/Perfil'
import '../Main/Main.css'
import { Projects } from '../../Projects/Projects'
import { Reference } from '../../Reference/Reference'
import { Experiencie } from '../../Experience/Experiencie'




export const Main = () => {
  return (
    <main> 
    <Perfil/>
    <Projects/>
    <Reference/>
    <Experiencie/>
     </main>
  )
}
