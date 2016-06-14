
var interval;
function startSearch() {
$('form#search-form').addClass('loading');
$('form#search-form button').attr("disabled", "disabled");
}
function endSearch() {
$('form#search-form').removeClass('loading');
$('form#search-form button').removeAttr("disabled");
}
$(function () {

 
 $('form#search-form [data-toggle="tooltip"]').tooltip();
});
function transitionFromSimple(cb) {
console.log("transition animation..");
$('.simple-only').slideUp({
duration: 'fast',
start: function () {
console.log("started..");
$('.hide-simple').slideDown('fast');
},
done: function () {
console.log("cb..");
cb();
}
});
}
function showSearchContent() {
$("#simple-filler").hide();
$('.hide-simple').fadeIn();
}
function hideSimple() {
var scrollpos = $(window).scrollTop();

 $(".simple-only, .jumbotron").each(function () {
scrollpos -= $(this).height();
});

 $("#topnavigation").show(0, function () {
scrollpos += $("#topnavigation").height();
$(".simple-only, .jumbotron").hide(0, function () {
window.scrollTo(0, scrollpos);
});
});
}
function ensureFillerSize() {
var simplefiller = $(".simple #simple-filler");
if (simplefiller.length > 0 && simplefiller.is(":visible")) {
var fillerHeight = 50 + $(window).height() - simplefiller.offset().top - $("footer").height();
simplefiller.height(Math.max(150, fillerHeight));
}
}
$(document).ready(function () {

 if ($("#faceted-search.simple").length > 0) { 


 ensureFillerSize();
$(window).resize(ensureFillerSize);

 $(".simple #topnavigation").hide(0);

 $(".simple #simple-filler p").fadeIn(10000);

 $(window).scroll(function () {
var filler = $(".simple #simple-filler");
if (filler.is(":visible")) { 
 var windowBottom = $(window).scrollTop() + $(window).height();
var fillerPos = filler.offset().top;
if (windowBottom > fillerPos) {
showSearchContent();
}
} else {

 if ($(".simple .jumbotron").is(":visible")) {
var contentPos = $('#search-content').offset().top;
if ($(window).scrollTop() > contentPos) {
hideSimple();
}
}
}
});

 $(".simple a#switch-from-simple").click(function (evt) {
evt.preventDefault();
showSearchContent();
$('body').animate({
scrollTop: $("#search-content").offset().top - 20,
}, 1000
);
});
}
});
