import React from 'react'
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import logo from '../assets/logo.svg'


const Footer = () => {
    return (
        <footer className="mt-auto pt-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="border border-[#333] p-6 text-center">
                        <h3 className="text-[#0796ef] uppercase mb-4">Connect with us</h3>
                        <div className="flex flex-col items-center space-y-2">
                            <p className="flex items-center">
                                <span className="mr-2">📞</span> +91 9567843340
                            </p>
                            <p className="flex items-center">
                                <span className="mr-2">✉️</span> info@deepnetsoft.com
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="text-center">
                            <div className="flex justify-center mb-2">
                                <img src={logo} alt="Logo" width={80} height={80} className="object-contain" />
                            </div>
                            <div className="text-3xl font-bold">
                                <span className="text-[#0796ef]">DEEP</span> NET <span className="text-[#857878]">SOFT</span>
                            </div>
                            <div className="flex justify-center space-x-4 mt-4">
                                <Facebook size={16} />
                                <Twitter size={16} />
                                <Instagram size={16} />
                                <Youtube size={16} />
                            </div>
                        </div>
                    </div>

                    <div className="border border-[#333] p-6 text-center">
                        <h3 className="text-[#0796ef] uppercase mb-4">Find us</h3>
                        <p className="text-sm">
                            First floor, Geo Infopark,
                            <br />
                            Infopark EXPY, Kakkanad
                        </p>
                    </div>
                </div>

                <div className="border-t border-[#333] py-4 flex flex-col md:flex-row justify-between items-center text-sm text-[#857878]">
                    <div>© 2024 Deepnetsoft Solutions. All rights reserved.</div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white transition-colors">
                            Terms & Conditions
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
