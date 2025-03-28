import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MenuTabs from '../components/MenuTabs'
import Footer from '../components/Footer'


const Home = () => {
  return (
   <div className="min-h-screen bg-[#121618] text-white flex flex-col">
    {/* Header */}
        <Header />
    {/* Hero Section */}
        <Hero />
    {/* Menu Tabs */}
        <MenuTabs />
    {/* Footer */}
        <Footer />


    </div>
  )
}

export default Home
