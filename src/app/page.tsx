import Navbar from "@/app/components/Navbar";
import Videopage from "@/app/components/Video";
import Propertysearch from "@/app/components/SearchOverlay";
import CuratedCollaborations from "@/app/components/CuratedCollaborations";
import ParallaxShowcase from "@/app/components/ParallaxShowcase";
import PremierBanner from "./components/PremierBanner";
import StatsSection from "./components/StatsSection";
import WhyDubai from "./components/WhyDubai";
import GlobalPresence from "./components/GlobalPresence";
import OurExpertise from "./components/OurExpertise";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Videopage />
      <Propertysearch />

      {/* 👇  the navbar watches this element */}
      <section id="collab" className="bg-white">
        <div id="collab-trigger" className="h-1" />
        <CuratedCollaborations />
      <ParallaxShowcase
        maxTranslate={140}
        stagger={48}
        maxScaleInc={0.08}
      />
      <PremierBanner/>
      <StatsSection/>
      <WhyDubai/>
      <GlobalPresence/>
      <OurExpertise/>
      <Footer/>
      </section>

    </>
  );
}
