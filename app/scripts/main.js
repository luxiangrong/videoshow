$(document).ready(function() {
	var movieWidth = 612,
		movieHeight = 296,
		winWidth = $(window).width() - 30,
		winHeight = $(window).height() - 30;

	var widthRate = winWidth / movieWidth;
	var heightRate = winHeight / movieHeight;

	var rate = widthRate < heightRate ? widthRate : heightRate;

	console.log(movieWidth * rate);
	console.log(movieHeight * rate);


    var jPlayer = $("#jquery_jplayer_1").jPlayer({
        ready: function() {
            $(this).jPlayer("setMedia", {
                title: "",
                m4v: "/images/building.mp4",
            });

            $(this).jPlayer("pause", 0.01);
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
  		if (event.jPlayer.status.currentTime > pauseTimes[currentFrame].time) {
         	$(this).jPlayer('pause');
         	$('.text').addClass('in');
         	$('.text').text(pauseTimes[currentFrame].text);
         	$('.text').css('color', pauseTimes[currentFrame].color);
         	currentFrame ++;

      	}
	});

    var currentFrame = 0;
    var pauseTimes = [
    	{
    		time: 10,
    		text: '房山优质汉白玉',
    		color: '#365F91',
    		transition: 'slide-from-left'
    	},
    	{
    		time: 15,
    		text: '整个大殿都采用榫卯结构',
    		color: '#800000',
    		transition: 'slide-from-right'
    	},
    	{
    		time: 25,
    		text: '大殿坐北朝南，尊享皇家尊严',
    		color: '#365F91',
    		transition: 'slide-from-left'
    	},
    	{
    		time: 31,
    		text: '大殿前后落差9尺',
    		color: '#800000',
    		transition: 'slide-from-right'
    	},
    	{
    		time: 50,
    		text: '景山山顶可以俯瞰故宫',
    		color: '365F91',
    		transition: 'slide-from-left'
    	}

    ];

    $('.text').addClass('fade in');
    $('.text').addClass('slide-from-left');
    $(document).on('click', function(){
    	$('.text').removeClass('in');
    	$("#jquery_jplayer_1").jPlayer('play');
    	if(currentFrame > 0) {
    		$('.text').removeClass(pauseTimes[currentFrame - 1].transition);
    	}
    	$('.text').addClass(pauseTimes[currentFrame].transition);
    });
});
