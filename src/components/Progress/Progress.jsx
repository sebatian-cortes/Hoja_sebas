import React from 'react'
import './Progress.css'
import { Logo } from '../Logo/Logo'
import ProgressBar from "@ramonak/react-progress-bar";



export const Progress = ({tecnology, porcent, content}) => {
  return (
    <div className='progress'>
        <Logo image={tecnology}/>
        <div className='porcent'>
        <ProgressBar completed={porcent} bgColor='#39a900' baseBgColor='#c1ff95' customLabel=" "/>
        <h3>{content}</h3>
        </div>

    </div>
  )
}
