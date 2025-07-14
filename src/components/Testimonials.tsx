import React from 'react';
import { Quote, Star } from 'lucide-react';
//imgs perfil
import perfil01 from "../assets/imgs/perfl01.webp";
import perfil02 from "../assets/imgs/perfil02.webp";
import perfil03 from "../assets/imgs/perfil03.webp";
import perfil04 from "../assets/imgs/perfilMercia-BR-nj5wT.webp";
//
const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Tatiana Mota",
      image: perfil01,
      text: "Adorei conhecer a clínica, linda! Amei a tarde, um momento para recarregar as energias e se renovar. Uma delicia!",
      rating: 5
    },
    {
      name: "Shirleide Lima",
      image: perfil02,
      text: "Quero registrar meu elogio à Clínica Dental Sante pelo atendimento impecável. Fui recebida com acolhimento, cuidado e profissionalismo em cada detalhe.",
      rating: 5
    },
    {
      name: "Carla Campos",
      image: perfil03,
      text: "A clínica é sem duvida a melhor de Recife! Desde o atendimento até os tratamentos, altamente eficazes! Profissionais experientes, competentes e comprometidos.",
      rating: 5
    },
    {
      name: "Mercia Rathunde",
      image: perfil04,
      text: "Sempre com o melhor atendimento, cuidado, carinho com os pacientes. Cada vez que minha família vai a uma consulta sai mais feliz do que chegou! Gratidão à toda a equipe que faz o Dental Santé!!!",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quem Já Transformou o Sorriso Conosco, Recomenda!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos pacientes é nossa maior conquista. Veja o que eles têm a dizer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Quote className="h-6 w-6 text-purple-700 mr-2" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  width="150"
                  height="150"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">Paciente</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-800 transition-colors transform hover:scale-105">
            Leia Mais Histórias de Sucesso
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;