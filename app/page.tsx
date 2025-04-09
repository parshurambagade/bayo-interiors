import React from "react";
import HeroSection from "./components/home/HeroSection";
import WhatWeDo from "./components/home/WhatWeDo";
import LatestProjects from "./components/home/LatestProjects";
import MeetOurClients from "./components/home/MeetOurClients";
import OurWork from "./components/home/OurWork";
import OurTeam from "./components/home/OurTeam";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhatWeDo />
      <LatestProjects />
      <OurWork />
      <MeetOurClients />
      <OurTeam />
    </div>
  );
};

export default Home;
