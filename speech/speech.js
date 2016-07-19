var speech = new webkitSpeechReconition;

speech.continuous = true;
speech.interimResults = true;
speech.lang = 'pt-BR';

speech.onresult = function(e){
	console.log(e.results[e.result.length-1][0].transcript);
}