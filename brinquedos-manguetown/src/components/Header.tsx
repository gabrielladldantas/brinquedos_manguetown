export function Header() {
    return (
        <header className="w-full bg-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-12 py-6">


                {/*LOGO*/}
                <div className="text-green-600 font-extrabold text-xl leading-tight">
                    FÁBRICAS <br /> DE IDEIAS
                </div>


                {/*MENU*/}
                <nav className="flex items-center gap-8 text-sm font-medium text-gray-700">
                    <a href="#" className="hover:text-green-600">Projetos</a>
                    <a href="#" className="hover:text-green-600">Parceiros</a>
                    <a href="#" className="hover:text-green-600">Bibliotecas</a>
                    <a href="#" className="hover:text-green-600">Cursos</a>
                    <a href="#" className="hover:text-green-600">Contatos</a>
                    <a href="#" className="hover:text-green-600 font-semibold">Brinquedos Manguetown</a>
                </nav>

                {/*BOTÃO*/}
                <button className="border border-green-600 text-green-600 px-5 py-2 rounded-full text-sm font-medium hover:bg-green-50 transition">
                Seja um(a) Parceiro(a)
                </button>
            </div>
        </header>
    )
}