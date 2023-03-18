import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importar layout
import Layout from "../layout/Layout";

//Importación de las páginas
import Restaurant from "../pages/contenido/Comida/PayJoy";
import Fondita from "../pages/contenido/Comida/Creditos";
import Home from "../pages/menu/Home";
import NotFound from "../pages/NotFound";
import Iphone from "../Componentes/Iphone";
import Créditos from "../pages/contenido/Comida/Creditos";
import PayJoy from "../pages/contenido/Comida/PayJoy";
import Creditos from "../pages/contenido/Comida/Creditos";

function Rutas() {
  return (
    <div>
      <BrowserRouter>
      <Layout>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route  exact path="/Payjoy" element={<PayJoy/>}/>
            <Route exact path="/creditos" element={<Creditos/>}/>
            <Route exact path="/iphone" element={<Iphone/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default Rutas;