var empate=0;
var i=2;
var tabela = [
    "","","",
    "","","",
    "","",""];

function preenche(numero) { 
    
    if(tabela[numero]=="" && empate==0){
        if(i%2==0){
            document.getElementById(numero).src="img/x.png";
            tabela[numero]="X";
        }
        if(i%2!=0){
            document.getElementById(numero).src="img/o.png";
            tabela[numero]="O";
        }
        console.log(i);
        i=i+1;
    }
    console.log(tabela)
}

function pede_nome() {
    var msg = document.getElementById("msg")
    msg.style.display = "none"
    var meuForm = document.forms['formNomes']
    var nome1 = document.getElementById("nome1").value
    var nome2 = document.getElementById("nome2").value
    
    return false;
    

    // if (erro) {
    //     msg.innerHTML = textErro;
    //     msg.style.display = "block"
    //     return false;
    // } else {
    //     return true;
    // }
}



















function valida() { 
    if(tabela[0]=="X" && tabela[1]==tabela[0] && tabela[1]==tabela[02]){//linha1
        document.getElementById(numero).style.backgroundColor="red";
        console.log("Jogador 1 venceu!!!")
        empate = 1
    }
    if(tabela[0]=="X" && tabela[0]==tabela[4]  && tabela[4]==tabela[8]){//diagonal1
        console.log("Jogador 1 venceu!!!")
        empate = 1
    }
    if(tabela[3]=="X" && tabela[3]==tabela[4] && tabela[4]==tabela[5]){//linha2
        console.log("Jogador 1 venceu!!!")
        empate = 1
    }
    if(tabela[6]=="X" && tabela[6]==tabela[7] && tabela[7]==tabela[8]){//linha3
        console.log("Jogador 1 venceu!!!")
        empate = 1
    }
    if(tabela[2]=="X" && tabela[2]==tabela[4] && tabela[4]==tabela[6]){//diagonal2
        console.log("Jogador 1 venceu!!!")
        empate = 1
    }
    if(tabela[0]=="X" && tabela[0]==tabela[3] && tabela[3]==tabela[6]){//coluna1
        console.log("Jogador 1 venceu!!!")
        empate = 1
    }
    if(tabela[1]=="X" && tabela[1]==tabela[4] && tabela[4]==tabela[7]){//coluna2
        console.log("Jogador 1 venceu!!!")
        empate = 1
    }
    if(tabela[2]=="X" && tabela[2]==tabela[5] && tabela[5]==tabela[8]){//coluna3
        console.log("Jogador 1 venceu!!!")
        empate = 1
    }
    //SEGUNDO JOGADOR
    if(tabela[0]=="O" && tabela[0]==tabela[1] && tabela[1]==tabela[2]){//linha1
        console.log("O jogador 2 venceu!!!")
        empate = 1
    }
    if(tabela[0]=="O" && tabela[0]==tabela[4] && tabela[4]==tabela[8]){//diagonal1
        console.log("O jogador 2 venceu!!!")
        empate = 1
    }
    if(tabela[3]=="O" && tabela[3]==tabela[4] && tabela[4]==tabela[5]){//linha2
        console.log("O jogador 2 venceu!!!")
        empate = 1
    }
    if(tabela[6]=="O" && tabela[6]==tabela[7] && tabela[7]==tabela[8]){//linha3
        console.log("O jogador 2 venceu!!!")
        empate = 1
    }
    if(tabela[2]=="O" && tabela[2]==tabela[4] && tabela[4]==tabela[6]){//diagonal2
        console.log("O jogador 2 venceu!!!")
        empate = 1
    }
    if(tabela[0]=="O" && tabela[0]==tabela[3] && tabela[3]==tabela[6]){//coluna1
        console.log("O jogador 2 venceu!!!")
        empate = 1
    }
    if(tabela[1]=="O" && tabela[1]==tabela[4] && tabela[4]==tabela[7]){//coluna2
        console.log("O jogador 2 venceu!!!")
        empate = 1
    }
    if(tabela[2]=="O" && tabela[2]==tabela[5] && tabela[5]==tabela[8]){//coluna3
        console.log("O jogador 2 venceu!!!")
        empate = 1
    }
    if(empate==0 && i==11 ){
        console.log("Deu Empate")
	}
	if(empate==1){
        console.log("Fim de jogo")
    }
}