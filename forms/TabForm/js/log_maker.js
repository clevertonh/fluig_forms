$(document).ready(function($){
	addLogMessage("|==================================================| LOG MAKER (FRONTEND VERSION) v1.0 |==================================================|", "#1E90FF", "#FFFFFF");
});

function addLogMessage(message, fundo, cor_fonte){
	var time = getTimeNow();
	console.log(time + "%c " + message, "background: " + fundo + "; color: " + cor_fonte + "; display: block;");
}

function getTimeNow(){
	var og_date = new Date();
	var hour = og_date.getHours();
	var minutes = og_date.getMinutes();
	var seconds = og_date.getSeconds();

	if(hour.toString().length == 1){
		hour = "0" + hour.toString();
	}

	if(minutes.toString().length == 1){
		minutes = "0" + minutes.toString();
	}

	if(seconds.toString().length == 1){
		seconds = "0" + seconds.toString();
	}

	var final_time = "[" + hour + ":" + minutes + ":" + seconds + "] => ";
	return final_time;
}