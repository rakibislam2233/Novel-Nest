import BestSelling from "@/components/UI/HomePage/BestSelling";
import FCategories from "@/components/UI/HomePage/FCategories";
import FeaturedBooks from "@/components/UI/HomePage/FeaturedBooks";
import HeroSection from "@/components/UI/HomePage/HeroSection";
import NewReleases from "@/components/UI/HomePage/NewReleases";
import TopCategory from "@/components/UI/HomePage/TopCategory";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FCategories />
      {/* <BestSelling />
      <FeaturedBooks />
      <TopCategory />
      <NewReleases /> */}
    </div>
  );
};

export default Home;
