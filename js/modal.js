$(document).ready(function () {
  $(".p8_kor").click(function () {
    var $myModal = $(".modal_wrap");
    var modalImage = $myModal.find(".modalImage");

    var imageSrc = $(this).attr("data-src");
    modalImage.attr("src", imageSrc);

    $myModal.css("display", "block");
  });

  $(".close").click(function () {
    $(".modal_wrap").css("display", "none");
  });

  $(".p8_eng").click(function () {
    var $myModal_en = $(".modal_wrap_en");
    var modalImage_en = $myModal_en.find(".modalImage");

    var imageSrc_en = $(this).attr("data-src");
    modalImage_en.attr("src", imageSrc_en);

    $myModal_en.css("display", "block");
  });

  $(".close").click(function () {
    $(".modal_wrap_en").css("display", "none");
  });
});
