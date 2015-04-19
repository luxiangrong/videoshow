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

    $("#jquery_jplayer_1").bind($.jPlayer.event.timeupdate , function(event) { // Add a listener to report the time play began
  		if(currentFrame < pauseTimes.length) {
            if (event.jPlayer.status.currentTime > pauseTimes[currentFrame].time) {
             	$(this).jPlayer('pause');
             	currentFrame ++;
                console.log(currentFrame);
          	}
          } 
	});

    var currentFrame = 0;
    var pauseTimes = [
    	{
    		time: 3,
    		transition: 'slide-from-left'
    	},
    	{
    		time: 7,
    		transition: 'slide-from-right'
    	},
    	{
    		time: 27,
    		transition: 'slide-from-left'
    	},
    	{
    		time: 46,
    		transition: 'slide-from-right'
    	}
    ];

    $('.text').addClass('fade in');
    $('.text').addClass('slide-from-left');
    $(document).on('click', function(){
        $('.intro-' + (currentFrame)).addClass('out').removeClass('in');
        $('.intro-' + (currentFrame + 1)).addClass('in').removeClass('out');
    	$("#jquery_jplayer_1").jPlayer('play');
        if(currentFrame == 4) {
            $("#jquery_jplayer_1").jPlayer('play', 0.1);
            currentFrame = 0;
        }
        $('.intro-' + (currentFrame)).addClass('out').removeClass('in');
        $('.intro-' + (currentFrame + 1)).addClass('in').removeClass('out');
    });
});
