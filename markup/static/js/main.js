"use strict";

alert( 'Привет, Мир!' );

$(function () {
    $(".slider-big").owlCarousel({
        "items": 1,
        "loop": true,
        "dots": false,
        "autoplay": true,
        "autoplayTimeout": true,
        "autoplayHoverPause": true,
        "nav": false,
    });
});

function showMessage() {
  alert( 'Привет всем присутствующим!' );
}

console.log(showMessage);

