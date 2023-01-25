import React from "react";
import Shopee from "../shopee.png";

function OnlineStore() {
  return (
    <>
      <div className="olstore">
        <div className="shopee justify-content-center d-flex">
          <a href="https://shopee.co.id/maybeauty.skin">
            <img src={Shopee} className="logo-shopee" />
          </a>
        </div>
      </div>
    </>
  );
}
export default OnlineStore;
