import React from 'react'
import { Instagram, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t-4 border-red-600">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            {/* <h2 className="text-4xl font-bold text-red-600 mb-2">FLEXAFUEL</h2> */}
            <img src="./flexafuel-logo.png" alt="" className="h-14 sm:h-12 md:h-20 ml-0 sm:ml-0 md:ml-[-98] mb-2"/>
            <p className="text-gray-300 text-sm">Premium Whey Protein</p>
            <p className="text-gray-400 text-xs mt-2">Fuel Your Fitness</p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">GET IN TOUCH</h3>
            <a
              href="tel:+919130192067"
              className="flex items-center gap-2 text-gray-300 hover:text-red-600 transition-colors"
            >
              <Phone size={20} />
              <span className="font-medium">+91 9130192067</span>
            </a>
          </div>

          {/* Social/Order Section */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold text-white mb-4">ORDER NOW</h3>
            <a
              href="https://instagram.com/flexafuel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors font-medium"
            >
              <Instagram size={20} />
              <span>DM @flexafuel</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-red-600 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2026 Flexafuel. All rights reserved.</p>
          <p className="mt-4 md:mt-0 text-center">Follow us on Instagram for exclusive deals & fitness tips</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer