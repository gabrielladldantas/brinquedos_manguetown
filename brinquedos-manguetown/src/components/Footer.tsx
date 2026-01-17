import LogoFI from "../assets/imagens/Logotipo-FI.png";

import WhatsappIcon from "../assets/imagens/whatsapp.png";
import FacebookIcon from "../assets/imagens/facebook.png";
import InstagramIcon from "../assets/imagens/instagram.png";
import TiktokIcon from "../assets/imagens/tiktok.png";

export function Footer() {
  const WHATSAPP_LINK = "https://wa.me/5599999999999";
  const FACEBOOK_LINK = "https://www.facebook.com/suapagina";
  const INSTAGRAM_LINK = "https://www.instagram.com/suapagina";
  const TIKTOK_LINK = "https://www.tiktok.com/@suapagina";

  return (
    <footer className="w-full bg-white border-t-2 border-gray-200 pt-16 pb-8 px-6 font-sans mt-30 justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-start gap-12">
          {/* Lado Esquerdo - Logo */}
          <div className="w-full md:w-2/3 flex items-start">
            <div className="flex flex-col items-center -ml-40 -mt-60">
              <img
                src={LogoFI}
                alt="Fábricas de Ideias"
                className="w-[360px] md:w-[520px] lg:w-[700px] h-auto"
              />
            </div>
          </div>

          {/* Lado Direito */}
          <div className="w-full md:w-1/2 flex flex-col gap-10">
            {/* Redes Sociais */}
            <div className="flex gap-8 items-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img
                  src={WhatsappIcon}
                  alt="WhatsApp"
                  className="w-[50px] h-[50px] object-contain"
                />
              </a>

              <a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className="w-[50px] h-[50px] object-contain"
                />
              </a>

              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="w-[50px] h-[50px] object-contain"
                />
              </a>

              <a
                href={TIKTOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img
                  src={TiktokIcon}
                  alt="TikTok"
                  className="w-[50px] h-[50px] object-contain"
                />
              </a>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
              <div className="flex flex-col gap-4">
                <a
                  href="/"
                  className="text-black font-bold text-lg hover:text-brand-green transition-colors"
                >
                  Home
                </a>
                <a
                  href="/parceiros"
                  className="text-black font-bold text-lg hover:text-brand-green transition-colors"
                >
                  Parceiros
                </a>
                <a
                  href="/projetos"
                  className="text-black font-bold text-lg hover:text-brand-green transition-colors"
                >
                  Projetos
                </a>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="/biblioteca"
                  className="text-black font-bold text-lg hover:text-brand-green transition-colors"
                >
                  Biblioteca
                </a>
                <a
                  href="/cursos"
                  className="text-black font-bold text-lg hover:text-brand-green transition-colors"
                >
                  Cursos
                </a>
                <a
                  href="/contato"
                  className="text-black font-bold text-lg hover:text-brand-green transition-colors"
                >
                  Contato
                </a>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="/brinquedos"
                  className="text-black font-bold text-lg hover:text-brand-green transition-colors"
                >
                  Brinquedos MangueTown
                </a>
                <a
                  href="/parceiros"
                  className="text-black font-bold text-lg hover:text-brand-green transition-colors"
                >
                  Seja um Parceiro
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <p className="text-gray-900 font-bold text-sm md:text-base text-center whitespace-nowrap">
          © 2025 Fábricas de Ideias. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
