import React from 'react'
import { Logo } from '../Logo/Logo'
import logo from '../../assets/logoSena.png'
import '../Title/Title.css'

export const Title = ({content}) => {
  return (
    <div>
         <div className='title'>
        <Logo image={logo}/>
        <h3>{content}</h3>
        </div>
        <hr />

    </div>
  )
}
