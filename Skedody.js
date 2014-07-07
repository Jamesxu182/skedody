// JavaScript Document

function displayItem(obj) {
		obj.getElementsByTagName("a")[0].style.color = "black";
		obj.style.listStyleType = "disc";
}

function disappearItem(obj) {
		obj.getElementsByTagName("a")[0].style.color = "white";
		obj.style.listStyleType = "circle";
}
