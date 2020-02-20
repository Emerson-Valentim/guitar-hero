function pintarBorda(){
	// Penúltima e Antepenúltima linha
	for(a = 27; a<= 28; a++){
		var divs = (('.eixoX',$('.eixoY'))[a])
		escolherBorda(a, divs);
	}
}

function escolherBorda(num, divs){
	var divs = $('.eixoX',$(divs));
	colorirBordaLateral(divs);
	switch(num){
		case 27:
			colorirBordaSuperior(divs);
			break;			
		case 28:	
			colorirBordaInferior(divs);
			break
	}
}

function colorirBordaSuperior(divs){
	for(i = 0; i < divs.length; i++){
		divs[i].style.borderTop = 'solid';
		divs[i].style.borderColor = 'white';
	}		
}


function colorirBordaInferior(divs){
	for(i = 0; i < divs.length; i++){
		divs[i].style.borderBottom = 'solid';
		divs[i].style.borderColor = 'white';
	}
}		

function colorirBordaLateral(divs){	
	divs[0].style.borderLeft = 'solid'
	divs[divs.length - 1].style.borderRight ='solid'
}