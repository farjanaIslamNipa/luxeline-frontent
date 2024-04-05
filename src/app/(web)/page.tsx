import FlashSale from "@/components/home/FlashSale";
import HeroSection from "@/components/home/HeroSection";
import TopCategories from "@/components/home/TopCategories";
import TrendingNow from "@/components/home/TrendingNow";


export default function Home() {
  return (
   <>
    <header>
      <HeroSection />
    </header>
    <main>
      <FlashSale />
      <TopCategories />
      <TrendingNow />
    </main>
   </>
  );
}
