function pintarBorda(){
	// Penúltima e Antepenúltima linha
	for(a = 27; a<= 29; a++){
		var divs = (('.eixoX',$('.eixoY'))[a])
		escolherBorda(a, divs);
	}
}

function escolherBorda(num, divs){
	var divs = $('.eixoX',$(divs));
	switch(num){
		case 27:
			colorirBordaLateral(divs);
			colorirBordaSuperior(divs);
			break;			
		case 28:
			colorirBordaLateral(divs)
			break;
		case 29:	
			colorirBordaLateral(divs);
			colorirBordaInferior(divs);
			break;
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
	divs[0].style.borderColor = 'white'
	divs[divs.length - 1].style.borderRight ='solid';
	divs[divs.length - 1].style.borderColor = 'white';
}