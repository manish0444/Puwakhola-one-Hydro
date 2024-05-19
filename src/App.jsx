import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";

import { About } from "./components/about";

import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import Footer from "./components/footer";
import ProjectViewer from "./components/ProjectViewer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import TopBar from "./components/TopBar";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <TopBar/>
      <Navigation />
      <Header data={landingPageData.Header} /> 
      <ProjectViewer /><hr/>
      <About data={landingPageData.About} /><hr/>
      
      <Gallery data={landingPageData.Gallery} /><hr/>
      <Testimonials data={landingPageData.Testimonials} /><hr/>
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
      <Footer  />
    </div>
  );
};

export default App;
