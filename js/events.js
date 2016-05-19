var resize;
var modalId;
var winWidth;
var winHeight;
$(window).resize(function(){ 
	clearTimeout(resize);
    resize = setTimeout(modal.resize, 200);
});
$(document)
.ready(function() {
	
})
.on("click", ".modalLink", function() {
	modalId = $(this).attr('id').split('-');
	winWidth = $(window).width()/2;
    winHeight = $(window).height()/2;
	modal.init();	  
})
.on("click", ".close", function() {
	modal.exit();	 
})
.on("click", "#mask", function() {
	modal.exit();	 
});		