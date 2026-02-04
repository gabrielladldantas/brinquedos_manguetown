import { useState } from 'react';
import Carrinho from '../../components/Carrinho';

const listaBrinquedos = [
    { id: 1, nome: "Fantoche Porquinho", preco: 120.00, imagem: "/brinquedos/fantoche-porquinho.jpg" },
    { id: 2, nome: "Fantoche Iemanjá", preco: 120.00, imagem: "/brinquedos/fantoche-iemanja.jpg" },
    { id: 3, nome: "Caboclo de Lança", preco: 120.00, imagem: "/brinquedos/fantoche-caboclo.jpg" },
    { id: 4, nome: "Fantoche Chico", preco: 120.00, imagem: "/brinquedos/fantoche-chico.jpg" },
    { id: 5, nome: "Fantoche Rei do Baião", preco: 120.00, imagem: "/brinquedos/fantoche-rei do baiao.jpg" },
    { id: 6, nome: "Fantoche Lobo", preco: 120.00, imagem: "/brinquedos/fantoche-lobo.jpg" },
    { id: 7, nome: "Fantoche Sapinho", preco: 120.00, imagem: "/brinquedos/fantoche-sapo.jpg" },
    { id: 8, nome: "Capivara", preco: 120.00, imagem: "/brinquedos/fantoche-capivara.jpg" },
];

export default function BrinquedosManguetown() {
    const [produtoSelecionado, setProdutoSelecionado] = useState<any>(null);

    return (
        <div className="bg-white min-h-screen p-8">
            <h1 className="text-[#259C38] text-6xl font-bold text-center mb-12 uppercase">
                Brinquedos Manguetown
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {listaBrinquedos.map((brinquedo) => (
                    <div key={brinquedo.id} className="bg-white rounded-2xl p-4 shadow-lg text-center flex flex-col justify-between h-full">
                        <div>
                            <img 
                                src={brinquedo.imagem} 
                                alt={brinquedo.nome} 
                                className="w-full h-48 object-contain mb-4 rounded-lg" 
                            />
                            <h3 className="font-bold text-gray-800 text-sm">{brinquedo.nome}</h3>
                            <p className="text-gray-600 mb-4 font-semibold">R$ {brinquedo.preco.toFixed(2)}</p>
                        </div>
                        <button 
                            onClick={() => setProdutoSelecionado(brinquedo)}
                            className="bg-[#259C38] text-white px-4 py-2 rounded-lg text-xs font-bold hover:brightness-110 w-full transition-colors"
                        >
                            Ver Produto
                        </button>
                    </div>
                ))}
            </div>

            {produtoSelecionado && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
                    <div className="relative w-full max-w-md">
                        <button 
                            onClick={() => setProdutoSelecionado(null)}
                            className="absolute top-4 left-4 text-2xl font-bold text-green-700 z-10"
                        >
                            ←
                        </button>
                        <Carrinho produto={produtoSelecionado} />
                    </div>
                </div>
            )}
        </div>
    );
}