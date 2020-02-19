var pixelX = $('.eixoX',$('.eixoY')[0]);
var pixel = [];
var cores = ['green', 'red', 'yellow', 'orange'];

function mapearPixel(){

	var menu = $('.eixoX')
	for(i = 0; i < menu.length; i++){
		menu[i].style.height =  (screen.height * .8) / $('.eixoY').length + 'px'
	}

	for(i = 0; i < pixelX.length; i++){
		if(i % 2 != 0){
			pixel.push(pixelX[i]);
		}
	}	
}

function gerarNota(){
	var posicao = Math.floor(Math.random() * pixel.length)
	switch(posicao){
		case 0:
			pixel[posicao].style.background = cores[0];
			break;
		case 1:
			pixel[posicao].style.background = cores[1];
			break;
		case 2:
			pixel[posicao].style.background = cores[2];
			break;
		case 3:
			pixel[posicao].style.background = cores[3];
			break;
	} 	
	return posicao;
}

var linhaEsteira = [];

function queryEixoX(linha){
	linhaEsteira = [];
	var X = $('.eixoX',$('.eixoY')[linha]);
	for(i = 0; i < X.length; i++){
		if(i % 2 != 0){
			linhaEsteira.push(X[i])	;
		}
	}
}

var colunaVerde = [];
var colunaVermelha = [];
var colunaAmarela = [];
var colunaLaranja = [];
var colunas = [colunaVerde,colunaVermelha,colunaAmarela,colunaLaranja];
function queryEixoY(){
	var coluna = $('.eixoX',$('.eixoY'))
	for(j = 0; j < 30; j++){
		for(i = 0; i < 9; i++){
			switch(i){
				case 1:
					colunaVerde.push(coluna[i]);
					break;
				case 3:
					colunaVermelha.push(coluna[i]);
					break;
				case 5:
					colunaAmarela.push(coluna[i]);
					break;
				case 7:
					colunaLaranja.push(coluna[i]);
					break;
				case 8:
					coluna.splice(0,9);
					break;
			}	
		}
	}	
}


function validarCor(coluna, linha){
	switch(coluna){
	case 0:
		trocarCor(coluna, linha);
		break;
	case 1:
		trocarCor(coluna, linha);
		break;
	case 2:
		trocarCor(coluna, linha);
		break;
	case 3:
		trocarCor(coluna, linha);
		break;
	}
}

function trocarCor(coluna, linha){
	if(linhaEsteira[coluna].style.background == cores[coluna]){
		linhaEsteira[coluna].style.background = 'white';
		colunas[coluna][linha + 1].style.background = cores[coluna];
	//Coluna= 1 ~ 4
	//Linha = 1 ~ 30
	}
}

function andarEsteira(linha){
	contador = 0;
	var teste = setInterval(function(){
		queryEixoX(linha);
		for(coluna = 0; coluna < 4; coluna++){
			validarCor(coluna, linha)
			contador++;
			limparUltimaLinha(coluna);
		}
		if(contador > 3){
			clearInterval(teste)
		}
	}, 60)
}

pontosPerdidos = -4

function limparUltimaLinha(coluna){

	//RESPONSÁVEL POR LIMPAR ULTIMA LINHA E CONTAR PONTOS PERDIDOS//
	if(colunas[coluna][29].style.background != 'white'){
		colunas[coluna][29].style.background = "white"
		pontosPerdidos++;
		if(pontosPerdidos > 0){
			$('#pontosPerdidos').text(pontosPerdidos);
		}
	}
}


queryEixoY()
mapearPixel()

$('#play').click(function(){

	linha = 29
	setInterval(function(){
		andarEsteira(linha);
		linha--;	
		if(linha == -1){
			linha = 29;
			gerarNota();
		}
	}, 8)

})


