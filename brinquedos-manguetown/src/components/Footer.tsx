import LogoFI from "../assets/imagens/Logotipo-FI.png";

export function Footer() {
  return (
    /* Alterado para border-t-2 para uma linha levemente mais grossa */
    <footer className="w-full bg-white border-t-2 border-gray-200 pt-16 pb-8 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 ">
          {/* Lado Esquerdo - Logotipo da imagem */}
          <div className="w-full md:w-2/3 flex items-start">
            <div className="flex flex-col items-center -ml-40 -mt-60">
              <img
                src={LogoFI}
                alt="Fábricas de Ideias"
                className="
                  w-[360px]
                  md:w-[520px]
                  lg:w-[700px]
                  h-auto
                "
              />

              {/* Copyright logo abaixo da logo */}
              <p className="mt-2 text-gray-900 font-bold text-sm md:text-base text-center">
                © 2025 Fábricas de Ideias. Todos os direitos reservados.
              </p>
            </div>
          </div>

          {/* Lado Direito - Redes e Links */}
          <div className="w-full md:w-1/2 flex flex-col gap-10">
            {/* Ícones de Redes Sociais em SVG */}
            <div className="flex gap-6 items-center text-brand-green">
              {/* WhatsApp */}
              <a href="#" className="hover:scale-110 transition-transform">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="hover:scale-110 transition-transform">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="hover:scale-110 transition-transform">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" className="hover:scale-110 transition-transform">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.525.02c1.31.036 2.512.335 3.6.895a7.446 7.446 0 0 0-2.436 4.967l-.002 10.514a4.919 4.919 0 0 1-4.851 4.911 4.919 4.919 0 0 1-4.85-4.911 4.919 4.919 0 0 1 4.85-4.911V11.37a9.141 9.141 0 0 0-9.142 9.14 9.141 9.141 0 0 0 9.142 9.14 9.141 9.141 0 0 0 9.142-9.14V6.66a10.655 10.655 0 0 0 5.31 1.745V3.16a6.426 6.426 0 0 1-5.31-3.14z" />
                </svg>
              </a>
            </div>

            {/* Colunas de Links conforme a imagem */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="text-black font-bold text-lg hover:text-brand-green transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-black font-bold text-lg hover:text-brand-green transition-colors"
                >
                  Parceiros
                </a>
                <a
                  href="#"
                  className="text-black font-bold text-lg hover:text-brand-green transition-colors"
                >
                  Projetos
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="text-black font-bold text-lg hover:text-brand-green transition-colors"
                >
                  Biblioteca
                </a>
                <a
                  href="#"
                  className="text-black font-bold text-lg hover:text-brand-green transition-colors"
                >
                  Cursos
                </a>
                <a
                  href="#"
                  className="text-black font-bold text-lg hover:text-brand-green transition-colors"
                >
                  Contato
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="text-black font-bold text-lg hover:text-brand-green transition-colors"
                >
                  Brinquedos MangueTown
                </a>
                <a
                  href="#"
                  className="text-black font-bold text-lg hover:text-brand-green transition-colors"
                >
                  Seja um Parceiro
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
