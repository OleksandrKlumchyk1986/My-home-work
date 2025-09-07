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
document.addEventListener("DOMContentLoaded", function () {
  var lat = 49.411692;
  var lng = 26.942537;
  var map = L.map('map').setView([lat, lng], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  L.marker([lat, lng]).addTo(map).bindPopup("Привіт!!!").openPopup();
});
var burger = document.getElementById('burger');
var nav = document.querySelector('.header_nav');
burger.addEventListener('click', function () {
  burger.classList.toggle('is-active');
  nav.classList.toggle('active');
});