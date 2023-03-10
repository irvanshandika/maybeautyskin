import React from "react";
import Carousel from "../components/carousel.js";
import CardUi from "../components/cardui.js";
import OnlineStore from "../components/onlinestore.js";
import Layanan from "../components/layanan.js";
import Contact from "../components/contact.js";

const MainPage = () => {
  return (
    <>
      <div className="AppMain" id="home">
        <Carousel />
        <div className="ucapan">
          <p>Selamat Datang</p>
          <p>Di</p>
          <p>MayBeauty.Skin</p>
        </div>
        <CardUi />
        <Layanan />
        <Contact />
        <OnlineStore />
      </div>
    </>
  );
};
export default MainPage;
