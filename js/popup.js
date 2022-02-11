$(function(){
  //$(".popup").hide();
  $("#popup_btn a").click(function(){
    $(".popup").fadeIn(0);
  });
  $(".close").click(function(){
    $(".popup").fadeOut(0);
  });
});