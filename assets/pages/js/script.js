function additionalFunc(){var e="",t=$('.price_block input[type="checkbox"]:checked'),i=$('.price_block input[type="number"]')[0].value;$.each(t,function(t){return this.value,value=this.value,e+=value+" </br>"}),i>0&&(e=e+"</br>Количества участников от компании "+i+" человек");try{$('input[name="additional"]')[0].value=e}catch(e){}return e}$(document).ready(function(){$(".slider_upper_block.nOvariableWidth").slick({infinite:!0,adaptiveHeight:!0,prevArrow:'<button class="left slider_navigation"></button>',nextArrow:'<button class="right slider_navigation"></button>'}),$("#reviews_slider").slick({infinite:!0,speed:300,slidesToShow:6,prevArrow:'<button class="left slider_navigation"></button>',nextArrow:'<button class="right slider_navigation"></button>',lazyLoad:"ondemand",responsive:[{breakpoint:768,settings:{slidesToShow:3}},{breakpoint:480,settings:{slidesToShow:1}}]}),$("#photo_slider").slick({infinite:!0,speed:300,slidesToShow:3,adaptiveHeight:!0,prevArrow:'<button class="left slider_navigation"></button>',nextArrow:'<button class="right slider_navigation"></button>',lazyLoad:"ondemand",responsive:[{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]}),$("#sertificate_slider").slick({infinite:!0,speed:300,slidesToShow:1,centerMode:!0,variableWidth:!0,prevArrow:'<button class="left slider_navigation"></button>',nextArrow:'<button class="right slider_navigation"></button>',lazyLoad:"ondemand",responsive:[{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]}),$(".service_slider").slick({arrows:!1,dots:!0,autoplay:!0,autoplaySpeed:6e3}),$("#reviews_slider, #photo_slider, .service_slider, #sertificate_slider").each(function(){$(this).magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(e){return e.el.attr("title")}},zoom:{enabled:!0,duration:300,opener:function(e){return e.find("img")}}})})}),$("input[type=checkbox]").on("click",function(){$(this).parent(".for_input").toggleClass("check")}),$.post("https://seminarna.ru/seminari-i-treningi/?type=4",function(e){e=$("<div>"+e+"</div>"),$(".distant-container").append(e.find(".seminar.row"))}),$.post("https://seminarna.ru/",function(e){e=$("<div>"+e+"</div>"),$(".trust-container").append(e.find(".section.clients"))}),$("[data-reveal-id]").on("click",function(e){e.preventDefault(),0!==$(".price_block").length&&additionalFunc();var t=$(this).attr("data-text-form"),i=$(this).attr("data-textarea-form");$(".lead").text(t),$('label[for="message"]').html(i+'<textarea id="message" name="message" rows="3" placeholder="(Ваши комментарии, пожелания к программе, целевая аудитория, количество участников и тд.)"></textarea>'),0==$(this).text().length?$('input[name="request"]')[0].value=$(this).val():$('input[name="request"]')[0].value=$(this).text()});