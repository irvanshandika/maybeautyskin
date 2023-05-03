import React from "react";
import Shopee from "../shopee.png";

function OnlineStore() {
  return (
    <>
      <div className="olstore" id="store">
        <h2 className="text-center">Online Store Kami</h2>
        <div className="shopee justify-content-center d-flex">
          <a href="https://shopee.co.id/maybeauty.skin">
            <button className="tombol-shopee rounded">
              <img src={Shopee} alt="Shopee" className="logo-shopee" />
            </button>
          </a>
        </div>
        {/* <h2 className="text-center">Offline Store</h2>
        <div className="lokasi justify-content-center d-flex">
          <a href="" className="text-decoration-none" style={{ color: "black" }}>
            <img src={Address} className="maps" />
            <p className="alamat text-end">Jalan Timoho No 129, Demangan, Gondokusuman, D.I.Yogyakarta</p>
          </a>
        </div> */}
      </div>
    </>
  );
}
export default OnlineStore;
