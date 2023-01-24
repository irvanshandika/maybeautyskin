import React from "react";

function Carousel() {
  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://projektoko.vercel.app/assets/images/facemask.jpg" className="carousel-images d-block mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://projektoko.vercel.app/assets/images/leau.jpg" className="carousel-images d-block mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://projektoko.vercel.app/assets/images/spray.jpg" className="carousel-images d-block mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://projektoko.vercel.app/assets/images/bodyspa.jpg" className="carousel-images d-block mx-auto" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}
export default Carousel;
