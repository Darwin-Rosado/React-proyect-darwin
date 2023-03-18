import React from "react";

import "./Footer.scss";

function Footer() {
  return (
    <div className="pie-pagina">
      <div className="row">
        <div className="col">
          <ul class="list-group">
            <li>
            <button type="button" class="btn btn-link">
                Bolsa de trabajo
              </button>
            </li>
            <li>
              <button type="button" class="btn btn-link">
                Programa de becarios
              </button>
            </li>
            </ul>
        </div>
        <div className="col">
          <ul>
            <li><i class="bi bi-whatsapp"></i> 934-129-7759</li>
            <li><i class="bi bi-facebook"></i> xander.rosado90@gmail.com</li>
            <li><i class="bi-envelope-at"></i> alex_zw@hotmail.com</li>
          </ul>
        </div>
        <div className="col">
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Comentarios
</button>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title center fs-4" id="exampleModalLabel">Apartado de comentarios</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <h2 className="modal-body fs-6"> En esta empresa nos tomamos muy en serio los comentarios 
      de nuestros clientes, es por esto que creamos este apartado especialmente para que usted pueda dejar
        una queja, comentario o felicitación sobre el trato de nuestros colaboradores o
        sobre el servicio que recibió.
      </h2>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;