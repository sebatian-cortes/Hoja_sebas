import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import '../Button/Button.css'

export const Button = () => {
  return (
    <div>
        <a href="https://api.whatsapp.com/send?phone=3145386174" className='btn-wsp' target='_blank' >
        <FaWhatsapp />
        </a>
    </div>
  )
}
