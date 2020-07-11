$(document).ready(function(){
var count = 0;
var images = ["../img/papajohn_night.jpg","../img/thunder_1 revised.jpg","../img/papajohn.jpg","../img/nightbridge.jpg","../img/skyline_day.jpg","../img/4thstreet.jpg"];
var image = $(".jumbotron");

image.css("background-image","url("+images[count]+")");

setInterval(function(){
  image.fadeout(500, function(){
    image.css(("background-image","url("+images[count++]+")");
    image.fadeIn(500);
  });
  if(count == images.length)
    {
      count = 0;
    }
},5000);

});
