import FlashSale from "@/components/home/FlashSale";
import HeroSection from "@/components/home/HeroSection";
import TopCategories from "@/components/home/TopCategories";


export default function Home() {
  return (
   <>
    <header>
      <HeroSection />
      <FlashSale />
      <TopCategories />
    </header>
   </>
  );
}
