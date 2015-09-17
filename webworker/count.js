
var countNum = 0;


onmessage = function(e){
	countNum = e.data || 0;
}

function count(){

	postMessage(countNum);
	countNum++;
	//setTimeout(count, 1000);
}

//count();

setInterval(count, 1000);