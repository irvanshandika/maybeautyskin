import React from "react";

function CardUi() {
  const items = [
    {
      title: "Parfum",
      image: "https://cf.shopee.co.id/file/fd11907f0c04d1e254effeffd1b64ab4",
      buttonText: "Cek Produk",
      buttonLink: "/parfum",
      class: "classParfum",
    },
    {
      title: "Rose Water",
      image: "https://cf.shopee.co.id/file/48cb0f96fdfc549a9127a2dfbf2e7f63",
      buttonText: "Cek Produk",
      buttonLink: "/masker",
      class: "classMasker",
    },
    {
      title: "Perawatan Wajah",
      image: "https://projektoko.vercel.app/assets/images/sheetmask.jpg",
      buttonText: "Cek Produk",
      buttonLink: "/wajah",
      class: "classWajah",
    },
    // {
    //   title: "Olahraga",
    //   image: Olahraga,
    //   buttonText: "Lanjutkan",
    //   buttonLink: "/olahraga",
    //   class: "classOlahraga",
    // },
  ];
  return (
    <>
      <section id="produk">
        <div className="cardui justify-content-center text-center">
          <div className="container">
            <div className="row g-2">
              {items.map((item) => {
                return (
                  <div className="col-4">
                    <div className="p-3">
                      <div data-aos="fade-up" className="card" style={{ width: "21rem" }}>
                        <img src={item.image} className={`${item.class} images`} alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text">{item.description}</p>
                          <button type="button" class="btn tombol" to={item.buttonLink}>
                            {item.buttonText}
                          </button>
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

export default CardUi;
