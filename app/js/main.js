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

  var mixer = mixitup('.products__inner-box')

});