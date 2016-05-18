$(document).ready(function(){

   var nav = $('.navbar-fixed-top');
   &(window).scroll(function(){
   	   var scroll = $(window).scrollTop();
   	   if (scroll)

   });

   $('section#pantallas a').on('click',function(){
   	 $('#modal img').attr('src',$(this).attr('data-image-url'));

   });
});
