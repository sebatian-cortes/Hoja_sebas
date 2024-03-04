import React from 'react'
import '../Reference/Reference.css'
import { Title } from '../Title/Title'
import { ReferenceContent } from '../Json/ReferenceContent'
import { Box } from '../Box/Box'


export const Reference = () => {
  return (
    <div className='reference'>
       <Title content='REFERENCE'/>

       <div className="re">
        {
          ReferenceContent.map(ref => (
            <Box
              key={ref._id}
              name={ref.name}
              position={ref.position}
              number={ref.number}
              email={ref.email}
            />
          ))
        }
      </div>
    </div>
  )
}
