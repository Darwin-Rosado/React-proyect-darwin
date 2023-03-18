import React from 'react'
import {Link} from "react-router-dom";

function Tarjetas() {
  return (
    <div class="row container text-center">
    <div class="col-xs-12 col-sm-6 col-md-4">
      <div class="card">
        <img
          src="https://m.media-amazon.com/images/G/33/Apple/2022/NPI_FALL/RiverContent/iPhone14Pro/MexicoiPhone14Pro01._CB610800642_.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">iPhone 14 Pro Max</h5>
          <p class="card-text">
          Grande y extragrande. Comprar ahora. Toma fotos aún más espectaculares en cualquier luz,
          incluso en condiciones de poca luz. 5 colores. Mayor duración de batería. Chip A15 Bionic.
          Detección de Choques.
          </p>
          <Link to="/iphone" class="btn btn-primary">
            Seguir leyendo...
          </Link>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4">
      <div class="card">
        <img
          src="https://www.notebookcheck.org/fileadmin/Notebooks/Motorola/Edge_30_Ultra/Bild_Motorola_Edge_30_Ultra_3931.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Moto Edge 30 Ultra</h5>
          <p class="card-text">
          El Motorola Edge 30 Fusion cuenta con una pantalla OLED de 6,55 pulgadas con resolución 
          Full HD+ y una velocidad de refresco de 144 Hz que mantiene los ejes curvados.
          </p>
          <a href="#" class="btn btn-primary">
            Seguir leyendo...
          </a>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4">
      <div class="card">
        <img
          src="https://cdn2.storyasset.link/nnpBxCoYwAZpkNDSvNDr39Uoh6i2/FhxhP19UYAAejrY-ms-xfqlmqwldl.jpeg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Oppo Reno Pro Plus</h5>
          <p class="card-text">
          Es un móvil con pantalla de 6,7 pulgadas curva, con tecnología AMOLED, 120 Hz de tasa 
          de refresco (no es LTPO) y con un brillo máximo de hasta 950 nits.
          </p>
          <a href="#" class="btn btn-primary">
            Seguir leyendo....
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Tarjetas