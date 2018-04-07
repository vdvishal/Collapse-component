$(document).ready(function(){
  $(".li").css("opacity", 0.8);
  $(".li").hover(function(){
    $(this).css("opacity",1);
  }, function(){
    $(this).css("opacity",0.8);
});

 $(".button").hover(function(){
   $(this).css({"color":"#563D7C","background-color":"#FFE484","opacity":1})
 },function () {
   $(this).css({"color":"#FFE484","background-color":"#563D7C","opacity":0.9})
 })

$(".clk-1").click(function(){
  if ($(".shw-1").is(":hidden")) {
    $(".shw-1").slideDown(300);
    $(".shw-2").slideUp(300);
    $(".shw-3").slideUp(300);
  } else {
    $(".shw-1").slideUp(300);
   }
});

$(".clk-2").click(function(){
  if ($(".shw-2").is(":hidden")) {
    $(".shw-2").slideDown(300);
    $(".shw-1").slideUp(300);
    $(".shw-3").slideUp(300);
  } else {
    $(".shw-2").slideUp(300);
   }
});

$(".clk-3").click(function(){
  if ($(".shw-3").is(":hidden")) {
    $(".shw-3").slideDown(300);
    $(".shw-2").slideUp(300);
    $(".shw-1").slideUp(300);
  } else {
    $(".shw-3").slideUp(300);
   }
});

$(".link div").hover(function(){
  $(this).css("color","#007BFF");
}, function(){
  $(this).css("color","#99979C");
});

$(".link div").hover(function(){
  $(this).css("color","#007BFF");
}, function(){
  $(this).css("color","#99979C");
});

$(".bars").click(function(){
  if ($(".items").is(":hidden")) {
    $(".items").slideDown(300);
  } else {
    $(".items").slideUp(300);
  }
});
});
