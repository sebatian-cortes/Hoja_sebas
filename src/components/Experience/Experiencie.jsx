import React from 'react'
import '../Experience/Experiencie.css'
import { Title } from '../Title/Title'
import { Progress } from '../Progress/Progress'
import react from '../../assets/logo.png'
import mongo from '../../assets/mongo.png'
import java from '../../assets/java.png'
import python from '../../assets/python.png'
import node from '../../assets/node.png'
import js from '../../assets/js.png'
import ts from '../../assets/ts.png'








export const Experiencie = () => {
  return (
    <div className='experiencie'>
        <Title content='EXPERIENCIA'/>
        <div className='tecnologys'>
        <Progress tecnology={react} porcent={50} content='React'/>
        <Progress tecnology={mongo} porcent={60} content='MongoDB'/>
        <Progress tecnology={python} porcent={50} content='Python'/>
        <Progress tecnology={java} porcent={70} content='Java'/>
        <Progress tecnology={node} porcent={60} content='Node'/>
        <Progress tecnology={js} porcent={70} content='JavaScript'/>
        <Progress tecnology={ts} porcent={50} content='TypeScript'/>

        </div>
    </div>
  )
}
