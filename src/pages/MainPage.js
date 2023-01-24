import React from "react";
import Carousel from "../components/carousel.js";
import CardUi from "../components/cardui.js";
const MainPage = () => {
  return (
    <>
      <div className="AppMain">
        <Carousel />
        <div className="ucapan">
          <p>Selamat Datang</p>
          <p>Di</p>
          <p>Maybeauty.Skin</p>
        </div>
        <CardUi />
      </div>
    </>
  );
};
export default MainPage;
