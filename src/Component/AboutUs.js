import React from "react";
import AboutImg from "../assets/images/about.png";

function AboutUs() {
  return (
    <>
      <div id="about" className="about-us">
        <div className="container">
          <h2 className="heading text-center">About Us</h2>
          <div className="row mt about-container">
            <div className="col-lg-6 col-sm-12">
              <h4>
                Welcome to <span className="about-subtitle">food House!</span>
              </h4>
              <p className="about-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                ornare consectetur consectetur. Maecenas mauris mi, placerat sit
                amet mauris id, rhoncus congue velit. Donec eget pretium lectus,
                eget scelerisque orci. Sed luctus mauris ac odio commodo mattis.
                Phasellus ultricies augue convallis aliquet ultrices. Phasellus
                vitae auctor risus.
              </p>
            </div>
            <div className="col-lg-6 col-sm-12 d-flex justify-content-end about-img">
              <figure>
                <img src={AboutImg}></img>
                <div className="under-about-img"></div>
              </figure>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="food-icon-container">
                <div className="food-icon">
                  <i class="fas fa-pizza-slice"></i>
                </div>
                <div className="food-icon">
                  <i class="fas fa-utensils"></i>
                </div>
                <div className="food-icon">
                  <i class="fas fa-hamburger"></i>
                </div>
                <div className="food-icon">
                  <i class="fas fa-pizza-slice"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
