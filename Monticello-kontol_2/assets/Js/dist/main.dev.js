"use strict";

window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.style.background = "#8464f6ff";
  } else {
    header.style.background = "transparent";
  }
});
$(document).ready(function () {
  var slider = $("#newsSlider").lightSlider({
    item: 3,
    loop: true,
    auto: true,
    slideMargin: 30,
    pager: false,
    controls: false,
    speed: 700,
    responsive: [{
      breakpoint: 800,
      settings: {
        item: 2,
        slideMove: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        item: 1,
        slideMove: 1
      }
    }]
  });
  $(".custom-prev").click(function () {
    slider.goToPrevSlide();
  });
  $(".custom-next").click(function () {
    slider.goToNextSlide();
  });
});