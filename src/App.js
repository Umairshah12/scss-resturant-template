import React from "react";
import "../src/assets/css/style.css";
import Header from "../src/Component/FoodHeader";
import About from "../src/Component/AboutUs";
import FoodOffer from "../src/Component/FoodOffer";
import FoodMenu from "../src/Component/Menu";
import Testimonials from "../src/Component/Testimonials";
import Footer from "../src/Component/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <About />
      <FoodOffer />
      <FoodMenu />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
