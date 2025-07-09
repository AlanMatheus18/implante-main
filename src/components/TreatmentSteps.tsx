import React from 'react';
import { Search, Wrench, Settings, CheckCircle } from 'lucide-react';

const TreatmentSteps: React.FC = () => {
  const steps = [
    {
      step: 1,
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Avaliação e Planejamento",
      items: [
        "Consulta inicial e exames detalhados (radiografias, tomografias)",
        "Análise da saúde bucal e óssea do paciente",
        "Criação de um plano de tratamento personalizado"
      ]
    },
    {
      step: 2,
      icon: <Wrench className="h-8 w-8 text-white" />,
      title: "Instalação do Implante",
      items: [
        "Procedimento cirúrgico minimamente invasivo para inserção do pino de titânio",
        "Pós-operatório com orientações para uma recuperação tranquila",
        "Período de osseointegração (integração do implante ao osso)"
      ]
    },
    {
      step: 3,
      icon: <Settings className="h-8 w-8 text-white" />,
      title: "Colocação do Abutment e Moldagem",
      items: [
        "Conexão do abutment (pilar que liga o implante à coroa)",
        "Moldagem da boca para a confecção da coroa dentária personalizada",
        "Escolha da cor e formato da coroa para um resultado natural"
      ]
    },
    {
      step: 4,
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Instalação da Coroa Final",
      items: [
        "Fixação da coroa definitiva sobre o implante",
        "Ajustes finais para garantir conforto e oclusão perfeita",
        "Orientações sobre cuidados e manutenção para a longevidade do implante"
      ]
    }
  ];

  return (
    <section id="etapas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Seu Caminho para um Novo Sorriso: As Etapas do Tratamento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um processo cuidadoso e planejado para garantir o melhor resultado possível.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="absolute -top-4 left-8">
                  <div className="bg-purple-700 rounded-full p-4 shadow-lg">
                    {step.icon}
                  </div>
                </div>
                
                <div className="pt-8">
                  <div className="text-3xl font-bold text-purple-700 mb-2">
                    {step.step}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <ul className="space-y-3">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm text-gray-700">
                        <div className="w-2 h-2 bg-purple-700 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-purple-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-800 transition-colors transform hover:scale-105">
            Inicie Sua Jornada para um Sorriso Perfeito
          </button>
        </div>
      </div>
    </section>
  );
};

export default TreatmentSteps;