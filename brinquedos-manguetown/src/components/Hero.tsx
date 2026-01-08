import heroFullImage from "../assets/imagens/Group 46.png"; // Certifique-se que o nome do arquivo está correto

export function Hero() {
  return (
    <section className="w-full bg-white pt-8 pb-16 lg:pt-12 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex justify-center items-center w-full">
          {/* A imagem completa é inserida aqui. 
            'w-full' faz com que ela ocupe a largura do container.
            'max-w-screen-xl' evita que ela fique exageradamente grande em monitores muito largos.
          */}
          <img
            src={heroFullImage}
            alt="Mosaico Fábricas de Ideias"
            className="w-full h-auto max-w-[1100px] object-contain transition-opacity duration-500"
          />
        </div>
      </div>
    </section>
  );
}