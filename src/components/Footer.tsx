import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="mb-6">
              <span className="text-3xl font-bold text-purple-400">DentalCare</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas em implantes dentários, devolvendo sorrisos e transformando vidas 
              há mais de 15 anos com tecnologia de ponta e atendimento humanizado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="YouTube">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0" />
                <div>
                  <a href="tel:+5511999999999" className="hover:text-purple-400 transition-colors">
                    (11) 99999-9999
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0" />
                <div>
                  <a href="mailto:contato@dentalcare.com.br" className="hover:text-purple-400 transition-colors">
                    contato@dentalcare.com.br
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <a 
                    href="https://maps.google.com?q=Rua+das+Flores,+123,+São+Paulo,+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Rua das Flores, 123<br />
                    São Paulo - SP<br />
                    CEP: 01234-567
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Horário de Funcionamento</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0" />
                <div>
                  <div className="text-sm text-gray-300">Segunda - Sexta</div>
                  <div className="text-sm">08:00 - 18:00</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0" />
                <div>
                  <div className="text-sm text-gray-300">Sábado</div>
                  <div className="text-sm">08:00 - 12:00</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0" />
                <div>
                  <div className="text-sm text-gray-300">Domingo</div>
                  <div className="text-sm">Fechado</div>
                </div>
              </div>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Úteis</h3>
            <div className="space-y-3">
              <a href="#sobre" className="block text-gray-300 hover:text-purple-400 transition-colors">
                Sobre Implantes
              </a>
              <a href="#tipos" className="block text-gray-300 hover:text-purple-400 transition-colors">
                Tipos de Implantes
              </a>
              <a href="#etapas" className="block text-gray-300 hover:text-purple-400 transition-colors">
                Etapas do Tratamento
              </a>
              <a href="#depoimentos" className="block text-gray-300 hover:text-purple-400 transition-colors">
                Depoimentos
              </a>
              <a href="#faq" className="block text-gray-300 hover:text-purple-400 transition-colors">
                Perguntas Frequentes
              </a>
              <a href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} DentalCare. Todos os direitos reservados.
            </p>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://wa.me/5511999999999" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;