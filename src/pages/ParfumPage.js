import React from "react";

function ParfumPage() {
  const parfums = [
    {
      title: "INSPIRED PARFUM LELABO LE LABO 30ml",
      image: "https://cf.shopee.co.id/file/fd11907f0c04d1e254effeffd1b64ab4_tn",
      buttonText: "Cek Produk",
      buttonLink: "https://shopee.co.id/INSPIRED-PARFUM-LELABO-LE-LABO-30ml-i.296344657.16683656598?sp_atk=7e56e4c3-744d-41ee-a6f6-56be679bb6dc&xptdk=7e56e4c3-744d-41ee-a6f6-56be679bb6dc",
      class: "foto",
    },
    {
      title: "[Premium Quality] PART 1 inspired parfum thailand parfumed murah",
      image: "https://cf.shopee.co.id/file/2c031903150411fd89aafeb57eecffe8_tn",
      buttonText: "Cek Produk",
      buttonLink: "https://shopee.co.id/-Premium-Quality-PART-1-inspired-parfum-thailand-parfumed-murah-i.296344657.3755287971?sp_atk=ecef98e7-3df0-40b9-a858-019a4594f506",
      class: "foto",
    },
    {
      title: "[part 2 ] Inspired parfume parfum thailand parfumed wanita",
      image: "https://cf.shopee.co.id/file/35fba62391b16da189acdb9affad9dce_tn",
      buttonText: "Cek Produk",
      buttonLink: "https://shopee.co.id/-part-2-Inspired-parfume-parfum-thailand-parfumed-wanita-i.296344657.7070279385?sp_atk=b7ddc109-b6a1-4a17-a245-bbfdb8201952",
      class: "foto",
    },
  ];
  return (
    <>
      <section id="produk">
        <div className="cardui justify-content-center text-center">
          <div className="container">
            <div className="row g-2">
              {parfums.map((item) => {
                return (
                  <div className="col-md-4">
                    <div className="p-3">
                      <div data-aos="fade-up" className="card">
                        <img src={item.image} className={`${item.class} images`} alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text">{item.description}</p>
                          <a className="btn tombol" href={item.buttonLink} target="_blank">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nO3WrwrCQBzA8W+waFVQo/gIJpPB4hCsgqBPYDHrA4gvIZh8g3UNaza7OLOCYeDfiXBBLN7N305Bv3Dtx3243WCDX20OhGqtgOYn4BA4AUUsN1H4wDbcULBnG04BAXABsrZxV526YxvuPr1sUmv2Ci7EBG90Tr2MAR7rwKMY4JYOXBFGr0BOB04AO0F4gUFTQXhoArcF4aoJnAHOAmgAJDHME4BdItQXgHtR4DywfwPdAmkiVlaP/GgAHtQPRikq+rvV1dfFBxyBOe38h/tbC8x9P+yoTe+b1QTm/mGlGw7LH6npIjrWAAAAAElFTkSuQmCC" />
                            {item.buttonText}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ParfumPage;
