

function $(id){
	return document.getElementById(id);
}

var numDiv;



window.onload = function(){
	numDiv = $('num');

	$("start").onclick = startCount;
	$("stop").onclick = stopCount;

	
}

var work = null;

function startCount(){
	if(work){
		return;
	}

	work = new Worker("count.js");
	work.postMessage($('num').innerHTML);

	work.onmessage = function(e){
		numDiv.innerHTML = e.data;
	}

}

function stopCount(){
	if (work) {
		work.terminate();
		work = null;
	};
}