import React from "react";
import Carrusel from "../../Componentes/Carrusel";
import Tarjetas from "../../Componentes/Tarjetas";

function Home() {
  return (
    <>
      <hr />
      <div className="section p-2">
        <Carrusel />
      </div>
      <hr />
      <div className="section p-2">
        <Tarjetas/>
        
      </div>
    </>
  );
}

export default Home;