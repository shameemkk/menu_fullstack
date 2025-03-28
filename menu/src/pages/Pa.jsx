import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import logo from '../assets/logo.svg'
import bg from '../assets/bg.png'
import cocktail2 from '../assets/cocktail2.svg'
import drink from '../assets/drink.svg'

function Pa() {
  return (
    <div className="min-h-screen bg-[#121618] text-white flex flex-col">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2">
            <img src={logo} alt="Logo" width={50} height={50} className="object-contain" />
          </div>
          <div>
            <div className="text-2xl font-bold">
              <span className="text-[#0796ef]">DEEP</span> NET
            </div>
            <div className="text-xl text-[#857878]">SOFT</div>
          </div>
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#" className="uppercase hover:text-[#0796ef] transition-colors">
            Home
          </a>
          <a href="#" className="uppercase text-[#0796ef] hover:text-[#0796ef] transition-colors">
            Menu
          </a>
          <a href="#" className="uppercase hover:text-[#0796ef] transition-colors">
            Make a Reservation
          </a>
          <a href="#" className="uppercase hover:text-[#0796ef] transition-colors">
            Contact Us
          </a>
        </nav>
      </header>

      {/* Hero Section */}
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

      {/* Menu Tabs */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-2 mb-12">
          <button className="px-8 py-3 uppercase bg-[#121618] border border-[#333] hover:bg-[#1a1e20] transition-colors">
            Food
          </button>
          <button className="px-8 py-3 uppercase bg-[#0796ef] hover:bg-[#0685d6] transition-colors">Drinks</button>
          <button className="px-8 py-3 uppercase bg-[#121618] border border-[#333] hover:bg-[#1a1e20] transition-colors">
            Brunch
          </button>
        </div>

        {/* Menu Content */}
        <div className="relative max-w-4xl mx-auto">
          {/* Cocktail Image Left */}
          <div className="absolute -left-24 top-0">
            <img src={drink} alt="Cocktail" width={150} height={200} className="object-contain" />
          </div>

          <div className="border border-[#333] p-12 relative">
            <div className="flex items-center justify-center mb-12">
              <div className="h-px bg-white w-16 mr-6"></div>
              <h2 className="text-4xl font-bold uppercase">Brunch Cocktails</h2>
              <div className="h-px bg-white w-16 ml-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-bold uppercase">Cinnamon Toast Crunch</h3>
                  <span className="text-xl">$16</span>
                </div>
                <p className="text-sm text-[#bbbbbb]">
                  Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon
                </p>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-bold uppercase">Moet Spritz</h3>
                  <span className="text-xl">$20</span>
                </div>
                <p className="text-sm text-[#bbbbbb]">
                  Aperol, St Germain, botanical liquor, fresh lime juice, mini brut Moet topper
                </p>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-bold uppercase">Bar 42 Mary</h3>
                  <span className="text-xl">$14</span>
                </div>
                <p className="text-sm text-[#bbbbbb]">
                  Titos, tomato juice, worcestershire, celery salt, black pepper, tabasco, fully loaded
                </p>
              </div>
            </div>

            {/* Cocktail Image Right */}
            <div className="absolute -right-24 bottom-12">
              <img src={cocktail2} alt="Cocktail" width={150} height={200} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  )
}

export default Pa

