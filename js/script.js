(function(){
	$(".my-nav ul li").hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).find('.hover-tip').show();
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).find('.hover-tip').hide();
	});
	$('#mobilenavlist .next').click(function(){
		if(!$('#mobileslider li.active').is('#mobileslider li:last')){
			$('#mobileslider li.active').removeClass('active').hide().next().fadeIn().addClass('active');
		}
	});

	$('#mobilenavlist .prev').click(function(){
		if(!$('#mobileslider li.active').is('#mobileslider li:first')){
			$('#mobileslider li.active').removeClass('active').hide().prev().fadeIn().addClass('active');
		}
	});
	$(".feature .img-box img").bind('mouseover', function() {
		/* Act on the event */
		$(this).addClass('shadow').next().css("visibility","visible");
	});
	$(".feature .img-box img").bind('mouseout', function() {
		 // Act on the event 
		 $(this).removeClass('shadow').next().css("visibility","hidden");
	});
	$(".feature .img-box .my-btn").bind('mouseover', function() {
		/* Act on the event */
		$(this).css("visibility","visible").prev().addClass('shadow');
	});
	$("#my-navbar").bind('click', function(event) {
		/* Act on the event */
		if($("#navbar-collapse").css('display') == "none"){
			setTimeout(function(){
				var height = parseInt($(".nav-list").css('height'));
				var top = parseInt($("#mobilenavlist").css('top'));
				top = top+height-30;
				$("#mobilenavlist").css('top', top+'px');
			}, 50);
		}
		else{
			$("#mobilenavlist").css('top', '420px');
		}
	});
	$(".search-btn").bind('click', function(event) {
		/* Act on the event */
		$('.logo-container').hide();
		$('#my-navbar').hide();
		$(this).removeClass('visible-xs').hide();
		$(".input-mini").show().find("input").focus();
	});
	$(".input-mini input").bind('blur', function(event) {
		/* Act on the event */
		$('.logo-container').show();
		$('#my-navbar').show();
		$('.search-btn').addClass('visible-xs');
		$(this).parent().hide();	
	});
})();