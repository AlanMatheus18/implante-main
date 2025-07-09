import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/imgs/logoprin-DQA_diT3.svg";
import { FaWhatsapp } from "react-icons/fa";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src={logo} alt="" className="" />
            </div>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#sobre"
                className="text-gray-900 hover:text-purple-700 px-3 py-2 text-sm font-medium transition-colors"
              >
                Sobre
              </a>
              <a
                href="#resultados"
                className="text-gray-900 hover:text-purple-700 px-3 py-2 text-sm font-medium transition-colors"
              >
                Resultados
              </a>
              <a
                href="#tipos"
                className="text-gray-900 hover:text-purple-700 px-3 py-2 text-sm font-medium transition-colors"
              >
                Tipos
              </a>
              <a
                href="#etapas"
                className="text-gray-900 hover:text-purple-700 px-3 py-2 text-sm font-medium transition-colors"
              >
                Etapas
              </a>
              <a
                href="#depoimentos"
                className="text-gray-900 hover:text-purple-700 px-3 py-2 text-sm font-medium transition-colors"
              >
                Depoimentos
              </a>
              <a
                href="#faq"
                className="text-gray-900 hover:text-purple-700 px-3 py-2 text-sm font-medium transition-colors"
              >
                FAQ
              </a>
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+558193094-0025"
              className="flex items-center text-purple-700 hover:text-purple-800 transition-colors"
              aria-label="Ligar para clínica"
            >
              <Phone className="h-5 w-5 mr-1" />
              <span className="text-sm font-medium">(81)3094-0025</span>
            </a>
            <a
              href="https://tintim.link/whatsapp/e5a967f3-c8b4-4db8-b4b5-62189b3d10fc/2401d20a-39b5-47b2-8af4-20caf1ee5f93"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-expanded="false"
              aria-label="Menu principal"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a
              href="#sobre"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-purple-700 hover:bg-gray-50"
            >
              Sobre
            </a>
            <a
              href="#resultados"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-purple-700 hover:bg-gray-50"
            >
              Resultados
            </a>
            <a
              href="#tipos"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-purple-700 hover:bg-gray-50"
            >
              Tipos
            </a>
            <a
              href="#etapas"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-purple-700 hover:bg-gray-50"
            >
              Etapas
            </a>
            <a
              href="#depoimentos"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-purple-700 hover:bg-gray-50"
            >
              Depoimentos
            </a>
            <a
              href="#faq"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-purple-700 hover:bg-gray-50"
            >
              FAQ
            </a>
            <div className="px-3 py-2 space-y-2">
              <a
                href="tel:+558193094-0025"
                className="flex items-center text-purple-700 hover:text-purple-800"
              >
                <Phone className="h-5 w-5 mr-2" />
                <span>(81) 3094-0025</span>
              </a>
              <a
                href="https://tintim.link/whatsapp/e5a967f3-c8b4-4db8-b4b5-62189b3d10fc/2401d20a-39b5-47b2-8af4-20caf1ee5f93"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors w-fit"
              >
                <FaWhatsapp className="h-4 w-4 mr-2" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
