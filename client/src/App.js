import React from 'react';
import AboutUs from './components/AboutUs';
import Cards from './components/Cards';
import { Clients } from './components/Clients';
import { ContactUs } from './components/ContactUs/ContactUs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { LocationDetails } from './components/ContactUs/Location/LocationDetails';
import Navbar from './components/Navbar';
import Services from './components/Services';
import { WhyAccountax } from './components/WhyAccountax';
import { LeadDetails } from './components/ContactUs/Location/Lead';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <WhyAccountax/>
      <Clients/>
      <LocationDetails/>
       {/* <Cards /> */}
       {/* <LeadDetails/> */}
      <Footer />
      <ContactUs/>
    </div>
  );
}

export default App;
