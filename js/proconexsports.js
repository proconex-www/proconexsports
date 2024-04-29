// JavaScript Document
function preloadphotos(photos) {
  $(photos).each(function () {
    $("<img>")[0].src = this;
  });
}

$(function(){
    $("body").addClass("fadein");
});