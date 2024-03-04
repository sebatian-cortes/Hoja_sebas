import React from 'react'
import { Perfil } from '../../Perfil/Perfil'
import '../Main/Main.css'
import { Projects } from '../../Projects/Projects'
import { Reference } from '../../Reference/Reference'
import { Experiencie } from '../../Experience/Experiencie'
import { Button } from '../../Button/Button'





export const Main = () => {
  return (
    <main> 
    <Perfil/>
    <Projects/>
    <Reference/>
    <Experiencie/>
    <Button/>
     </main>
  )
}
