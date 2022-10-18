import React from 'react'
import GetStarted from './GetStarted'
import Header from './Header'
import Services from './Services'

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen'>

   
    <Header />
    <GetStarted />
    <Services />

    </div>
  )
}

export default Home;