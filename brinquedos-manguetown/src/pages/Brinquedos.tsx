type Produto = {
  id: number;
  nome: string;
  preco: string;
  categoria: "animais" | "personagens" | "acao";
  imagem: string;
};

const produtos: Produto[] = [
  {
    id: 1,
    nome: "Fantoche Sapinho",
    preco: "R$ 59,90",
    categoria: "animais",
    imagem: "/assets/produto1.png",
  },
  {
    id: 2,
    nome: "Boneco Mangue",
    preco: "R$ 89,90",
    categoria: "personagens",
    imagem: "/assets/produto2.png",
  },
];

export default function Brinquedos() {
  return (
    <main className="min-h-screen bg-green-600">
      {/* Título */}
      <section className="text-center py-8">
        <h1 className="text-white text-2xl font-bold">
          BRINQUEDOS MANGUETOWN
        </h1>
      </section>

      {/* Conteúdo da loja */}
      <section className="max-w-6xl mx-auto px-4">
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-10">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="bg-white rounded-xl p-4 text-center shadow-md"
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="h-32 mx-auto mb-3 object-contain"
              />

              <h2 className="text-sm font-semibold">
                {produto.nome}
              </h2>

              <p className="text-green-600 font-bold">
                {produto.preco}
              </p>

              <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                Ver mais
              </button>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
