import React from 'react'
import '../Experience/Experiencie.css'
import { Title } from '../Title/Title'
import { Progress } from '../Progress/Progress'
import react from '../../assets/logo.png'
import mongo from '../../assets/mongo.png'



export const Experiencie = () => {
  return (
    <div className='experiencie'>
        <Title content='EXPERIENCIA'/>
        <div className='tecnologys'>
        <Progress tecnology={react} porcent={70}/>
        <Progress tecnology={mongo} porcent={50}/>
        <Progress tecnology={react} porcent={70}/>
        <Progress tecnology={react} porcent={70}/>
        <Progress tecnology={mongo} porcent={50}/>
        </div>
    </div>
  )
}
