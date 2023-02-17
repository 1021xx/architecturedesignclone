$(function () {
  $(".sub_menu__list").hide();
  $(".sub_menu a").hover(function (e) {
    e.preventDefault();
    if ($(".sub_menu__list").css("display") == "none") {
      $(".sub_menu__list").css("display", "block");
    } else {
      $(".sub_menu__list").css("display", "none");
    }
  });
  // let oceanht = $(".ocean").height();
  // console.log(oceanht);
  // $(window).scroll(function () {
  //   ht = $(window).scrollTop();
  //   console.log(ht);
  //   if (ht < 3100) {
  //     $(".ocean").removeClass("on");
  //   } else if (ht >= 3100) {
  //     $(".ocean").addClass("on");
  //     $(".oceanbottom").css({ position: "absolute", height: ht });
  //   }
  // });
});
