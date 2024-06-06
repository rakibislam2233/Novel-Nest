"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image, { StaticImageData } from "next/image";

interface HeroSliderProps {
  bannerImages: BannerImage[];
}
interface BannerImage {
  id: number;
  imageUrl: StaticImageData | string;
}

function HeroSlider({ bannerImages }: HeroSliderProps) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {bannerImages?.map((image) => (
          <div
            key={image.id}
            className={`w-full h-[calc(100vh-128px)] relative rounded`}
          >
            <Image
              className="absolute top-0 left-0 right-0 bottom-0 cursor-pointer "
              layout="fill"
              src={image.imageUrl}
              alt="banner_image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroSlider;
