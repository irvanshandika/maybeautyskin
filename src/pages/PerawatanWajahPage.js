import React from "react";

function PerawatanWajahPage() {
  const parfums = [
    {
      title: "[TERMURAH] Saffron Facemist Glowing Saffron Rose Water Saffron Toner Saffron Spray",
      image: "https://cf.shopee.co.id/file/48cb0f96fdfc549a9127a2dfbf2e7f63",
      buttonText: "Cek Produk",
      buttonLink: "https://shopee.co.id/-TERMURAH-Saffron-Facemist-Glowing-Saffron-Rose-Water-Saffron-Toner-Saffron-Spray-i.296344657.6054703980?sp_atk=88d286dd-6c66-472f-986e-553d99a3c810&xptdk=88d286dd-6c66-472f-986e-553d99a3c810",
      class: "foto",
    },
    {
      title: "Azarine Hydrasoothe Sunscreen Gel SPF 45 PA++++",
      image: "https://cf.shopee.co.id/file/035e05f2d5a0dc80470897a9ac8c0226_tn",
      buttonText: "Cek Produk",
      buttonLink: "https://shopee.co.id/-Premium-Quality-PART-1-inspired-parfum-thailand-parfumed-murah-i.296344657.3755287971?sp_atk=ecef98e7-3df0-40b9-a858-019a4594f506",
      class: "foto",
    },
    {
      title: "Implora Serum",
      image: "https://cf.shopee.co.id/file/3cb452ab81bae6708b9d76ece41e3661_tn",
      buttonText: "Cek Produk",
      buttonLink: "https://shopee.co.id/Implora-Serum-i.296344657.19231479176?sp_atk=4436780c-13b1-415a-a893-9e1c2783532d&xptdk=4436780c-13b1-415a-a893-9e1c2783532d",
      class: "foto",
    },
    {
      title: "Lacoco Dark Spot Essence",
      image: "https://cf.shopee.co.id/file/25ab6b8a102185000eb6c958513247a6_tn",
      buttonText: "Cek Produk",
      buttonLink: "https://shopee.co.id/Lacoco-Dark-Spot-Essence-i.296344657.21631817662?sp_atk=54509f1e-56eb-40ab-a92c-735403dbb592&xptdk=54509f1e-56eb-40ab-a92c-735403dbb592",
      class: "foto",
    },
    {
      title: "Lacoco Watermelon Glow Mask",
      image: "https://cf.shopee.co.id/file/655e0656f34a67f63d40058f2f4ff903_tn",
      buttonText: "Cek Produk",
      buttonLink: "https://shopee.co.id/Lacoco-Watermelon-Glow-Mask-i.296344657.20631784267?sp_atk=b8a04e13-8080-492e-9f59-88966baa279b&xptdk=b8a04e13-8080-492e-9f59-88966baa279b",
      class: "foto",
    },
    {
      title: "Amazonian Charcoal Glow Mask",
      image: "https://cf.shopee.co.id/file/aa58ec76cbf6c8d092fdd7aeecff67c3_tn",
      buttonText: "Cek Produk",
      buttonLink: "https://shopee.co.id/Amazonian-Charcoal-Glow-Mask-i.296344657.18231817181?sp_atk=3a3ba25a-bd5c-4b31-b914-c6be1e35dc3f&xptdk=3a3ba25a-bd5c-4b31-b914-c6be1e35dc3f",
      class: "foto",
    },
    {
      title: "Lacoco Hydrating Divine Essence",
      image: "https://cf.shopee.co.id/file/1b68ff279353140394bdaed0752dafc8_tn",
      buttonText: "Cek Produk",
      buttonLink: "https://shopee.co.id/Lacoco-Hydrating-Divine-Essence-i.296344657.19731782995?sp_atk=8e22d7a5-5454-49bb-932d-28a2d194822f&xptdk=8e22d7a5-5454-49bb-932d-28a2d194822f",
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
                        <h5 className="card-title" style={{ fontSize: "100%" }}>
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
export default PerawatanWajahPage;
