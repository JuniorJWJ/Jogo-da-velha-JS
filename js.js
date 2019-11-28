function preenche(numero) { 
	var i=1;
	var tabela = [
			["","",""],
			["","",""],
			["","",""]
	];

	if(i%2==0){
		document.getElementById(numero).style.background="red";
	}
	if(i%2==0){
		document.getElementById(numero).style.color="green";
	}
	console.log(i);
  i=i+1;

}