import FAQPage from "@/components/homepage/FAQPage";
import IntroPage from "@/components/homepage/IntroPage";
import LandingPage from "@/components/homepage/LandingPage";
import ServicesPage from "@/components/homepage/ServicePage";
import Header from "@/components/main/Header";
import Services02 from "@/components/samples/Services02";
import Footer from "@/components/Sub/Footer";
import Pricing from "@/components/Sub/solution";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />

      <div className="front-layer">
        <LandingPage />
        <IntroPage />
        <Services02 />
      </div>
      <Pricing />
      <FAQPage />
    </div>
  );
}
