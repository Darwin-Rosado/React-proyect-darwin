import React from 'react'

function Carrusel() {
  return (
    <div>
    <div id="carouselExampleDark" class="carousel carousel-dark slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="https://cpuinca.com/wp-content/uploads/2021/12/AMD-Ryzen-Serie-6000-Fecha-de-Lanzamiento.jpg" class="d-block" width="400px"  alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Procesadores Ryzen</h5>
          <p>El procesador para computadoras de escritorio con 32 núcle lógicos.</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/12/nuevos-procesadores-alder-lake-intel-llevan-experiencia-gaming-otro-nivel-2554955.jpg" class="d-block" width="400px" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Procesadores intel i9 Gen. 12</h5>
          <p>Descubre lo mejor en procesadores Intel para PC de escritorio.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://i.blogs.es/ddab6b/captura-de-pantalla-2022-09-20-a-las-17.23.52/1366_2000.jpeg" class="d-block" width="400px"  alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h6>Las mejores tarjetas gráficas RTX</h6>
          <p>La RTX 4090 doblega a las demás tarjetas gráficas con una 
            claridad insultante sin necesidad de recurrir a la reconstrucción
            de la imagen, pero cuando introducimos en la ecuación la tecnología DLSS
            3 barre tanto a las GeForce RTX 30 como a las Radeon RX 6000.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
      </div>
  )
}

export default Carrusel