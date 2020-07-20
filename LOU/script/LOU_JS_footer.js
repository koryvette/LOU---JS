
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

//  View more details in Tile view //
$(document).ready(function(){
    $('.quickview-title').click(function(){
      var $eventview = $(this).parent().parent().next();
      $($eventview).fadeIn('1000');
    });
    $('.close-btn').click(function(){
      var $closebtn = $(this).parent();
      $($closebtn).fadeOut('800');
    });
  });

  function hidePanels() {
  var x = document.getElementById("tableLayout");
   if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display =  "block";
  }
  var y = document.getElementById("tileLayout");
   if (y.style.display === "block") {
    y.style.display = "none";
    }
    else {
    y.style.display =  "none";
    }
} 
