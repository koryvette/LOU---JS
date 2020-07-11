/* Background image rotation */
 $(document).ready(function(){
 var count = 0;
 var images = ["img/skyline_day_revised.jpg",
               "img/belle.jpg",
               "img/bourbon.jpg",
               "img/thunder.jpg",
               "img/churchill.jpg",
               "img/4thstreet_revised.jpg",
               "img/slugger.jpg",
               "img/LOU_Skyline_night.jpg",
               "img/centerforarts.jpg",
               "img/papajohn_revised.jpg",
               "img/highlands.jpg",
               "img/thunder2.jpg",
               "img/Yum_revised.jpg",
               "img/waterfrontpark.jpg",
               "img/ali.jpg",
               "img/slugger2.jpg",
               "img/papajohn_night_revised.jpg",
               ];

 var image = $('#banner');

 image.css("background-image","url("+images[count]+")");

 setInterval(function(){
   image.fadeOut(500, function(){
     image.css("background-image","url("+images[count++]+")");
     image.fadeIn(500);
   });
   if(count == images.length)
     {
       count = 0;
     }
 },5000);

 });

///////////////////////////////////////* Set CURRENT Date  *///////////////////////////
$(document).ready(()=>{
     function getDate(currentDate){
       let month = currentDate.getMonth() + 1;
       let day = currentDate.getDate();
       let year = currentDate.getFullYear();
       let fullYear =
       `${year}-${month < 10 ? '0' + month : month }-${day < 10 ? '0' + day : day}`;
       $('.current_date').text(fullYear);
     }
     
     function getTime(currentDate){
       let hours = currentDate.getHours();
       let minutes = currentDate.getMinutes();
       let seconds = currentDate.getSeconds();
       let fullTime = 
       `${hours < 10 ? '0' + hours : hours }/${minutes < 0 ? '0' + minutes : minutes }/${seconds < 10 ? '0' + seconds : seconds}`;
       $('.current_time').text(fullTime);
     }
     function updateDate(){
       setInterval(function(){
         let currentDate = new Date();
         getDate(currentDate);
       },1000);
     };
     updateDate();
     }) 
///////////////////* SEARCH function jquery TABLE view*////////////////////////////////
$(document).ready(function(){
     $('#search').keyup(function(){
          search_table($(this).val());
     });
     function search_table(value){
          $('#table_of_events tr').each(function(){
               var found = 'false';
               $(this).each(function(){
                    if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0)
                    {
                         found = 'true';
                    }
               });
               if(found == 'true')
               {
                    $(this).show();
               }
               else
               {
                    $(this).hide();
               }
          });
     }
});

/////////////////////////*      SEARCH function jquery TILE view            *///////////////////
$(document).ready(function(){
     $('#search').keyup(function(){
          search_table($(this).val());
     });
     function search_table(value){
          $('#tileLayout .event-thumb').each(function(){
               var found = 'false';
               $(this).each(function(){
                    if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0)
                    {
                         found = 'true';
                    }
               });
               if(found == 'true')
               {
                    $(this).show();
               }
               else
               {
                    $(this).hide();
               }
          });
     }
});
//////////////////////////////////*  Pagination  *//////////////////////////////////
var numberOfItems = $('#tileLayout .event-thumb').length;
var limitPerPage = 50;
$("#tileLayout .event-thumb:gt(" + (limitPerPage - 1) + ")").hide();
var totalPages = Math.round(numberOfItems/limitPerPage);
$('.pagination').append("<li class='page-item current-page active'><a class='page-link' href='javascript:void(0)'>" + 1 + "</a></li>");

for (var i = 2; i <= totalPages; i++){
     $('.pagination').append("<li class='page-item current-page'><a class='page-link' href='javascript:void(0)'>" + i + "</a></li>");
}

$(".pagination").append("<li class='page-item' id='next-page'><a class='page-link' href='javascript:void(0)'>Next</a></li>");

$(".pagination li.current-page").on("click", function(){
     var currentPage = $(this).index();
     $(".pagination li").removeClass("active");
     $(this).addClass("active");
     $("#tileLayout .event-thumb").hide();

     var grandTotal = limitPerPage * currentPage;

     for (var i  = grandTotal - limitPerPage; i < grandTotal; i++){
          $("#tileLayout .event-thumb:eq(" + i + ")").show();
     }
});

$("#next-page").on("click", function()
{
     var currentPage = $(".pagination li.active").index();
     if (currentPage === totalPages) 
     {
          return false;
     }
          else
          {
          currentPage++;
          $(".pagination li").removeClass("active");
          $("#tileLayout .event-thumb").hide();

          var grandTotal = limitPerPage * currentPage;

          for (var i  = grandTotal - limitPerPage; i < grandTotal; i++) 
               {
                    $("#tileLayout .event-thumb:eq(" + i + ")").show();
               }
               $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
          }
});

$("#prev-page").on("click", function()
{
     var currentPage = $(".pagination li.active").index();
     if (currentPage === 1) 
     {
          return false;
     }
          else
          {
          currentPage--;
          $(".pagination li").removeClass("active");
          $("#tileLayout .event-thumb").hide();

          var grandTotal = limitPerPage * currentPage;

          for (var i  = grandTotal - limitPerPage; i < grandTotal; i++) 
               {
                    $("#tileLayout .event-thumb:eq(" + i + ")").show();
               }
               $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
          }
});

/////////////////////////*      DATE filter function jquery TILE view            *///////////////////

$(document).ready(function(){
     $('.current_date').ready(function(){
          search_date($(this).val());
     });
     function search_date(value){
          $('.event-thumb #date').each(function(){
               var found = 'false';
               $(this).each(function(){
                    if($(this).value().indexOf(value) >= 0)
                    {
                         found = 'true';
                    }
               });
               if(found == 'true')
               {
                    $(this).show();
               }
               else
               {
                    $(this).hide();
               }
          });
     }
});
