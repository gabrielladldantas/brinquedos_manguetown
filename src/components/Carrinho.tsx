import { useState } from 'react';

interface Brinquedo {
    nome: string;
    preco: number;
    imagem: string;
}

export default function Carrinho({ produto }: { produto: Brinquedo }) {
    // Estado para controlar a quantidade
    const [quantidade, setQuantidade] = useState(1);

    const aumentar = () => setQuantidade(quantidade + 1);
    const diminuir = () => {
        if (quantidade > 1) setQuantidade(quantidade - 1);
    };

    const total = produto.preco * quantidade;

    const finalizarPedido = () => {
        const telefone = "5581999999999"; 
        // Mensagem agora inclui a quantidade e o total calculado
        const mensagem = `Olá! Gostaria de encomendar:
- *${quantidade}x ${produto.nome}*
- *Total: R$ ${total.toFixed(2)}*`;
        
        const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="p-6 bg-white rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Carrinho</h2>
            
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl mb-6">
                <img src={produto.imagem} alt={produto.nome} className="w-20 h-20 object-contain rounded-lg" />
                <div className="flex-grow">
                    <h3 className="font-bold text-gray-700 text-sm">{produto.nome}</h3>
                    <p className="text-green-600 font-bold text-xs">R$ {produto.preco.toFixed(2)}</p>
                    
                    {/* Seleção de Quantidade */}
                    <div className="flex items-center gap-3 mt-2">
                        <button 
                            onClick={diminuir}
                            className="w-6 h-6 flex items-center justify-center bg-white border border-gray-300 rounded-full text-green-600 font-bold"
                        >
                            -
                        </button>
                        <span className="font-bold text-gray-700">{quantidade}</span>
                        <button 
                            onClick={aumentar}
                            className="w-6 h-6 flex items-center justify-center bg-white border border-gray-300 rounded-full text-green-600 font-bold"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t pt-4">
                <div className="flex justify-between mb-6">
                    <span className="text-gray-500 font-medium">Subtotal</span>
                    <span className="font-bold text-xl text-gray-800">R$ {total.toFixed(2)}</span>
                </div>

                <button 
                    onClick={finalizarPedido}
                    className="w-full bg-[#2e7d32] hover:bg-green-800 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95"
                >
                    Realizar Pedido 📱
                </button>
            </div>
        </div>
    );
}