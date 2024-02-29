import React from 'react'
import { Header } from '../../layouts/Header/Header'
import { Sidebar } from '../../Sidebar/Sidebar'
import { Main } from '../../layouts/Main/Main'
import '../Home/Home.css'




export const Home = () => {
  return (
    <div className='home'>
      <Header>
        <Sidebar />
      </Header>
      <Main/>
    </div>
  )
}
