$(document).ready(function() {
    var movieWidth = 622,
        movieHeight = 354,
        winWidth = $(window).width() - 30,
        winHeight = $(window).height() - 30;

    var widthRate = winWidth / movieWidth;
    var heightRate = winHeight / movieHeight;

    var rate = widthRate < heightRate ? widthRate : heightRate;

    var jPlayer = $("#jquery_jplayer_1").jPlayer({
        ready: function() {
            $(this).jPlayer("setMedia", {
                title: "",
                m4v: "images/building.mp4",
            });

            $(this).jPlayer("pause", 0.1);
        },
        size: {
            width: movieWidth,
            height: movieHeight
        },
        swfPath: "/js",
        supplied: "m4v, ogv",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true
    });

    $("#jquery_jplayer_1").bind($.jPlayer.event.timeupdate, function(event) { // Add a listener to report the time play began
        if (currentFrame < pauseTimes.length) {
            if (event.jPlayer.status.currentTime > pauseTimes[currentFrame].time) {
                $(this).jPlayer('pause');
                currentFrame++;
            }
        }
    });

    var currentFrame = 0;
    var pauseTimes = [{
        time: 3,
        transition: 'slide-from-left'
    }, {
        time: 7,
        transition: 'slide-from-right'
    }, {
        time: 18,
        transition: 'slide-from-left'
    }, {
        time: 24,
        transition: 'slide-from-right'
    }, {
        time: 39,
        transition: 'slide-from-right'
    }];

    $('.text').addClass('fade in');
    $('.text').addClass('slide-from-left');
    $(document).on('click', function() {
        $('.intro-' + (currentFrame)).addClass('out').removeClass('in');
        $('.intro-' + (currentFrame + 1)).addClass('in').removeClass('out');
        $("#jquery_jplayer_1").jPlayer('play');
        if (currentFrame == 5) {
            $("#jquery_jplayer_1").jPlayer('play', 0.1);
            currentFrame = 0;
        }
        $('.intro-' + (currentFrame)).addClass('out').removeClass('in');
        $('.intro-' + (currentFrame + 1)).addClass('in').removeClass('out');
        switch(currentFrame) {
            case 0:
                showIntro1();
                break;
            case 1:
                showIntro2();
                break;
            case 2:
                showIntro3();
                break;
            case 3:
                showIntro4();
                break;
            case 4:
                showIntro5();
                break;
        }
    });

    function showIntro1() {
        var timeline = new TimelineMax();
        timeline.fromTo('.intro-1 h1', 1,{opacity: 0}, {opacity: 1});
        timeline.fromTo('.intro-1 p', 1,{opacity: 0}, {opacity: 1});
        timeline.fromTo('.intro-1 ul li.list-1', 1,{opacity: 0, left: 200}, {opacity: 1, left: 0}, '-=0.5');
        timeline.fromTo('.intro-1 ul li.list-2', 1,{opacity: 0, left: 200}, {opacity: 1, left: 0}, '-=0.5');
        timeline.fromTo('.intro-1 ul li.list-3', 1,{opacity: 0, left: 200}, {opacity: 1, left: 0}, '-=0.5');
    }

    function showIntro2() {
        var timeline = new TimelineMax();
        timeline.fromTo('.intro-2 h1', 1,{opacity: 0}, {opacity: 1}, "+=0.5");
        timeline.fromTo('.intro-2 p.p1', 1,{opacity: 0}, {opacity: 1});
        timeline.fromTo('.intro-2 p.p2', 1,{opacity: 0}, {opacity: 1});
    }
    function showIntro3() {
        var timeline = new TimelineMax();
        timeline.fromTo('.intro-3 h1', 1,{opacity: 0}, {opacity: 1}, "+=0.5");
        timeline.fromTo('.intro-3 ul li.list-1', 1,{opacity: 0, left: 200}, {opacity: 1, left: 0});
        timeline.fromTo('.intro-3 ul li.list-2', 1,{opacity: 0, left: 200}, {opacity: 1, left: 0});
        timeline.fromTo('.intro-3 ul li.list-3', 1,{opacity: 0, left: 200}, {opacity: 1, left: 0});
    }

    function showIntro4() {
        var timeline = new TimelineMax();
        timeline.fromTo('.intro-4 h1', 1,{opacity: 0}, {opacity: 1}, "+=0.5");
        timeline.fromTo('.intro-4 p.p1', 1,{opacity: 0}, {opacity: 1});
        timeline.fromTo('.intro-4 p.p2', 1,{opacity: 0}, {opacity: 1});
    }

    function showIntro5() {
        var timeline = new TimelineMax();
        timeline.fromTo('.intro-5 h1', 1,{opacity: 0}, {opacity: 1}, "+=0.5");
        timeline.fromTo('.intro-5 ul li.list-1', 1,{opacity: 0, top: 100}, {opacity: 1, top: 0});
        timeline.fromTo('.intro-5 ul li.list-2', 1,{opacity: 0, top: 200}, {opacity: 1, top: 0});
        timeline.fromTo('.intro-5 ul li.list-3', 1,{opacity: 0, top: 200}, {opacity: 1, top: 0});
        timeline.fromTo('.intro-5 ul li.list-4', 1,{opacity: 0, top: 200}, {opacity: 1, top: 0});
    }
});
