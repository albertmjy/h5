
var cName = "tooltip-box";

function $(id){
	return document.getElementById(id);
}

function showTooltip(obj, id, html, width, height){
	if ($(id) == null) {
		var tooltipBox;
		tooltipBox = document.createElement("div");
		tooltipBox.className = cName;
		tooltipBox.id = id;
		tooltipBox.innerHTML = html;

		obj.appendChild(tooltipBox);
		tooltipBox.style.width = width?width+"px":"auto";
		tooltipBox.style.height = height?height+"px":"auto";
		tooltipBox.style.position = "absolute";
		tooltipBox.style.display = "block";

		var left = obj.offsetLeft;
		var top = obj.offsetTop + 20;
		tooltipBox.style.left = left + "px";
		tooltipBox.style.top = top + "px";

		obj.addEventListener("mouseout", function(e){
			setTimeout(function(){
				$(id).style.display = "none";
			}, 200);
			
		});
		obj.onmouseout = function(){
			setTimeout(function(){
				$(id).style.display = "none";
			}, 500);
			
		}
	} else {
		$(id).style.display = "block";
	}
}

var parentDiv = $("div");
parentDiv.addEventListener("mouseover", function(e){
	var target = e.target;
	if (target.className == "tooltip") {
		var _html;
		var _id;
		var _width;
		switch(target.id){
			case "nodejs":
				_html = "Node js here";
				_id = "nj";
				_width = 200;
				break;
			case "json":
				_html = "JSON here";
				_id = "js";
				_width = 200;
				break;
			case "h":
				_html = "<iframe src='http://www.bing.com' width='500px' height='300px'></iframe>";
				_id = "ht";
				_width = 500;
				break;
			default:
				break;
		}
		showTooltip(target, _id, _html, _width);
	};
});

//var nodejs = $("nodejs");
//var json = $("json");
//var http = $("h");

/*nodejs.onmouseover = function(){
	showTooltip(this, "nj", "html here ", 200);
}*/
/*json.onmouseover = function(){
	showTooltip(this, "js", "JSON here", 200);
}*/
/*http.onmouseover = function(){
	var html = "<iframe src='http://www.bing.com' width='500px' height='300px'></iframe>"
	showTooltip(this, "ht", html, 500);
}*/