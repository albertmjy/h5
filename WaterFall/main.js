window.onload = function(){
	imgLocation("container", "box");

	var imgData = {
		"data":[{"src":"10.jpg"},{"src":"11.jpg"},{"src":"12.jpg"},{"src":"13.jpg"},{"src":"14.jpg"},{"src":"15.jpg"},{"src":"16.jpg"}]
	}
	window.onscroll = function(){
		if (checkFlag()){
			var cparent = document.getElementById("container");
			for (var i = 0; i < imgData.data.length; i++) {
				var ccontent = document.createElement("div");
				ccontent.className = "box";
				cparent.appendChild(ccontent);
				var boximg = document.createElement("div");
				boximg.className = "box_img";
				ccontent.appendChild(boximg);
				var img = document.createElement("img");
				img.src = imgData.data[i].src;
				boximg.appendChild(img);
			}
			imgLocation("container", "box");
		}
	}
}

function checkFlag(){
	var cparent = document.getElementById("container");
	var ccontent = getChildElement(cparent, "box");
	var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
	if (lastContentHeight < scrollTop + pageHeight){
		return true;
	}
}


function imgLocation(parent, content){
	var cparent = document.getElementById(parent);
	var ccContent = getChildElement(cparent, content);
	//console.log(ccContent);
	var imgWidth = ccContent[0].offsetWidth;
	var cols = Math.floor(document.documentElement.clientWidth / imgWidth);
	cparent.style.cssText = "width:" + imgWidth*cols + "px; margin:0 auto;";

	var boxHeightArr = [];
	for (var i = 0; i< ccContent.length; i++) {
		if (i < cols) {
			boxHeightArr[i] = ccContent[i].offsetHeight;
		} else{
			var minHeight = Math.min.apply(null, boxHeightArr);
			var minIndex = getMinHeightLocation(boxHeightArr, minHeight);
			//console.log(minHeight);
			ccContent[i].style.position = "absolute";
			ccContent[i].style.top = minHeight + "px"
			ccContent[i].style.left = ccContent[minIndex].offsetLeft + "px";
			boxHeightArr[minIndex] += ccContent[i].offsetHeight;
		}
		
	}
}


function getMinHeightLocation(boxHeightArr, minHeight){
	for (var i in boxHeightArr) {
		if (boxHeightArr[i] == minHeight){
			return i;
		}
	}
}

function getChildElement(parent, content){
	var contentArr = [];
	var allContent = parent.getElementsByTagName("*");
	for (var i = 0; i<allContent.length; i++) {
		if (allContent[i].className==content) {
			contentArr.push(allContent[i]);
		};
	}

	return contentArr;
}