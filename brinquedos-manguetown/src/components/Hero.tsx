import heroFullImage from "../assets/imagens/Group 46.png"; 

export function Hero() {
  return (
    <section className="w-full bg-white pb-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex justify-center items-center w-full">
          {/* A imagem completa é inserida aqui. 
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