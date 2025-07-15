import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
//logo
import logo from "../assets/imgs/DentalSant-D7EvkN2I.webp";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="mb-6">
              <img src={logo} alt="" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas em implantes dentários, devolvendo sorrisos e
              transformando vidas há mais de 13 anos com tecnologia de ponta e
              atendimento humanizado.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/dentalsanteodontologia"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Facebook"
                target="blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/dental_sante/"
                target="blank"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCUAu_NRfULhAiXmlP86Dq6A"
                target="blank"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaWhatsapp className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0" />
                <div>
                <a
                    href="https://tintim.link/whatsapp/e5a967f3-c8b4-4db8-b4b5-62189b3d10fc/2401d20a-39b5-47b2-8af4-20caf1ee5f93"
                    className="hover:text-purple-400 transition-colors"
                    target="_blank"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+558193094-0025"
                    className="hover:text-purple-400 transition-colors"
                  >
                    (81) 3094-0025
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:contato@dentalsante.com.br"
                    className="hover:text-purple-400 transition-colors"
                  >
                    contato@dentalsante.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="https://www.google.com/maps/place/Cl%C3%ADnica+Odontol%C3%B3gica+Dental+Sant%C3%A9/@-8.174582,-34.916794,16z/data=!4m6!3m5!1s0x7aae1afedba4ce5:0xd1768fbdcfa5addb!8m2!3d-8.1745822!4d-34.9167938!16s%2Fg%2F11gfnf_3bs?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors text-[14px]"
                  >
                    Av. Bernardo Vieira de Melo, 2418
                    <br />
                    Piedade, Jaboatão dos Guararapes - PE
                    <br />
                    CEP: 54410-010
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Horário de Funcionamento
            </h3>
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
              <a
                href="#sobre"
                className="block text-gray-300 hover:text-purple-400 transition-colors"
              >
                Sobre Implantes
              </a>
              <a
                href="#tipos"
                className="block text-gray-300 hover:text-purple-400 transition-colors"
              >
                Tipos de Implantes
              </a>
              <a
                href="#etapas"
                className="block text-gray-300 hover:text-purple-400 transition-colors"
              >
                Etapas do Tratamento
              </a>
              <a
                href="#depoimentos"
                className="block text-gray-300 hover:text-purple-400 transition-colors"
              >
                Depoimentos
              </a>
              <a
                href="#faq"
                className="block text-gray-300 hover:text-purple-400 transition-colors"
              >
                Perguntas Frequentes
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-purple-400 transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-purple-400 transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Clínica Odontológica Dental Santé.
              Todos os direitos reservados.
            </p>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://tintim.link/whatsapp/e5a967f3-c8b4-4db8-b4b5-62189b3d10fc/2401d20a-39b5-47b2-8af4-20caf1ee5f93"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors flex items-center"
              >
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
