function $(id){
	return document.getElementById(id);
}
window.onload = function(){
	var topbtn = $("btn");
	var timer = null;
	var pagelookheight = document.documentElement.clientHeight; // height of the visible browser part
	console.log(pagelookheight);

	window.onscroll = function(){
		var backtop = document.body.scrollTop || document.documentElement.scrollTop;
		console.log(backtop);
		if (backtop > pagelookheight) {
			topbtn.style.display = "block";
		} else {
			topbtn.style.display = "none";
		}
	}

	topbtn.onclick = function(){
		timer = setInterval(function(){
			var backtop = document.body.scrollTop || document.documentElement.scrollTop;
			var speedtop = backtop/5;

			console.log(backtop)
			document.body.scrollTop -= speedtop;
			document.documentElement.scrollTop -= speedtop;  // IE
			if (backtop == 0){
				clearInterval(timer);
			}
		}, 30)
	}

}