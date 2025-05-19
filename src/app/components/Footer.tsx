'use client';

import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121212] text-white pt-12 pb-8 px-4 sm:px-8 lg:px-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start mb-12">
        {/* Logo & Socials */}
        <div className="flex flex-col items-start gap-6">
          <a href="/" aria-label="Home">
            <img src="damac-white.webp" alt="DAMAC" className="w-28" />
          </a>
          <div className="flex gap-4 text-xl">
            <a href="https://wa.me/0000000000" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="hover:text-[#ccb073] cursor-pointer" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-[#ccb073] cursor-pointer" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-[#ccb073] cursor-pointer" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-[#ccb073] cursor-pointer" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-[#ccb073] cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold mb-3">
            Sign up for our exclusive newsletter
          </h3>
          <form className="relative w-full max-w-xl">
  <input
    type="email"
    placeholder="Email"
    className="w-full px-4 py-3 pr-32 rounded-full text-white bg-black outline-none"
  />
  <button
    type="submit"
    className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full hover:bg-[#ccb073] hover:text-white transition-all"
  >
    SUBMIT
  </button>
</form>

          <p className="text-xs text-gray-300 mt-2">
            By signing up you accept our{' '}
            <a href="/terms" className="underline">
              terms and conditions
            </a>
          </p>
        </div>
      </div>

      <hr className="border-gray-700 mb-10" />

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-2 uppercase">Why Damac</h4>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#">About DAMAC</a></li>
            <li><a href="#">Founder's Message</a></li>
            <li><a href="#">Investor relations</a></li>
            <li><a href="#">ESG</a></li>
            <li><a href="#">Building Documentation</a></li>
            <li><a href="#">Whistleblower line</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 uppercase">Communities</h4>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#">DAMAC Islands</a></li>
            <li><a href="#">DAMAC Riverside</a></li>
            <li><a href="#">DAMAC Sun City</a></li>
            <li><a href="#">DAMAC Lagoons</a></li>
            <li><a href="#">DAMAC Hills</a></li>
            <li><a href="#">DAMAC Hills 2</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 uppercase">Top Searched Projects</h4>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#">Riverside Views</a></li>
            <li><a href="#">DAMAC Casa</a></li>
            <li><a href="#">Canal Heights 2</a></li>
            <li><a href="#">Ibiza</a></li>
            <li><a href="#">Golf Gate 2</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 uppercase">Featured Projects</h4>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#">Chelsea Residences</a></li>
            <li><a href="#">Safa Gate</a></li>
            <li><a href="#">Volta</a></li>
            <li><a href="#">Couture by Cavalli</a></li>
            <li><a href="#">Lagoon Views</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 uppercase">DAMAC Assist</h4>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#">Mortgage Calculator</a></li>
          </ul>
          <h4 className="font-semibold mt-4 mb-2 uppercase">Hospitality</h4>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#">Paramount Hotel Dubai</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 uppercase">Popular Areas</h4>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#">Villas for sale in DAMAC Lagoons</a></li>
          </ul>
          <h4 className="font-semibold mt-4 mb-2 uppercase">Recent Searches</h4>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#">3 bedroom villa for sale in Dubai</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom logos */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 mt-12">
        <div className="flex items-center gap-4">
          <a href="/">
            <img src="Footer_Logos.webp" alt="Living" className="h-10 object-contain" />
          </a>
        </div>
        <div className="flex gap-4">
          <a
            href="https://apps.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="Footer_AppStore.svg" alt="App Store" className="h-10" />
          </a>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="Footer_Google_Play.svg" alt="Google Play" className="h-10" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
