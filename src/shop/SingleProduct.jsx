import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ProductDisplay from "./ProductDisplay";
import Reviews from "./Reviews";
import PopularPost from "./PopularPost";
import Tags from "./Tags";

const SingleProduct = () => {
  const [product, setproduct] = useState([]);
  const { id } = useParams();
  // console.log(id)
  useEffect(() => {
    fetch("/src/products.json")
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, []);

  const result = product.filter((p) => p.id === id);
  console.log(result);

  return (
    <div>
      <PageHeader title={"OUR SHOP SINGLE"} curPage={"Shop / Single Product"} />
      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row  justify-content-center ">
            <div className="col-lg-8 col-12">
              <article>
                <div className="product-details">
                  <div className="row align-items-center ">
                    <div className="col-md-6 col-12">
                      <div className="product-thumb">
                        <div className="swiper-container pro-single-top">
                          <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            Loop={"true"}
                            autoplay={{
                              delay: 2000,
                              disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            navigation={{
                              prevEl: ".pro-single-prev",
                              prevEl: ".pro-single-next",
                            }}
                            className="mySwiper"
                          >
                            {result.map((item, i) => (
                              <SwiperSlide key={i}>
                                <div className="single-thumb">
                                  <img src={item.img} alt="" />
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                          <div className="pro-single-next">
                            <i className="icofont-rounded-left"></i>
                          </div>
                          <div className="pro-single-prev">
                            <i className="icofont-rounded-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-12">
                      <div className="post-content">
                        {result.map((item) => (
                          <ProductDisplay key={item.id} item={item} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* reviews */}
                <div className="review">
                  <Reviews />
                </div>
              </article>
            </div>

            {/* right side */}
            <div className="col-lg-4 col-12">
              <aside className="ps-lg-4">
                <PopularPost />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
