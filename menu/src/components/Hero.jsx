import React from 'react'
import bg from '../assets/bg.png'

const Hero = () => {
    return (
        <section className="relative">
            <div className="absolute inset-0 bg-black/10 z-10"></div>
            <div className="relative z-20 container mx-auto px-4 py-16 text-center">
                <h1 className="text-7xl font-bold mb-6 uppercase">Menu</h1>
                <p className="max-w-2xl mx-auto text-[#bbbbbb]">
                    Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the
                    "Order Online" button located below the menu.
                </p>
            </div>
            <div className="absolute inset-0 z-0">
                {/* Background Image */}
                <img src={bg} alt="Food background" className="w-full h-full object-cover " />
            </div>
        </section>
    )
}

export default Hero
