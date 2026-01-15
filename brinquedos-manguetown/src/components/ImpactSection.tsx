import { Link } from "react-router-dom";
import { AsteriskGreen, AsteriskLight } from "../assets/imagens";
import groupImpact from "../assets/imagens/Group 19.png";

export function ImpactSection() {
  return (
    <section className="relative w-full bg-white py-20 lg:py-32 flex items-center min-h-[800px] overflow-visible">
      {/* ⭐ Estrela VERDE — superior esquerda */}
      <img
        src={AsteriskGreen}
        alt=""
        className="
    absolute
    -left-64
    -top-64
    w-[900px]
    z-0
  "
      />

      {/* ⭐ Estrela BEGE — inferior esquerda */}
      <img
        src={AsteriskLight}
        alt=""
        className="
    absolute
    -left-80
    top-[35%]
    w-[700px]
    z-0
    -rotate-6
  "
      />

      {/* ⭐ Estrela BEGE — superior direita */}
      <img
        src={AsteriskLight}
        alt=""
        className="
    absolute
    -right-72
    -top-40
    w-[700px]
    z-0
    rotate-12
  "
      />

      {/* ⭐ Estrela VERDE — inferior direita */}
      <img
        src={AsteriskGreen}
        alt=""
        className="
    absolute
    -right-64
    top-[45%]
    w-[800px]
    z-0
    rotate-12
  "
      />

      {/* Imagem lateral / símbolo feminino (NÃO ALTERADO) */}
      <div className="hidden lg:block absolute right-[6%] top-[60%] -translate-y-1/2 w-[70%] z-0 rotate-[-2deg]">
        <img
          src={groupImpact}
          alt="Mulheres Impactando Negócios"
          className="w-full h-auto object-contain mix-blend-multiply"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row">
          {/* Card de texto */}
          <div className="w-full lg:w-[42%] lg:ml-[8%] bg-white rounded-[60px] p-8 md:p-14 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-50 relative z-10">
            <p className="text-manguetown-green font-sans leading-relaxed text-base md:text-lg mb-10 text-justify lg:text-left">
              A{" "}
              <strong className="text-[#259C38] font-bold">
                Fábricas de Ideias
              </strong>{" "}
              transforma resíduos têxteis em brinquedos educativos de alto valor
              agregado, unindo sustentabilidade e criatividade. Nosso trabalho
              também promove inclusão social, oferecendo capacitação e
              oportunidades a mulheres em situação de medida protetiva,
              fortalecendo sua autonomia e inserção no mercado.
            </p>

            <h3 className="text-manguetown-green font-josefin text-xl md:text-[28px] font-bold mb-10 text-center leading-tight">
              Conheça nossas iniciativas de capacitação e impulsionamento de
              negócios
            </h3>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/biblioteca"
                className="bg-[#259C38] text-white px-10 py-3 rounded-2xl font-josefin font-bold text-lg hover:brightness-110 transition-all shadow-md text-center"
              >
                Biblioteca
              </Link>

              <Link
                to="/cursos"
                className="bg-[#259C38] text-white px-10 py-3 rounded-2xl font-josefin font-bold text-lg hover:brightness-110 transition-all shadow-md text-center"
              >
                Cursos
              </Link>
            </div>
          </div>

          {/* Versão mobile da imagem */}
          <div className="lg:hidden w-full mt-12 flex justify-center">
            <img
              src={groupImpact}
              className="w-[85%] max-w-[400px]"
              alt="Impacto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
