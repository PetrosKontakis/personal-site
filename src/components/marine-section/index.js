//Favorite project

$(window).on('scroll', function () {
    setTimeout(function () {

        playSeaAnimation();
    }, 150);
});

$("#icon").hover(function () {
    $("#sun").animate({
        'top': '-25'
    }, 100, function () {
    });
}, function () {
    $("#sun").animate({
        'top': '10%',

    }, 100, function () {
    });
});

//wave
$("#island").click(function () {
    playSeaAnimation();
});
$("#passenger").click(function () {
    playSeaAnimation();
});
$("#container").click(function () {
    playSeaAnimation();
});
function playSeaAnimation() {

    if (animationIsPlaying == false) {
        seaAnimationFinish();
        seaAnimation();
    }
}

var animationIsPlaying = false;

function seaAnimation() {
    animationIsPlaying = true;
    $("#island").animate({bottom: "-=30px"}, 500).animate({bottom: "+=40px"}, 1000, function () {
        animationStop();
    }).animate({bottom: "-=20px"}, 1000).animate({bottom: "+=10px"}, 1000).animate({bottom: "-=5px"}, 1000)
        .animate({bottom: "+=5px"}, 1000).animate({bottom: "-=2px"}, 1000).animate({bottom: "+=2px"}, 1000)
    $("#sea3").animate({height: "+=10px"}, 1000).animate({height: "-=20px"}, 1000).animate({height: "+=20px"}, 1000)
        .animate({height: "-=10px"}, 1000).animate({height: "+=7px"}, 1000).animate({height: "-=7px"}, 1000)
        .animate({height: "+=4px"}, 1000).animate({height: "-=4px"}, 1000)
    $("#passenger").animate({bottom: "+=10px"}, 500).animate({bottom: "-=20px"}, 1000).animate({bottom: "+=20px"}, 1000)
        .animate({bottom: "-=10px"}, 1000).animate({bottom: "+=5px"}, 1000).animate({bottom: "-=5px"}, 1000)
        .animate({bottom: "+=2px"}, 1000).animate({bottom: "-=2px"}, 1000)
    $("#sea2").animate({height: "-=5px"}, 1000).animate({height: "+=10px"}, 1000).animate({height: "-=10px"}, 1000)
        .animate({height: "+=5px"}, 1000).animate({height: "-=3px"}, 1000).animate({height: "+=3px"}, 1000)
    $("#container").animate({bottom: "-=10px"}, 500).animate({bottom: "+=20px"}, 1000).animate({bottom: "-=20px"}, 1000)
        .animate({bottom: "+=10px"}, 1000).animate({bottom: "-=3px"}, 1000).animate({bottom: "+=3px"}, 1000)
    $("#sea4").animate({height: "-=5px"}, 1000).animate({height: "+=10px"}, 1000).animate({height: "-=10px"}, 1000)
        .animate({height: "+=5px"}, 1000)
    $("#sea1").animate({height: "+=3px"}, 1000).animate({height: "-=6px"}, 1000).animate({height: "+=6px"}, 1000)
        .animate({height: "-=3px"}, 1000)
}
function seaAnimationFinish() {
    $("#island").finish();
    $("#sea3").finish();
    $("#passenger").finish();
    $("#sea2").finish();
    $("#container").finish();
    $("#sea4").finish();
    $("#sea1").finish();
}
function animationStop() {
    animationIsPlaying = false;
}
