import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InfiniteScroll from "@/components/InfiniteScroll";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <InfoSection />
      <InfiniteScroll />
      <Footer />
    </main>
  );
}
