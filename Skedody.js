// JavaScript Document

$(document).ready(function() {
		$("#skedody").mouseover(function() {
			$(this).css({"box-shadow" : "10px 10px 10px black"});
		});
			
		$("#skedody").mouseout(function() {
			$(this).css({"box-shadow" : "0 0 0 white"});
		});
		
		$("#fog li").mouseover(function() {
			$(this).find("a").css({"color": "black"});	
			$(this).css({"list-style-type" : "disc"});
		});
		
		$("#fog li").mouseout(function() {
			$(this).find("a").css({"color": "white"});
			$(this).css({"list-style-type" : "circle"});
		});
});
