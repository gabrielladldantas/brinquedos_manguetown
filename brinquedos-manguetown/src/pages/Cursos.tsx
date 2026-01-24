import BrotoSoloImg from "../assets/imagens/feche-o-broto-solo.jpg";
import ArtesanatoImg from "../assets/imagens/pessoa-fazendo-scrapbook-em-casa.jpg";


const WHATSAPP_LINK =
  "https://wa.me/5581994498361?text=Olá,%20quero%20saber%20mais%20sobre%20o%20curso";

export default function Cursos() {
  return (
    <main className="w-full px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        {/* TITULO */}
        <h1 className="text-brand-green font-extrabold text-5xl md:text-6xl mb-16">
          CURSOS
        </h1>

        {/* EDUCAÇÃO */}
        <h2 className="text-gray-800 font-bold text-4xl mb-10">
          Educação
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="flex gap-6 border-4 border-[#D9A25F] rounded-2xl p-6 items-center"
            >
              <img
                src={BrotoSoloImg}
                alt="Curso Educação"
                className="w-[180px] h-[180px] object-cover rounded-xl"
              />

              <div className="flex flex-col gap-4">
                <h3 className="text-gray-900 font-bold text-lg">
                  EDUCAÇÃO AMBIENTAL
                </h3>

                <span className="text-brand-green font-bold text-xl">
                  R$ 25,99
                </span>

				<a
				  href={WHATSAPP_LINK}
				  target="_blank"
				  rel="noopener noreferrer"
				  className="bg-green-600 text-white font-semibold px-10 py-3 rounded-full w-fit hover:opacity-90 transition"
				>
				  Acessar Curso
				</a>

              </div>
            </div>
          ))}
        </div>

        {/*  ARTESANATO  */}
        <h2 className="text-gray-800 font-bold text-4xl mb-10">
          Artesanato
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="flex gap-6 border-4 border-[#D9A25F] rounded-2xl p-6 items-center"
            >
              <img
                src={ArtesanatoImg}
                alt="Curso Artesanato"
                className="w-[180px] h-[180px] object-cover rounded-xl"
              />

              <div className="flex flex-col gap-4">
                <h3 className="text-gray-900 font-bold text-lg">
                  ARTESANATO SUSTENTÁVEL
                </h3>

                <span className="text-brand-green font-bold text-xl">
                  R$ 39,99
                </span>

				<a
				  href={WHATSAPP_LINK}
				  target="_blank"
				  rel="noopener noreferrer"
				  className="bg-green-600 text-white font-semibold px-10 py-3 rounded-full w-fit hover:opacity-90 transition"
				>
				  Acessar Curso
				</a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
