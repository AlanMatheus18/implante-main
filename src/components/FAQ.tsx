import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "O procedimento de implante é doloroso?",
      answer: "Não. O procedimento é realizado sob anestesia local, garantindo conforto durante toda a cirurgia. No pós-operatório, o desconforto é mínimo e pode ser controlado com medicação analgésica prescrita pelo dentista."
    },
    {
      question: "Quanto tempo dura um implante dentário?",
      answer: "Com os cuidados adequados, higiene rigorosa e visitas regulares ao dentista, os implantes podem durar a vida toda. A taxa de sucesso é superior a 95% em condições normais."
    },
    {
      question: "Qualquer pessoa pode fazer implantes?",
      answer: "A maioria das pessoas pode fazer implantes. É necessária uma avaliação detalhada para verificar a saúde bucal, geral e a quantidade óssea disponível. Em casos de pouco osso, podem ser necessários enxertos ósseos."
    },
    {
      question: "Qual o custo de um implante dentário?",
      answer: "O custo varia de acordo com o tipo de implante, o número de implantes necessários e a complexidade do caso. Oferecemos planos de pagamento personalizados e uma avaliação inicial gratuita para um orçamento preciso."
    },
    {
      question: "Preciso de cuidados especiais após o implante?",
      answer: "A higiene bucal deve ser rigorosa, similar à de dentes naturais. Escovação adequada, uso de fio dental e enxaguante bucal, além de visitas regulares ao dentista, são essenciais para a longevidade do implante."
    },
    {
      question: "Quanto tempo leva para concluir o tratamento?",
      answer: "O tempo varia de acordo com cada caso. Geralmente, o processo completo leva de 3 a 6 meses, incluindo o período de osseointegração. Em alguns casos, é possível fazer carga imediata."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Suas Dúvidas Respondidas: Perguntas Frequentes sobre Implantes
          </h2>
          <p className="text-xl text-gray-600">
            Esclarecemos as principais dúvidas sobre implantes dentários.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-purple-700 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-700 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="https://tintim.link/whatsapp/e5a967f3-c8b4-4db8-b4b5-62189b3d10fc/2401d20a-39b5-47b2-8af4-20caf1ee5f93">
          <button className="bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-800 transition-colors transform hover:scale-105">
            Ainda Tem Dúvidas? Fale Conosco!
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;