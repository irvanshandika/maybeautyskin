import React from "react";
import Shopee from "../shopee.png";
import Address from "../address.png";

function OnlineStore() {
  return (
    <>
      <div className="olstore" id="store">
        <h2 className="text-center">Online Store Kami</h2>
        <div className="shopee justify-content-center d-flex">
          <a href="https://shopee.co.id/maybeauty.skin">
            <img src={Shopee} className="logo-shopee" />
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
