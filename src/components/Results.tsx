import React from 'react';
import { ArrowRight } from 'lucide-react';
//import imgs
import caso01antes from "../assets/imgs/Caso01Antes-Dg3aqSm1.webp";
import caso01dps from "../assets/imgs/Caso01Dps-CD0LVCxV.webp";
import caso02antes from "../assets/imgs/Caso2implantesantes-9Cd1JvRu.webp";
import caso02dps from "../assets/imgs/Caso2implantedps-CgFoC6uU.webp";
import caso03antes from "../assets/imgs/Caso3implantesantes-BC9Yicl2.webp";
import caso03dps from "../assets/imgs/Caso3implantesdps-BAjEOBuU.webp";
import caso04antes from "../assets/imgs/Caso4implantesantesofi-DVdmylY5.webp";
import caso04dps from "../assets/imgs/Caso4implantesdps-C8q0I-Ak.webp";
import caso05antes from "../assets/imgs/Caso05Antes-CZhjuwF7.webp";
import caso05dps from "../assets/imgs/Caso5Dps-DB28eFer.webp";
//
const Results: React.FC = () => {
  const results = [
    {
      before: caso01antes,
      after: caso01dps,
      description: "Paciente com perda de dentes frontais recupera a estética e a confiança"
    },
    {
      before: caso02antes,
      after: caso02dps,
      description: "Restauração completa da arcada superior com protocolo fixo"
    },
    {
      before: caso03antes,
      after: caso03dps,
      description: "Implante unitário devolvendo função mastigatória completa"
    },
    {
      before: caso04antes,
      after: caso04dps,
      description: "Paciente com perda de dentes frontais recupera a estética e a confiança"
    },
    {
      before: caso05antes,
      after: caso05dps,
      description: "Paciente com perda de dentes frontais recupera a estética e a confiança"
    },
  ];

  return (
    <section id="resultados" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transformações Reais: Veja o Poder dos Implantes Dentários
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada sorriso transformado é uma vida mudada. Veja alguns dos nossos casos de sucesso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {results.map((result, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <div className="grid grid-cols-2 gap-1">
                  <div className="relative">
                    <img 
                      src={result.before}
                      alt="Antes do tratamento"
                      className="w-full h-48 object-cover"
                      width="400"
                      height="300"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Antes
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={result.after}
                      alt="Depois do tratamento"
                      className="w-full h-48 object-cover"
                      width="400"
                      height="300"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Depois
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white rounded-full p-3 shadow-lg">
                    <ArrowRight className="h-6 w-6 text-purple-700" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {result.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-800 transition-colors transform hover:scale-105">
            Veja Mais Casos de Sucesso
          </button>
        </div>
      </div>
    </section>
  );
};

export default Results;