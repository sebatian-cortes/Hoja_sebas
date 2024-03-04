import React from 'react'
import logo from '../../assets/logoSena.png'
import development from '../../assets/yotas.jpg'
import { Navbar } from '../Navbar/Navbar'
import { Logo } from '../Logo/Logo'
import '../Sidebar/Sidebar.css'
import { Networks } from '../Networks/Networks'


export const Sidebar = () => {
  return (
    <div className='networks'>
    <div className='personalImage'>
    <Logo image = {development} />
    <h3>Sebastian Agudelo</h3>
    </div>
    <Navbar />
    <div className='boxNetworks'>
    <Logo image={logo} />
    <Networks/>
    </div>
    </div>
  )
}
