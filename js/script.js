$(document).ready(function(){$(".slider_upper_block.nOvariableWidth").slick({autoplay:!0,infinite:!0,prevArrow:'<button class="left slider_navigation"></button>',nextArrow:'<button class="right slider_navigation"></button>'}),$("#reviews_slider, #photo_slider").slick({infinite:!0,speed:300,centerMode:!0,variableWidth:!0,prevArrow:'<button class="left slider_navigation"></button>',nextArrow:'<button class="right slider_navigation"></button>'}),$("#reviews_slider, #photo_slider").each(function(){$(this).magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(e){return e.el.attr("title")}},zoom:{enabled:!0,duration:300,opener:function(e){return e.find("img")}}})})});