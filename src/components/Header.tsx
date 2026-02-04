import LogoFI from "../assets/imagens/Logotipo-FI.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 pb-30">
        <div className="grid grid-cols-[260px_1fr_1fr] h-full items-start gap-x-12">
          {/* Logo */}
            <Link to="/" className="relative">
              <img
              src={LogoFI}
              alt="Fábricas de Ideias"
              className="w-full h-auto absolute -top-10 -left-35 scale-140 hover:scale-145"
              />
            </Link>

          {/* Menu */}
          <nav className="hidden md:flex justify-center gap-10 pt-12 font-josefin font-semibold text-[#2B3826] text-xl tracking-wide">
            <Link to="/projetos" className="hover:opacity-70 transition">
              Projetos
            </Link>
            <Link to="/parceiros" className="hover:opacity-70 transition">
              Parceiros
            </Link>
            <Link to="/biblioteca" className="hover:opacity-70 transition">
              Biblioteca
            </Link>
            <Link to="/cursos" className="hover:opacity-70 transition">
              Cursos
            </Link>
            <Link to="/contato" className="hover:opacity-70 transition">
              Contato
            </Link>
            <Link to="/brinquedos" className="hover:opacity-70 transition font-bold text-[#259C38]">
              Brinquedos Manguetown
            </Link>
          </nav>

          {/* Botão */}
          <div className="flex justify-end pt-8">
            <Link
              to="/seja-parceiro"
              className="whitespace-nowrap border-3 border-[#259C38] text-[#2B3826] font-josefin font-extrabold 
                text-xl tracking-wide px-6 py-4 rounded-md hover:bg-[#259C38] hover:text-white transition"
              >
              Seja um(a) Parceiro(a)
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
