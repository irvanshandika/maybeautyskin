import React from "react";
import Shipping from "../shipping.png";
import Admin from "../admin.png";

function Layanan() {
  return (
    <>
      {/* Selalu Membukus Dengan Berlapis-lapis Agar Barang Aman Sampai Tujuan */}
      <div className="layanan container px-4 text-center">
        <div className="kurir">
          <img src={Shipping} alt="Shipping" className="images-layanan" />
          <p className="kurir-text text-center">Menggunakan Ekspedisi Yang Aman Dan Terpercaya</p>
        </div>
        <div className="admin">
          <img src={Admin} className="images-layanan" alt="Admin"></img>
        </div>
      </div>
    </>
  );
}
export default Layanan;
