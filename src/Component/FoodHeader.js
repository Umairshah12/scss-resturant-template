import React, { useEffect } from "react";
import $ from "jquery";
import videoFile from "../assets/images/Shots of Different Food.mp4";

function FoodHeader() {
  $(function () {
    smootscroll(600);
    changeColor();
    window.onload = function () {
      let audioEl = document.getElementById("audioTag");
      audioEl.load();
      audioEl.play();
    };
  });

  function smootscroll(duration) {
    $("a[href^='#']").on("click", function (event) {
      var target = $($(this).attr("href"));
      if (target.length) {
        event.preventDefault();
        $("html,body").animate(
          {
            scrollTop: target.offset().top,
          },
          duration
        );
      }
    });
  }

  function changeColor() {
    $(document).on("click", "ul a", function () {
      $("ul a").removeClass("active");
      $(this).addClass("active");
    });
  }

  return (
    <div className="food_header">
      <div className="overlay-header">
        <video id="audioTag" autoplay loop muted>
          <source src={videoFile} type="video/mp4" />
        </video>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#offer">Offer</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#testimonial">Testimonial</a>
            </li>
          </ul>
        </nav>
        <div className="food-container">
          <h3 className="food_heading">Food Resturant Cafe</h3>
          <p className="food-desc">For Every perfect Resturant</p>
        </div>
      </div>
    </div>
  );
}

export default FoodHeader;
