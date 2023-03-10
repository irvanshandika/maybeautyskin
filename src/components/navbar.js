import React from "react";
import $ from "jquery";
import LogoToko from "../logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  $(document).ready(function () {
    $(".navbar-toggler").trigger(function () {
      $(".navbar").toggleClass("navbar-hide");
    });
  });
  return (
    <>
      <div className="nav-bg">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={LogoToko} alt="logo" height="50px" width="50px" className="mr-1" />
              Maybeauty.Skin
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-4">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">
                    <Link className="text-decoration-none" to={"/"} style={{ color: "black" }}>
                      Home
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#produk">
                    Produk
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#kontak">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
