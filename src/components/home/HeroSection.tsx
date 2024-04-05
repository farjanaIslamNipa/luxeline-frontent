'use client'
import assets from "@/assets";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSection = () => {
  return (
    <div className="z-30">
      <div className="max-w-[1400px] mx-auto hidden md:block">
        <Image src={assets.home.heroBanner} alt="Menz Clothing" className="w-full h-auto" />
      </div>
      <div className="custom-container -mt-[20px] md:-mt-[260px] lg:-mt-[360px] xl:-mt-[450px]">
        <div className="promotion-slider w-full sm:max-w-[90%] mx-auto z-40">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={5}
            slidesPerView={3}
            navigation
            breakpoints={{
              320: {
                slidesPerView: 1
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 5,
              }
            }}
          >
            <SwiperSlide>                
              <div className="header-carousel-card">
                <div >
                  <Image src={assets.home.trendingNow} alt="Trending" />
                  <p className="promotion-slider-title">Trending Now</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="header-carousel-card">
                <div >
                    <Image src={assets.home.exclusive} alt="Trending" />
                    <p className="promotion-slider-title">Luxeline Exclusive</p>
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="header-carousel-card">
                <div >
                  <Image src={assets.home.winterFashion} alt="Trending" />
                  <p className="promotion-slider-title">Winter Sale</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>                
              <div className="header-carousel-card">
                <div >
                  <Image src={assets.home.trendingNow} alt="Trending" />
                  <p className="promotion-slider-title">Trending Now</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="header-carousel-card">
                <div >
                    <Image src={assets.home.exclusive} alt="Trending" />
                    <p className="promotion-slider-title">Luxeline Exclusive</p>
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="header-carousel-card">
                <div >
                  <Image src={assets.home.winterFashion} alt="Trending" />
                  <p className="promotion-slider-title">Winter Sale</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;