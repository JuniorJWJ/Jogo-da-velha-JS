var i=2;
	function preenche(numero) { 
		var tabela = [
				["","",""],
				["","",""],
				["","",""]
		];

		if(i%2==0){
			document.getElementById(numero).style.background="red";
		}
		if(i%2!=0){
			document.getElementById(numero).style.background="green";
		}
		console.log(i);
	  i=i+1;

	}
