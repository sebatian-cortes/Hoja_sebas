import React from 'react'
import '../Box/Box.css'

export const Box = ({name, position, number, email}) => {
  return (
    <div className='box'>
        <h4>{name}</h4>
        <h4>{position}</h4>
        <h4>{number}</h4>
        <h4>{email}</h4>
    </div>
  )
}
