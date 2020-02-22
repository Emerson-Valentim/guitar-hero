var body = 	$("body");
var textoColorido = $('.texoColorido');
index = 1;

for(i = 0; i < textoColorido.length; i++){
	colorirTexto(i);	
}

function colorirTexto(i){
	classesCor = ['green','red','yellow','blue', 'orange'];
	rotocaoAutoTexto(classesCor,i);
}

function validarRotacaoTexto(lista, index){
	if(index == lista.length){
		return index = 0;		
	}
	index++
	return index;
}

function rotocaoAutoTexto(lista, i){
	var repeticao = setInterval(function(){
		index = validarRotacaoTexto(lista, index);
		textoColorido[i].style.color = classesCor[index];
	}, 2000);
}

