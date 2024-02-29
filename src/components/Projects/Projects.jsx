import React from 'react'
import { Title } from '../Title/Title'
import '../Projects/Projects.css'
import { Card } from '../Card/Card'
import { CardContent } from '../Json/CardContent'



export const Projects = () => {
  return (
    <div className='projects'>
        <Title content='PROYECTOS'/>
        
        <div className='projectsBox'>
        {
              CardContent.map(card=>(                
                <Card
                  key={card._id}
                  photo={card.image}
                  title={card.title}
                  description={card.description}
                enlace={card.enlace}
                />
              ))
            }

        </div>
        
    </div>
  )
}
