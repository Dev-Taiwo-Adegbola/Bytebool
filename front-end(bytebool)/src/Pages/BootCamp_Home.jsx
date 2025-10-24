import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import { StartTech } from "../Components/misc";
import PriceSection from "../Components/PriceSection";
import WhatYouGet from "../Components/WhatYouGet";

const BootCamp_Home = () => {
  return (
    <>
      {/* <Header /> */}
      <HeroSection />
      <WhatYouGet />
      <PriceSection />
      <StartTech />
      <Footer />
    </>
  );
};
export default BootCamp_Home;
