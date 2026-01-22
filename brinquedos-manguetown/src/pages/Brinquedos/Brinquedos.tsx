import { useState } from "react";
import { brinquedos } from "./Brinquedos.data";
import type { Brinquedo } from "./Brinquedos.data";

export default function Brinquedos() {
  const [itemSelecionado, setItemSelecionado] = useState<Brinquedo | null>(null);
  const [itensNoCarrinho, setItensNoCarrinho] = useState<Brinquedo[]>([]);

  const adicionarAoCarrinho = (item: Brinquedo) => {
    setItensNoCarrinho([...itensNoCarrinho, item]);
    setItemSelecionado(null);
  };

  return (
    // Fundo Verde #259C38 e fonte padrão DM Sans
    <div className="min-h-screen bg-[#259C38] flex flex-col font-['DM_Sans']">
      
      <main className="flex-grow pt-10 pb-20">
        {/* TÍTULO: Usando classe arbitrária para Bolota Bold sem mexer no config */}
        <h1 className="text-[#FFFFFF] text-6xl md:text-8xl font-['Bolota_Bold'] font-black text-center uppercase mb-12 tracking-tighter leading-none px-4">
          BRINQUEDOS MANGUETOWN
        </h1>

        {/* BARRA DE FILTROS: Branca e arredondada */}
        <div className="max-w-[900px] mx-auto mb-12 bg-white rounded-full py-3 px-10 flex items-center justify-between shadow-lg">
          <div className="flex items-center">
            <svg className="w-6 h-6 text-[#259C38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
            </svg>
          </div>
          
          <div className="flex flex-1 justify-around text-[10px] font-bold text-[#259C38] uppercase font-['Josefin_Sans'] tracking-widest">
            <button className="hover:opacity-70">Animais</button>
            <div className="w-[1px] h-4 bg-[#D6D6D2]"></div>
            <button className="hover:opacity-70">Pernambuco</button>
            <div className="w-[1px] h-4 bg-[#D6D6D2]"></div>
            <button className="hover:opacity-70">Folclore</button>
            <div className="w-[1px] h-4 bg-[#D6D6D2]"></div>
            <button className="hover:opacity-70">Fábulas</button>
          </div>

          <div className="relative ml-4">
             <svg className="w-7 h-7 text-[#259C38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
             </svg>
             {itensNoCarrinho.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#D8A667] text-white text-[9px] rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {itensNoCarrinho.length}
                </span>
             )}
          </div>
        </div>

        {/* GRID: Borda Marrom #D8A667 */}
        <section className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {brinquedos.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#FFFFFF] rounded-[25px] p-5 flex flex-col items-center shadow-xl border-[6px] border-[#D8A667] cursor-pointer"
              onClick={() => setItemSelecionado(item)}
            >
              <div className="w-full aspect-square mb-4 flex items-center justify-center bg-white rounded-xl overflow-hidden">
                <img src={item.imagem} alt={item.nome} className="max-h-full object-contain" />
              </div>
              <h3 className="text-[#259C38] font-['Josefin_Sans'] font-bold text-[12px] uppercase text-center mb-1 leading-tight">
                {item.nome}
              </h3>
              <p className="text-[#259C38] font-['DM_Sans'] font-black text-sm mb-4">
                {item.preco}
              </p>
              <button className="w-full bg-[#259C38] text-white text-[10px] font-bold py-2.5 rounded-lg uppercase">
                Ver Produto
              </button>
            </div>
          ))}
        </section>
      </main>

      {/* MODAL DE DETALHES */}
      {itemSelecionado && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999] p-4">
          <div className="bg-white rounded-[30px] w-full max-w-xl p-8 flex flex-col items-center relative border-4 border-[#D8A667]">
            <button onClick={() => setItemSelecionado(null)} className="absolute top-4 left-4 text-[#259C38]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <img src={itemSelecionado.imagem} className="h-60 object-contain mb-4" alt="" />
            <h2 className="text-2xl font-['Bolota_Bold'] text-[#2B3826] uppercase text-center">{itemSelecionado.nome}</h2>
            <p className="text-xl font-['DM_Sans'] font-black text-[#259C38] mb-6">{itemSelecionado.preco}</p>
            <button 
              onClick={() => adicionarAoCarrinho(itemSelecionado)}
              className="bg-[#259C38] text-white px-10 py-3 rounded-xl font-bold uppercase"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      )}
    </div>
  );
}