import React from "react";

function PaketKecantikanPage() {
  const parfums = [
    {
      title: "Paket Saffron",
      image: "https://cf.shopee.co.id/file/sg-11134201-22100-7ru8utweccivdb_tn",
      buttonText: "Cek Produk",
      buttonLink: "https://shopee.co.id/paket-saffron-i.296344657.16687054304?sp_atk=fc399743-806f-49ba-8379-f76bfd7aa395&xptdk=fc399743-806f-49ba-8379-f76bfd7aa395",
      class: "foto",
    },
    {
      title: "GARANSI 100% ORIGINAL MSGLOW BEAUTY PAKET MS GLOW WHITENING ULTIMATE LUMINOUS ACNE",
      image: "https://cf.shopee.co.id/file/dc3e8275d7ddacd9cb928ba290437119_tn",
      buttonText: "Cek Produk",
      buttonLink: "https://shopee.co.id/GARANSI-100-ORIGINAL-MSGLOW-BEAUTY-PAKET-MS-GLOW-WHITENING-ULTIMATE-LUMINOUS-ACNE-i.296344657.21643847346?sp_atk=11049e94-87f4-4b92-85bc-b223c73d9eff&xptdk=11049e94-87f4-4b92-85bc-b223c73d9eff",
      class: "foto",
    },
  ];
  return (
    <>
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
                        <h5 className="card-title" style={{ fontSize: "76%" }}>
                          {item.title}
                        </h5>
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
    </>
  );
}
export default PaketKecantikanPage;
