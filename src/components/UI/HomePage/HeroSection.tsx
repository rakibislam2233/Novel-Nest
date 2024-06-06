import HeroSlider from "./HeroSlider";
import banner1 from "@/assets/banner/banner1.jpg";
import banner2 from "@/assets/banner/banner2.png";
import banner3 from "@/assets/banner/banner3.png";
import banner4 from "@/assets/banner/banner4.png";
const HeroSection = async () => {
  const bannerImages = [
    {
      id: 1,
      imageUrl: banner1,
    },
    {
      id: 2,
      imageUrl: banner2,
    },
    {
      id: 3,
      imageUrl: banner3,
    },
    {
      id: 4,
      imageUrl: banner4,
    },
  ];

  return (
    <>
      <HeroSlider bannerImages={bannerImages} />
    </>
  );
};

export default HeroSection;
