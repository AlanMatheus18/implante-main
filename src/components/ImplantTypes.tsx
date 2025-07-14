import React from 'react';
import {  Building, Crown } from 'lucide-react';
import ponte from "../assets/imgs/ponte.png"
import dente from "../assets/imgs/dente05.png"
import protcolo from "../assets/imgs/protocolo.png"
import zigo from "../assets/imgs/implantes-zigo (1).svg"
const ImplantTypes: React.FC = () => {
  const implantTypes = [
    {
      icon: <img src={dente} alt="" className="w-16 h-16" />,
      title: "Implante Unitário",
      description: "Ideal para a substituição de um único dente perdido, sem comprometer os dentes vizinhos.",
      features: ["Preserva dentes adjacentes", "Procedimento minimamente invasivo", "Resultado natural"]
    },
    {
      icon: <img src={ponte} alt="" className="w-20 h-20"/>,
      title: "Ponte sobre Implante",
      description: "Quando há a perda de múltiplos dentes adjacentes, implantes servem de suporte para uma ponte fixa.",
      features: ["Múltiplos dentes substituídos", "Maior estabilidade", "Economia de tempo"]
    },
    {
      icon: <img src={protcolo} alt="" className="w-16 h-16"/>,
      title: "Protocolo Fixo",
      description: "Uma solução completa para quem perdeu todos os dentes de uma arcada, proporcionando uma prótese totalmente fixa.",
      features: ["Arcada completa", "Prótese totalmente fixa", "Resultado imediato"]
    },
    {
      icon: <img src={zigo} alt="" className="w-16 h-16" />,
      title: "Implante Zigomático",
      description: "Alternativa para casos de grande perda óssea na maxila, utilizando o osso zigomático como suporte.",
      features: ["Casos complexos", "Sem necessidade de enxerto", "Técnica avançada"]
    }
  ];

  return (
    <section id="tipos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A Solução Certa para Cada Necessidade: Conheça os Tipos de Implantes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada caso é único e merece uma solução personalizada. Descubra qual tipo de implante é ideal para você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {implantTypes.map((type, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                {type.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {type.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {type.description}
              </p>
              
              <ul className="space-y-2">
                {type.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-purple-700 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="https://tintim.link/whatsapp/e5a967f3-c8b4-4db8-b4b5-62189b3d10fc/2401d20a-39b5-47b2-8af4-20caf1ee5f93">
          <button className="bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-800 transition-colors transform hover:scale-105">
            Qual o Melhor Implante Para Mim?
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImplantTypes;