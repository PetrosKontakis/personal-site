var screenHeight;
function size(){	
	var x=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
	var y=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
	
	screenHeight=y;
}


$(document).ready(function(){
				size();
				playSeaAnimation();
				$( window ).resize(function() {
					size();
					
				});
				
				$(window).on('scroll',function(){
					header();
					playSeaAnimation();


				});
			
});

//header
function header(){
	var top=window.pageYOffset ;
	var min= $("#seadiv").height()-50;
	var divheight=$("#seadiv").height();
	if (top>min){
		$("#seadiv").css( "position", "fixed" );
		$("#seadiv").css( "top", -min );
		$("#null").css( "height", divheight );
	}else{
		$("#seadiv").css( "position", "relative" );
		$("#seadiv").css( "top", "0px" );
		$("#null").css( "height", "0px" );
	}
}

//wave 
$("#island").click(function(){
	playSeaAnimation();
});
$("#passenger").click(function(){
	playSeaAnimation();
});
$("#container").click(function(){
	playSeaAnimation();
});
function playSeaAnimation(){
	
	if (animationIsPlaying==false){
		seaAnimationFinish();
		seaAnimation();
	}
}
var animationIsPlaying=false;
function seaAnimation (){
	animationIsPlaying=true;
	$("#island").animate({bottom:"-=30px"},500).animate({bottom:"+=40px"}, 1000,function(){animationStop();}).animate({bottom:"-=20px"}, 1000).animate({bottom:"+=10px"}, 1000).animate({bottom:"-=5px"}, 1000).animate({bottom:"+=5px"}, 1000).animate({bottom:"-=2px"}, 1000).animate({bottom:"+=2px"}, 1000)
	$("#sea3").animate({height:"+=10px"},1000).animate({height:"-=20px"}, 1000).animate({height:"+=20px"}, 1000).animate({height:"-=10px"}, 1000).animate({height:"+=7px"}, 1000).animate({height:"-=7px"}, 1000).animate({height:"+=4px"}, 1000).animate({height:"-=4px"}, 1000)
	$("#passenger").animate({bottom:"+=10px"},500).animate({bottom:"-=20px"}, 1000).animate({bottom:"+=20px"}, 1000).animate({bottom:"-=10px"}, 1000).animate({bottom:"+=5px"}, 1000).animate({bottom:"-=5px"}, 1000).animate({bottom:"+=2px"}, 1000).animate({bottom:"-=2px"}, 1000)
	$("#sea2").animate({height:"-=5px"},1000).animate({height:"+=10px"}, 1000).animate({height:"-=10px"}, 1000).animate({height:"+=5px"}, 1000).animate({height:"-=3px"}, 1000).animate({height:"+=3px"}, 1000)	
	$("#container").animate({bottom:"-=10px"},500).animate({bottom:"+=20px"}, 1000).animate({bottom:"-=20px"}, 1000).animate({bottom:"+=10px"}, 1000).animate({bottom:"-=3px"}, 1000).animate({bottom:"+=3px"}, 1000)
	$("#sea4").animate({height:"-=5px"},1000).animate({height:"+=10px"}, 1000).animate({height:"-=10px"}, 1000).animate({height:"+=5px"}, 1000)	
	$("#sea1").animate({height:"+=3px"},1000).animate({height:"-=6px"}, 1000).animate({height:"+=6px"}, 1000).animate({height:"-=3px"}, 1000)
}
function seaAnimationFinish(){
	$("#island").finish();
	$("#sea3").finish();
	$("#passenger").finish();
	$("#sea2").finish();
	$("#container").finish();
	$("#sea4").finish();
	$("#sea1").finish();
}
function animationStop(){
	animationIsPlaying=false;
}


//image viewer
//$("#arrow").css( "opacity", "0.2" );
$(".arrow").hover(function(){
	$(".arrow").animate({opacity:"1"},100);
},function(){
	$(".arrow").animate({opacity:"0.1"},100);
});

var counter=1;
var maxphoto=5;
$("#rightarrow").click(function(){
	addcounter();
});
$("#leftarrow").click(function(){
	remouvecounter();
});
 
function remouvecounter(){
	if (counter<=1){
		counter=maxphoto;
	}else{
		counter--;
	}
	
	changeimage(counter);
}
function addcounter(){
	if (counter>=maxphoto){
		counter=1;
	}else{
		counter++;
	}
	changeimage(counter);
}
function changeimage(counter){
	$(".image").attr("src", "image/android"+counter+".png");
	//$(".image").animate({opacity:"0"},500,function(){}).animate({opacity:"1"},500);
	
	
}


function addhit(element) {
      // $.ajax({
      //      type: "POST",
      //      url: './php/index.php',
      //      data:{action:element},
      //      success:function(html) {
      //        //alert(html);
      //      }
      //
      // });
 }

