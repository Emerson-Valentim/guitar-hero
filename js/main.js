var pixelX = $('.eixoX',$('.eixoY')[0]);
var pixel = [];
var cores = ['green', 'red', 'yellow', 'blue', 'orange'];

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
	// valores de 0 - 4 referentes a quantidade de colunas para gerar notas
	var posicao = Math.floor(Math.random() * pixel.length)
	switch(posicao){
		case 0:
			pixel[posicao].style.background = cores[0];
			//interpretarSons(0);
			break;
		case 1:
			pixel[posicao].style.background = cores[1];
			//interpretarSons(1);
			break;
		case 2:
			pixel[posicao].style.background = cores[2];
			//interpretarSons(2);
			break;
		case 3:
			pixel[posicao].style.background = cores[3];
			//interpretarSons(3);
			break;
		case 4:
			pixel[posicao].style.background = cores[4];
			//interpretarSons(3);
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
var colunaAzul = [];
var colunaLaranja = [];
var colunas = [colunaVerde,colunaVermelha,colunaAmarela,colunaAzul,colunaLaranja];
function queryEixoY(){
	var coluna = $('.eixoX',$('.eixoY'))
	for(j = 0; j < 31; j++){
		for(i = 0; i < 11; i++){
			//Dividindo em colunas, por ||pixelX sim -  pixelX nao||
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
					colunaAzul.push(coluna[i])
					break;
				case 9:
					colunaLaranja.push(coluna[i]);
				case 11:
					//Recortando linha por linha
					coluna.splice(0,11);
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
	case 4:
		trocarCor(coluna, linha);
		break;
	}
}

function trocarCor(coluna, linha){
	if(linhaEsteira[coluna].style.background == cores[coluna]){
		linhaEsteira[coluna].style.background = 'gray';
		colunas[coluna][linha + 1].style.background = cores[coluna];
	//Coluna= 0 ~ 4
	//Linha = 0 ~ 30
	}
}

function andarEsteira(linha){
	contador = 0;
	var andar = setInterval(function(){
		queryEixoX(linha);
		for(coluna = 0; coluna < colunas.length; coluna++){
			validarCor(coluna, linha)
			contador++;
			limparUltimaLinha(coluna);
		}
		if(contador > 4){
			clearInterval(andar)
		}
	}, 60)
}

pontosPerdidos = -5
pontosFeitos = -15

function limparUltimaLinha(coluna){
	if(validarLinhaUnitaria(coluna, 30)){
		//Maior valor de linhas 0 ~ 30 (31)
		colunas[coluna][30].style.background = "gray"
		contarPontosPerdidos();
	}
}


function validarLinhaUnitaria(coluna, linha){
	if(colunas[coluna][linha].style.background != 'gray'){
		colunas[coluna][linha].style.background = "gray"
		exibirPrecisao(linha);
		return true;
	}
	return false;
}

function exibirPrecisao(linha){
	switch(linha){
		//Linhas referente a pontuação posicionadas na lista 0 ~ 30 (31)
		case 28:
			$('#acurracy').text('BOM');
			break;
		case 29:
			$('#acurracy').text('PERFEITO');
			break;
		case 29:
			$('#acurracy').text('QUASE');
			break;
	}
}

function contarPontosPerdidos(){
	pontosPerdidos++;
	interpretarSons(5);
		//Referente ao id do erro na lista dentro da função InterpretarSons.
}

function contarAcertos(coluna){
	//Interação com colunas onde é possível pontuar.
	if(validarLinhaUnitaria(coluna, 29) || validarLinhaUnitaria(coluna, 28) || validarLinhaUnitaria(coluna, 27)){
		pontosFeitos++;
		return;
	}else{
		contarPontosPerdidos();
	}
}

function atualizarPlacar(placar){
	switch(placar){
		case '#pontosFeitos':
			$('#pontosFeitos').text(pontosFeitos);
		case '#pontosPerdidos':
			$('#pontosPerdidos').text(pontosPerdidos);
	}
}

function interpretarEntrada(tecla){
	switch(tecla){
		// valores de 0 - 4(tamanho da lista de colunas) referentes as colunas validadas.
		case 97:	
			executarEntrada(cores, 0);
			break;
		case 115:
			executarEntrada(cores, 1);
			break;
		case 100:
			executarEntrada(cores, 2);	
			break;
		case 102:
			executarEntrada(cores, 3);
			break;
		case 103:
			executarEntrada(cores, 4);
			break;
	}
}

function limparGrid(){
	rotacao = 0;
	while(rotacao < 3){
		for(input = 0; input < colunas.length; input++){
			contarAcertos(input);
		}
		rotacao++;
		input = 0;
	}
	$('#acurracy').text('');
}

function executarEntrada(cores, coluna){
	contarAcertos(coluna);
	trocarCorInput(cores, coluna);
	atualizarPlacar('#pontosPerdidos')
	atualizarPlacar('#pontosFeitos')
}

queryEixoY();
mapearPixel();
colorirTutorial(cores);
pintarBorda();
limparGrid();

$('#play').click(function(){
	$('#joystick').focus();
	$('#joystick').keypress(function(e){
		interpretarEntrada(e.keyCode)
	})
	linha = 30 //Maior valor de linhas 0 ~ 30 (31);
	setInterval(function(){
		andarEsteira(linha);
		linha--;	
		if(linha == -1){
			linha = 30;
			gerarNota();
		}
	}, 10)

})
