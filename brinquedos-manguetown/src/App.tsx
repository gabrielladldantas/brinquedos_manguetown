import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Parceiros from "./pages/Parceiros";
import Biblioteca from "./pages/Biblioteca";
import Cursos from "./pages/Cursos";
import Contato from "./pages/Contato";
import Brinquedos from "./pages/Brinquedos";
import SejaParceiro from "./pages/SejaParceiro";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/parceiros" element={<Parceiros />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/brinquedos" element={<Brinquedos />} />
          <Route path="/seja-parceiro" element={<SejaParceiro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
