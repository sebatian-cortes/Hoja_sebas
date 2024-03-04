import React from 'react'
import "./Card.css"
export const Card = ({photo,title,description,enlace}) => {
  return (
      <section className="CardGeneral">
        <div className="contentImgCard">
        <h4 className="titleCard">{title}</h4>
       
        <img src={photo} alt={title} className='imgCard' />
        </div>
        <div className="ContentofCard">
           
            <p className="DescripCard">{description}</p>
             <a href={enlace} target='_blank' className="enlaCard">GitHub</a>
        </div>
      </section>
  )
}