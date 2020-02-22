function interpretarSons(cor){
	audio = ['somverde', 'somvermelho', 'somamarelo', 'somazul', 'somlaranja', 'somerro']
	switch(cor){
		case 0:
			var	som = ($('#'+audio[cor]));
			console.log(som)
			reproduzirAudio(som);
			break;
		case 1:
			var	som = ($('#'+audio[cor]));
			reproduzirAudio(som);
			break;
		case 2:
			var	som = ($('#'+audio[cor]));
			reproduzirAudio(som);
			break;
		case 3:
			var	som = ($('#'+audio[cor]));
			reproduzirAudio(som);
			break;
		case 4:
			var som = ($('#'+audio[cor]));
			reproduzirAudio(som);
		case 5:
			//último SEMPRE caso para o erro.
			var som = ($('#'+audio[cor]));
			reproduzirAudio(som);
	}
}

function reproduzirAudio(som){
	som[0].play();
}
