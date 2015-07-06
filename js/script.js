// Mixing jQuery and Node.js code in the same file? Yes please!

/*$(document).ready(function(){
	$(window).resize(function(){
		window.resizeTo(1350,570);
		window.focus();
	});
});*/
$(function(){
	var iframe = null,
		_iframeContent = null;
	$("#mecuri").bind("load",function(){
		iframe = $(this);
		_iframeContent = iframe.contents();

		console.log($(this).contents().find("head").after("<script></script>"))


	});
});