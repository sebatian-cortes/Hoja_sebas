import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import '../Networks/Networks.css'

export const Networks = () => {
  return (
    <div className='icons'>
    <FaLinkedin />
    <FaFacebook />
    <FaInstagram />
    <FaTwitter />
    <FaWhatsapp />
    <FaGithub />
    </div>
  )
}
