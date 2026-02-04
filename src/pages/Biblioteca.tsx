function Card({ img, titulo }: { img: string; titulo: string }) {
  return (
    <div className="flex flex-col items-center p-4 border-2 border-[#b8860b] rounded-xl bg-white shadow-md transition-transform h-full">
      <img
        src={img}
        alt={titulo}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-sm font-semibold text-center mb-4 text-gray-800 flex-grow">
        {titulo}
      </h3>
      <button className="bg-[#259C38] text-white px-6 py-2 rounded-lg text-xs font-bold hover:brightness-110 transition-all w-full">
        Acessar Material
      </button>
    </div>
  );
}

export default function Biblioteca() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <h1 className="font-bolota font-bold text-[#259C38] text-5xl md:text-6xl mb-4 uppercase tracking-tighter text-center">
        BIBLIOTECA
      </h1>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-700 border-b-2 border-gray-200 pb-2">
          Negócios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <Card
            img="imagens/1economizando.jpg"
            titulo="Economizando Dinheiro"
          />
          <Card img="imagens/2mulheres.jpg" titulo="Mulheres & Negócios" />
          <Card img="imagens/3economia.jpg" titulo="Economia Criativa" />
          <Card
            img="imagens/4planejamento.jpg"
            titulo="Planejamento Financeiro"
          />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-700 border-b-2 border-gray-200 pb-2">
          Mulheres
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <Card img="imagens/5movimento.jpg" titulo="Mulheres em Movimento" />
          <Card img="imagens/6forca.jpg" titulo="A Força da Mulher Negra" />
          <Card img="imagens/7apoio.jpg" titulo="Apoio Familiar" />
          <Card img="imagens/8saude.jpg" titulo="Saúde da Mulher" />
        </div>
      </section>
    </main>
  );
}
