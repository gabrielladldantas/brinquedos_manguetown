import LogoFI from "../assets/imagens/Logotipo-FI.png";

export function Header() {
  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 h-[320px]">

        <div className="grid grid-cols-[260px_1fr_1fr] h-full items-start gap-x-12">

          {/* Logo */}
          <div className="flex justify-start">
            <img
              src={LogoFI}
              alt="Fábricas de Ideias"
              className="h-80 w-auto -mt-20 -ml-36"
            />
          </div>

          {/* Menu */}
          <nav className="hidden md:flex justify-center gap-10  pt-12 font-josefin font-semibold text-[#2B3826] text-xl  tracking-wide">
            <a href="#" className="hover:opacity-70 transition">Projetos</a>
            <a href="#" className="hover:opacity-70 transition">Parceiros</a>
            <a href="#" className="hover:opacity-70 transition">Biblioteca</a>
            <a href="#" className="hover:opacity-70 transition">Cursos</a>
            <a href="#" className="hover:opacity-70 transition">Contatos</a>
            <a href="#" className="hover:opacity-70 transition">Brinquedos Manguetown</a>
          </nav>

          {/* Botão */}
          <div className="flex justify-end pt-8">
            <button className="whitespace-nowrap border-3 border-[#259C38] text-[#2B3826] font-josefin font-extrabold 
            text-xl tracking-wide px-2 py-4 rounded-md hover:bg-[#259C38] hover:text-white transition">
              Seja um(a) Parceiro(a)
           </button>
          </div>

        </div>

      </div>
    </header>
  );
}



