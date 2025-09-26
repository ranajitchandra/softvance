
import { useState } from "react";

import Footer from "./components/Footer";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";


export default function App() {


  return (
    <div className="max-w-7xl mx-auto">

      <Header />
      <Banner />
      <Services />
      <Products />
      <Testimonial />
      <FAQ />
      <Footer />
    </div>

  );
}
