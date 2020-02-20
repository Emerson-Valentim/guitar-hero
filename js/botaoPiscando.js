function trocarCorInput(cores, cor){
	$('#joystick').css('border-style', 'none');
	trocarPlano(cores, cor);
}

function trocarPlano(cores, cor){
	$('#joystick').css('background-color', cores[cor]);
}

function colorirTutorial(cores){
	for(i = 0; i < cores.length; i++){
		var botoes = $('input',$('.tutorial'));
		botoes[i].style.background =  cores[i];
	}
}