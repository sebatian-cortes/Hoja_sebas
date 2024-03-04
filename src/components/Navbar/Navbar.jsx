import React from 'react'
import { ItemNav } from '../ItemNav/ItemNav'
import { Logo } from '../Logo/Logo'

import '../Navbar/Navbar.css'

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <ItemNav content = 'Inicio' url='#PERFIL' />
        <ItemNav content = 'Perfil' url='#PERFIL'/>
        <ItemNav content = 'Proyectos' url='#PROYECTOS'/>
        <ItemNav content = 'Referencias' url='#REFERENCIAS'/>
        <ItemNav content = 'Experiencia' url='#EXPERIENCIA'/>
      </ul>
    </nav>
  )
}