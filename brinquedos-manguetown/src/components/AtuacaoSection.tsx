import React from 'react';
import Boneco from "../assets/imagens/boneco.png";
import { MaosSensiveis } from '../assets/imagens';
import { VistaFrontal } from '../assets/imagens';
import { AsteriskLight } from '../assets/imagens';


export function AtuacaoSection() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Título Principal */}
        <h2 className="text-brand-green font-josefin text-4xl md:text-6xl font-extrabold text-center mb-16 uppercase tracking-tighter">
          Conheça nossa atuação
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 relative">
          {/* Card 1 - Brinquedos (Verde Escuro) */}
          <div className="lg:col-span-8 rounded-[50px] relative overflow-hidden min-h-[350px] flex items-center">
            {/* Imagem de fundo */}
            <img
              src={Boneco}
              alt="Boneco artesanal"
              className="absolute inset-0 w-full h-full object-cover scale-120 object-[50%_20%]"
            />

            {/* Conteúdo  */}
            <div className="relative z-10 w-full p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2"></div>

              <div className="w-full md:w-1/2 text-center md:text-right flex flex-col items-center md:items-end">
                <p className="text-white text-xl font-bold mb-4 drop-shadow-md">
                  Conheça nossos produtos!
                </p>
                <button className="bg-white text-[#064e3b] px-6 py-3 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all">
                  Brinquedos Manguetown
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 - Contato (Rosa) */}
          <div className="lg:col-span-4 lg:row-span-2 bg-[#f8a3b9] rounded-[50px] relative overflow-hidden min-h-[500px] flex flex-col justify-start">
            {/* Imagem de fundo */}
            <img
              src={MaosSensiveis}
              alt="Mãos em apoio"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Conteúdo */}
            <div className="relative z-10 p-8 flex flex-col gap-6 text-center items-center">
              <p className="text-white text-2xl font-bold leading-tight">
                Conte com a gente, caso precisar!
              </p>

              <button className="bg-white text-[#f8a3b9] px-10 py-3 rounded-2xl font-bold text-xl hover:bg-white/90 transition-all">
                Entre em Contato
              </button>
            </div>
          </div>

          {/* Card 3 - Doação (Marrom) */}
          <div className="lg:col-span-4 rounded-[50px] relative overflow-hidden min-h-[350px] flex items-center">
            {/* Imagem de fundo */}
            <img
              src={VistaFrontal}
              alt="Doação consciente"
              className="absolute inset-0 w-full h-full object-cover scale-110"
            />

            {/* Conteúdo */}
            <div className="relative z-10 w-full p-8 flex flex-col items-end text-right gap-6">
              <p className="text-white text-2xl font-bold leading-tight drop-shadow-md">
                <span className="block">Precisa</span>
                <span className="block">realizar uma</span>
                <span className="block">doação consciente?</span>
              </p>

              <button className="bg-white text-[#b8976d] px-8 py-3 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all">
                Encontre um Local
              </button>
            </div>
          </div>

          {/* Elemento 4 - Estrela Centralizada - Precisa Ajustar*/}
          <img
            src={AsteriskLight}
            alt=""
            className="
              absolute
              left-1/2
              top-[75%]
              -translate-x-1/2
              -translate-y-1/2
              w-40
              md:w-56
              lg:w-200
              opacity-90
              rotate-12
              z-0
              pointer-events-none
            "
          />
        </div>

        {/*  BANNER FINAL */}
        <div className="w-full bg-[#004d1a] rounded-[60px] p-10 md:p-14 flex flex-col items-center justify-center gap-8 shadow-lg">
          <h3 className="text-white text-2xl md:text-4xl font-bold text-center">
            Quer fazer parte dessa história?
          </h3>
          <button className="bg-white text-[#004d1a] px-12 py-4 rounded-2xl font-bold text-xl hover:scale-105 transition-transform">
            Seja um Parceiro
          </button>
        </div>
      </div>
    </section>
  );
}

