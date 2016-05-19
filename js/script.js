var resize;
$(window).resize(function(){ 
	clearTimeout(resize);
    resize = setTimeout(doneResizing, 200);
});
$(document)
.ready(function() {
	
})
.on("click", ".modalLink", function() {
	modalId = $(this).attr('id').split('-');
	winWidth = $(window).width()/2;
    winHeight = $(window).height()/2;
	modalWindow();	  
})
.on("click", ".close", function() {
	closeModal();	 
})
.on("click", "#mask", function() {
	closeModal();	 
});		
function modalWindow(){
	modalWidth = $('.modal').width()/2;
    modalHeight = $('.modal').height()/2;
	$('#mask').fadeIn(500);
	$('#modal'+modalId[1]).css('left',winWidth-modalWidth);	
	//$('#modal'+modalId[1]).css('top',winHeight-modalHeight);
	$('#modal'+modalId[1]).css("top", Math.max(0, (($(window).height() - $('#modal'+modalId[1]).outerHeight()) / 2) + 
    $(window).scrollTop()) + "px");	
	$('#modal'+modalId[1]).fadeIn(500);
}
function closeModal(){
	$('#mask').fadeOut(500);
	$('#modal'+modalId[1]).fadeOut(500);
}
function doneResizing(){
	winWidth = $(window).width()/2;
    winHeight = $(window).height()/2;	
	modalWidth = $('.modal').width()/2;
    modalHeight = $('.modal').height()/2;
	$('#modal'+modalId[1]).animate({'top':winHeight-modalHeight,'left':winWidth-modalWidth},250);
	//$('#modal'+modalId[1]).animate({'left':winWidth-modalWidth},250);
}