$(".arrow-down").click(() => {
  $("html, body").animate(
    {
      scrollTop: $("#section-second").offset().top,
    },
    1000
  );
});

var slider = tns({
  container: ".slider",
  nav: false,
  controlsContainer: "#controls",
  prevButton: "#slider-controls-prev",
  nextButton: "#slider-controls-next",
  controlsPosition: "top",
  mouseDrag: true,

  responsive: {
    1000: {
      items: 2,
      gutter: 35,
    },
    900: {
      gutter: 20,
    },
  },
});
