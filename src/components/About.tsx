import React from "react";
import { CheckCircle, Heart, Smile } from "lucide-react";
import sobre from "../assets/imgs/sobreimplante.webp"

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O Que São Implantes Dentários e Como Eles Podem Mudar Sua Vida?
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Implantes dentários são pinos de titânio colocados no osso maxilar
              ou mandibular que funcionam como raízes artificiais para
              substituir dentes perdidos. Sobre esse pino, é fixada uma prótese
              (dente) que imita a estética e a função do dente natural.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              É a solução mais moderna e eficaz para a substituição de dentes
              perdidos, proporcionando conforto, segurança e uma melhora
              significativa na qualidade de vida.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Solução Permanente
                  </h3>
                  <p className="text-gray-600">
                    Com cuidados adequados, podem durar a vida toda
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Heart className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Melhora a Autoestima
                  </h3>
                  <p className="text-gray-600">
                    Recupere a confiança para sorrir e se expressar
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Smile className="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Função Natural
                  </h3>
                  <p className="text-gray-600">
                    Mastigação e fala restauradas completamente
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-800 transition-colors transform hover:scale-105">
              Entenda Mais Sobre os Benefícios
            </button>
          </div>

          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-8">
              <img
                src={sobre}
                alt="Infográfico mostrando a estrutura de um implante dentário"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
