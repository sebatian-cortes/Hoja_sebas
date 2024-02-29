import React from 'react'
import logo1 from '../../assets/logoSena2.png'
import logo from '../../assets/logo.png'
import { Navbar } from '../Navbar/Navbar'
import { Logo } from '../Logo/Logo'
import '../Sidebar/Sidebar.css'
import { Networks } from '../Networks/Networks'


export const Sidebar = () => {
  return (
    <div className='networks'>
    <div className='personalImage'>
    <Logo image = {logo} />
    </div>
    <h3>Sebastian Agudelo</h3>
    <Navbar />
    <Logo image={logo1} />
    <Networks/>
    </div>
  )
}
