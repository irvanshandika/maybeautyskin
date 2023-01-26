import React from "react";

function Carousel() {
  return (
    <>
      <div className="slider">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://projektoko.vercel.app/assets/images/facemask.jpg" className="fotocar d-block mx-auto" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://projektoko.vercel.app/assets/images/leau.jpg" className="fotocar d-block mx-auto" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://projektoko.vercel.app/assets/images/spray.jpg" className="fotocar d-block mx-auto" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://projektoko.vercel.app/assets/images/bodyspa.jpg" className="fotocar d-block mx-auto" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Carousel;
