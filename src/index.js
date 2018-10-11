"use strict";
import "./main.scss";


(function () {

    var screenHeight;
    function size(){
        var x=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
        var y=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
        screenHeight=y;
        //$('#allmaintilte').css('height', y);
        //$('.whactOut').css('height', y/2);
    }
    var count=0;
    $(document).ready(function(){
        size();
        divDimention();
        positionscroller();

        $( window ).resize(function() {
            size();
            divDimention();
        });

        $(window).on('scroll',function(){
            count++;
            setTimeout(function() {
                divDimention();
                positionscroller();
                // playSeaAnimation();
                //$("#test").text(count);
            }, 150);
        });

    });


	//scroll to div top
    var topdiv1;
    var topdiv2;
    var topdiv3;
    var bottomdiv3;

    function divDimention(){
        topdiv1=$('#allmaintilte').offset().top;
        topdiv2=$('#allmaintilte').height();
        topdiv3=topdiv2+$('#favoriteProjectfid').height();
        bottomdiv3=topdiv3+$('#whactOutid').height()+$("#contactid").height();
    }
// Auto mark scrolls
    var positiondiv;
    var div1p, div2p,div3p;
    var flagSreenOnDiv1,flagSreenOnDiv2,flagSreenOnDiv3;
    function positionscroller(){
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + screenHeight;
        div1p = calcPersent(docViewTop, docViewBottom ,topdiv1,topdiv2);
        div2p=calcPersent(docViewTop, docViewBottom ,topdiv2,topdiv3);
        div3p=calcPersent(docViewTop, docViewBottom ,topdiv3,bottomdiv3);
        if (div1p>div2p && div1p> div3p){
            drawScroller(1);
            flagSreenOnDiv1=true;
            flagSreenOnDiv2=false;
            flagSreenOnDiv3=false;
        }else if(div2p>div1p && div2p>div3p){
            drawScroller(2);
            flagSreenOnDiv1=false;
            flagSreenOnDiv2=true;
            flagSreenOnDiv3=false;
        }else if(div3p>div1p && div3p>div2p){
            drawScroller(3);
            flagSreenOnDiv1=false;
            flagSreenOnDiv2=false;
            flagSreenOnDiv3=true;
        }

        if(!flagSreenOnDiv1 && !isAbout  && !flaganimationOn){
            flagSreenOnDiv1=true;
            playInIsabout();

        }

    }

    function calcPersent(docViewTop, docViewBottom ,divTop,divBottom){
        var divPixel = divBottom-divTop;
        var pixelinscreen;
        if (divTop<=docViewTop && divBottom>docViewTop ){
            pixelinscreen=divBottom-docViewTop;
            return pixelinscreen/divPixel;
        }else if (divTop>=docViewTop && divTop < docViewBottom ){
            pixelinscreen=docViewBottom-divTop;
            return pixelinscreen/divPixel;
        }else{
            return 0;
        }
    }
    var isplaying=false;


    var drawis=0;

    function drawScroller(x){
        var a = "30px";
        var b = "20px";
        var c = "15px";
        var at = "0em";
        var bt = "0em";
        var ct = "0em";

        if (x==1&& drawis!=1){
            drawis=1;
            $("#a").finish();
            $("#b").finish();
            $("#c").finish();
            $("#scroller").finish();

            $("#a").animate({height:a,width:a},500)
            $("#b").animate({height:b,width:b},500)
            $("#c").animate({height:c,width:c},500)
            $("#scroller").animate({top:"45%"},350)
            document.getElementById('at').style.fontSize=at;
            document.getElementById('bt').style.fontSize=bt;
            document.getElementById('ct').style.fontSize=ct;
        }else if (x==2&& drawis!=2){
            drawis=2;
            $("#a").finish();
            $("#b").finish();
            $("#c").finish();
            $("#scroller").finish();

            $("#a").animate({height:b,width:b},500)
            $("#b").animate({height:a,width:a},500)
            $("#c").animate({height:b,width:b},500)
            $("#scroller").animate({top:"35%"},350)

            document.getElementById('at').style.fontSize=ct;
            document.getElementById('bt').style.fontSize=at;
            document.getElementById('ct').style.fontSize=bt;
        }else if(x==3&& drawis!=3){
            drawis=3;
            $("#a").finish();
            $("#b").finish();
            $("#c").finish();
            $("#scroller").finish();

            $("#a").animate({height:c,width:c},500)
            $("#b").animate({height:b,width:b},500)
            $("#c").animate({height:a,width:a},500)
            $("#scroller").animate({top:"55%"},350)

            document.getElementById('at').style.fontSize=ct;
            document.getElementById('bt').style.fontSize=bt;
            document.getElementById('ct').style.fontSize=at;
        }
    }

    function scroll(x){
        if (x==1){
            jQuery('html, body').animate({scrollTop:topdiv1}, 'slow');
        }else if(x==2){
            jQuery('html, body').animate({scrollTop:topdiv2}, 'slow');
        }else if(x==3){
            jQuery('html, body').animate({scrollTop:topdiv3}, 'slow');
        }
    }






    // /*
	 // * Replace all SVG images with inline SVG
	 // */
    // jQuery('img.svg').each(function(){
    //     var $img = jQuery(this);
    //     var imgID = $img.attr('id');
    //     var imgClass = $img.attr('class');
    //     var imgURL = $img.attr('src');
    //
    //     jQuery.get(imgURL, function(data) {
    //         // Get the SVG tag, ignore the rest
    //         var $svg = jQuery(data).find('svg');
    //
    //         // Add replaced image's ID to the new SVG
    //         if(typeof imgID !== 'undefined') {
    //             $svg = $svg.attr('id', imgID);
    //         }
    //         // Add replaced image's classes to the new SVG
    //         if(typeof imgClass !== 'undefined') {
    //             $svg = $svg.attr('class', imgClass+' replaced-svg');
    //         }
    //
    //         // Remove any invalid XML tags as per http://validator.w3.org
    //         $svg = $svg.removeAttr('xmlns:a');
    //
    //         // Replace image with new SVG
    //         $img.replaceWith($svg);
    //
    //     }, 'xml');
    // });

	/*
	 * Awesome Intro
	 */
    var isAbout = true;
    var flaganimationOn=false;
    $("#ButtonText").click(function(){

        if (isAbout && !flaganimationOn){
            playInBack();
        }else if (!isAbout && !flaganimationOn){
            playInIsabout();
        }

    });

    function playInBack (){
        $("#logo").animate({
            'top': '15'
        }, 3000, function(){
        });

        flaganimationOn=true;
        $("#ButtonText").fadeOut(1000, function(){
            $("#ButtonText").text("< Back");
            $("#ButtonText").fadeIn(1000);
            isAbout=false;
        });
        $("#secondIntro").css({ zIndex: '10' });
        $("#firstIntro").animate({
            'top': '-100',
            'opacity': 0
        }, 1000, function() {
            // Animation complete.

            $("#secondIntro").css({ top: '-150px' });
            $("#firstIntro").css({ height: '0' });
            $("#secondIntro").css({ height: '0vh' });
            $("#secondIntro").css({ opacity: ' 0' });
            $("#secondIntro").animate({
                'top': '-200',
                'opacity': 1
            }, 1000, function() {
                flaganimationOn=false;

            });
        });

    }

    function playInIsabout (){
        flaganimationOn=true;
        $("#secondIntro").animate({
            'top': '-250',
            'opacity': 0
        }, 1000, function() {
            // Animation complete.
            $("#firstIntro").css({ top: '50px' });
            $("#firstIntro").css({ height: '25vh' });
            $("#firstIntro").css({ opacity: '0' });
            $("#secondIntro").css({ height: '0' });
            $("#secondIntro").css({ opacity: ' 0' });
            $("#logo").css({ top: ' 50px' });
            $("#secondIntro").css({ zIndex: '-1' });
            $("#firstIntro").animate({
                'top': '0',
                'opacity': 1
            }, 1500, function() {
                // Animation complete.
                flaganimationOn=false;
            });
        });

        $("#ButtonText").fadeOut(1000, function(){
            $("#ButtonText").text("About >");
            $("#ButtonText").fadeIn(1000);
            $("#mainAnim").fadeIn(1000);
            isAbout=true;
        });
    }

    require("./components/marine-section/index");


})();
