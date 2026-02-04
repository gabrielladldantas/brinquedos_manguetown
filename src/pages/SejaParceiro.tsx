import homemNegocios from "../assets/imagens/homemnegocios.png";
import mulherNegocios from "../assets/imagens/mulhernegocios.png";

export default function SejaParceiro() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      <section className="text-center space-y-8">
        <h1 className="font-bolota font-bold text-[#259C38] text-5xl md:text-6xl mb-4 uppercase tracking-tighter text-center">
          DOE AGORA
        </h1>

        <div className="mx-auto w-full max-w-3xl rounded-[24px] border-4 border-[#259C38] bg-white p-6 md:p-10 shadow-sm">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4 text-left text-[#2B3826] text-xl">
              <p>
                <span className="font-semibold text-[#7BA97D] text-lg md:text-xl">
                  Chave Pix (E-mail):
                </span>
                <br />
                fabricasideias@gmail.com
              </p>
              <p>
                <span className="font-semibold text-[#7BA97D]">
                  Beneficiário:
                </span>
                <br />
                Fábricas de Ideias
              </p>
              <p>
                <span className="font-semibold text-[#7BA97D]">Banco:</span>
                <br />
                Banco do Brasil
              </p>
              <p>
                <span className="font-semibold text-[#7BA97D]">Agência:</span>
                <br />
                0001
              </p>
              <p>
                <span className="font-semibold text-[#7BA97D]">
                  Conta Corrente:
                </span>
                <br />
                0000000-1
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex h-40 w-40 items-center justify-center rounded-xl border-4 border-[#259C38] bg-white text-sm font-semibold text-[#2B3826]">
                QR CODE
              </div>
              <span className="rounded-full bg-[#E5E4C6] px-8 py-2 text-sm font-bold text-[#259C38]">
                ESCANEIE
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center space-y-10">
        <h2 className="font-bolota font-bold text-[#259C38] text-4xl md:text-5xl uppercase tracking-tighter text-center">
          OUTRAS FORMAS DE
          <br />
          SER UM PARCEIRO
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-[24px] bg-[#F1F0EA] p-6 text-center shadow-sm">
            <img
              src={homemNegocios}
              alt="Pessoa física"
              className="mx-auto h-48 w-full rounded-2xl border-4 border-[#259C38] object-cover object-[center_25%]"
            />
            <h3 className="mt-6 text-2xl font-bold text-[#2B3826] uppercase">
              Pessoa Física
            </h3>
            <p className="mt-3 text-lg md:text-xl text-[#2B3826]">
              Seja um doador ou se
              <br />
              torne um voluntário!
            </p>
            <button className="mt-6 rounded-xl border-2 border-[#259C38] px-6 py-3 text-lg md:text-xl font-semibold text-[#259C38] hover:bg-[#259C38] hover:text-white">
              Entre em Contato Conosco!
            </button>
          </div>

          <div className="rounded-[24px] bg-[#F1F0EA] p-6 text-center shadow-sm">
            <img
              src={mulherNegocios}
              alt="Pessoa jurídica"
              className="mx-auto h-48 w-full rounded-2xl border-4 border-[#259C38] object-cover"
            />
            <h3 className="mt-6 text-2xl font-bold text-[#2B3826] uppercase">
              Pessoa Jurídica
            </h3>
            <p className="mt-3 text-lg md:text-xl text-[#2B3826]">
              Seja um patrocinador ou
              <br />
              contrate nossos serviços!
            </p>
            <button className="mt-6 rounded-xl border-2 border-[#259C38] px-6 py-3 text-lg md:text-xl font-semibold text-[#259C38] hover:bg-[#259C38] hover:text-white">
              Entre em Contato Conosco!
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
