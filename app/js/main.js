$(function(){

  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "13px",
    readOnly: true,
  });

  $(".product-slider__inner").slick({
    slidesToScroll: 4,
    slidesToShow: 4,
    arrows: false,
    dots: true,
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
  });

  var mixer = mixitup('.products__inner-box')

});