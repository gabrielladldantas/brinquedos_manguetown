import { useState } from "react";

const PROJETOS_DATA = [
  { 
    id: 1, 
    titulo: "Recife Águas e Clima", 
    descricao: "A iniciativa é voltada para o enfrentamento das mudanças climáticas e a conservação dos cursos d'água da cidade e tem como principal público alvo, estudantes de 10 a 13 anos de escolas municipais situadas no entorno do Riacho Cavouco, na Zona Oeste do Recife.",
    imagem: "/images/crop.jpg" 
  },
  { 
    id: 2, 
    titulo: "Trapeiros de Emaús", 
    descricao: "A Associação dos Trapeiros de Emaús, Recife, é uma unidade do Movimento Emaús Internacional. O Movimento foi criado em 1949, na França, com o objetivo de ajudar as pessoas que sofreram grandes perdas com o advento da Segunda Guerra Mundial.",
    imagem: "/images/164-hd_Projetos-Pernambuco-004.jpg" 
  },
  { 
    id: 3, 
    titulo: "Casa Menina Mulher", 
    descricao: "A Casa Menina Mulher é uma organização não governamental, ONG, que desenvolve ações pedagógicas com crianças, adolescentes e jovens.",
    imagem: "/images/5df2ae85-13e7-4b1c-b36c-504c57b5cb1d.jpg" 
  }
];

export default function Projetos() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 bg-white min-h-screen flex flex-col items-center">
      <div className="text-center mb-16">
        <h1 className="font-bolota font-bold text-[#259C38] text-5xl md:text-6xl mb-4 uppercase tracking-tighter">
          Projetos
        </h1>
        <p className="font-josefin text-[#2B3826] text-xl max-w-2xl mx-auto">
          Iniciativas que transformam a realidade através da tecnologia, cultura e sustentabilidade.
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-16">
        {PROJETOS_DATA.map((projeto) => (
          <div 
            key={projeto.id} 
            className="group bg-white rounded-[50px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-50 hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="h-56 overflow-hidden">
              <img 
                src={projeto.imagem} 
                alt={projeto.titulo} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="p-8 flex flex-col grow text-center">
              <h3 className="font-josefin font-bold text-2xl text-[#2B3826] mb-4 leading-tight">
                {projeto.titulo}
              </h3>
              <p className="font-josefin text-sm text-[#2B3826] leading-relaxed">
                {projeto.descricao}
              </p>
            </div>
          </div>
        ))}
      </div>

      
      <div className="flex justify-center mt-8 mb-12">
        <button className="bg-[#259C38] text-white px-10 py-4 rounded-[20px] font-bolota font-bold text-3xl md:text-4xl shadow-md hover:brightness-110 transition-all active:scale-95">
          Ver Mais Projetos
        </button>
      </div>
    </main>
  );
}