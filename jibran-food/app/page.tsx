import ScrollSequence from "./components/ScrollSequence";
import Heritage from "./components/Heritage";
import JibranStandard from "./components/JibranStandard";
import TheProcess from "./components/TheProcess";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero: premium split layout */}
      <ScrollSequence />

      {/* Heritage storytelling */}
      <Heritage />

      {/* The Jibran Standard comparison */}
      <JibranStandard />

      {/* The Process: 4-Pillar Craftsmanship */}
      <TheProcess />

      {/* Premium Footer */}
      <Footer />
    </main>
  );
}
