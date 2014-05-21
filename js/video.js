// JavaScript Document
var $videoDialog = $('dialog');
dialogPolyfill.registerDialog($videoDialog.get(0));

$('.btn-open').on('click', function () {
	$videoDialog.children('.video').html('<iframe src="http://player.vimeo.com/video/86406445" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	/* When triggering built-in JS functions we need to bypass jQuery
	In order to get to the raw JS element we cas use .get()
	
	Example:
	$videoDialog.show() - will trigger jQuery's show function
	$videoDialog.get(0).show - will get the first raw JS element and trigger its native show function
	*/
	$videoDialog.get(0).showModal();
	/*
	.show() allowes uers to interact with stuff behind the dialog
	.showModal() disables user interaction behind the dialog
	*/
});

$('.btn-close').on('click', function (){
	$videoDialog.get(0).close();
	$videoDialog.children('.video').html('');
});