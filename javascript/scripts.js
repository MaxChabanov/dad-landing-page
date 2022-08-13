$(".arrow-down").click(() => {
  $("html, body").animate(
    {
      scrollTop: $("#section-second").offset().top,
    },
    1000
  );
});
