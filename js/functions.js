var modal = {
	init:function(){
		modalWidth = $('.modal').width()/2;
		modalHeight = $('.modal').height()/2;
		$('#mask').fadeIn(500);
		$('#modal'+modalId[1]).css('left',winWidth-modalWidth);	
		$('#modal'+modalId[1]).css("top", Math.max(0, (($(window).height() - $('#modal'+modalId[1]).outerHeight()) / 2) + 
		$(window).scrollTop()) + "px");	
		$('#modal'+modalId[1]).fadeIn(500);
	},
	exit:function(){
	$('#mask').fadeOut(500);
	$('#modal'+modalId[1]).fadeOut(500);
	},
	resize:function(){
		winWidth = $(window).width()/2;
		winHeight = $(window).height()/2;	
		modalWidth = $('.modal').width()/2;
		modalHeight = $('.modal').height()/2;
		$('#modal'+modalId[1]).animate({'top':winHeight-modalHeight,'left':winWidth-modalWidth},250);
	}
};