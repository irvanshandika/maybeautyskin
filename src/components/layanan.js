import React from "react";
import Shipping from "../shipping.png";
import Admin from "../admin.png";
import Packaging from "../packaging.png";

function Layanan() {
  return (
    <>
      <div className="layanan">
        <div className="container px-4 text-center">
          <div data-aos="fade-up" className="kurir">
            <img src={Shipping} alt="Shipping" className="images-layanan" />
            <p className="deskripsi text-center">Menggunakan Ekspedisi Yang Aman Dan Terpercaya</p>
          </div>
          <div data-aos="fade-up" className="admin">
            <img src={Admin} className="images-layanan" alt="Admin" />
            <p className="deskripsi text-center">Memberikan Pelayanan Chat Admin Yang Cepat Tanggap</p>
          </div>
          <div data-aos="fade-up" className="packaging">
            <img src={Packaging} className="images-layanan" alt="Admin" />
            <p className="deskripsi text-center">Memberikan Ekstra Pengemasan Dalam Pengiriman</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Layanan;
