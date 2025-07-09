import React from "react";
import { Star, Clock, Shield } from "lucide-react";
import imghero from "../assets/imgs/implantehero.webp"

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-purple-700 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Recupere o Sorriso dos Seus Sonhos e a Confiança Perdida
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
              Diga adeus às preocupações com a mastigação e o constrangimento
              social. Descubra como os implantes dentários podem transformar sua
              vida com segurança e durabilidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-white text-purple-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-colors transform hover:scale-105">
                Quero Recuperar Meu Sorriso Agora!
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>Mais de 1000 sorrisos transformados</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-400 mr-2" />
                <span>Resultados em 3-6 meses</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-green-400 mr-2" />
                <span>Garantia de 5 anos</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={imghero}
                alt="Pessoa sorrindo confiantemente após tratamento com implantes dentários"
                className="w-full object-cover"
                width="800"
                height="600"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white text-purple-700 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm text-gray-600">Taxa de sucesso</div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white text-purple-700 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm text-gray-600">Anos de experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
