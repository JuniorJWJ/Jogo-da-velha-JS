var empate=0;
var i=2;
var tabela = [
    "","","",
    "","","",
    "","",""];
var jogadores = ["",""]
var vencedor;
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
    jogadores[0]= (document.getElementById("nome1").value) ;
    jogadores[1]= (document.getElementById("nome1").value);

    var inserenome2 = document.getElementById("inserenome2")
    inserenome2.style.display = "none"
    var inserenome2 = document.getElementById("inserenome1")
    inserenome1.style.display = "none"

    var meuForm = document.forms['formNomes']
    var nome1 = document.getElementById("nome1").value
    var nome2 = document.getElementById("nome2").value

    document.querySelector('#fundo').style.filter= "blur(0px)";

    return false;
}
function botao_menu1() {

   var menu1 = document.getElementById("menu1")
   menu1.style.display = "none"
   var inserenome1 = document.getElementById("inserenome1")
   inserenome1.style.display = "block"

   var meuForm = document.forms['formNomes']
   var nome1 = document.getElementById("nome1").value
   var nome2 = document.getElementById("nome2").value
   document.querySelector('#fundo').style.filter= "blur(0px)";

   return false;
}
function botao_menu2() {

    var menu1 = document.getElementById("menu1")
    menu1.style.display = "none"
    var inserenome2 = document.getElementById("inserenome2")
    inserenome2.style.display = "block"

    var meuForm = document.forms['formNomes']
    var nome1 = document.getElementById("nome1").value
    var nome2 = document.getElementById("nome2").value
    document.querySelector('#fundo').style.filter= "blur(0px)";

    return false;
 }
function mostra_vencedor(){
    if(empate==1){
        vencedor=jogadores[0];
    }
    if(empate==2){
        vencedor=jogadores[1];
    }
    alert(vencedor+" venceu o jogo")

    var reset = document.getElementById("reset")
    reset.style.display = "block"


}
function resetar(){
    for(i = 0; i<10; i++){
        jogadores[i]=" "
    }
    var reset = document.getElementById("reset")
    reset.style.display = "none"
}














function valida() { 
    if(tabela[0]=="X" && tabela[1]==tabela[0] && tabela[1]==tabela[02]){//linha1
        console.log(jogadores[1]+" venceu!!!")
        empate = 1
        mostra_vencedor()
    }
    if(tabela[0]=="X" && tabela[0]==tabela[4]  && tabela[4]==tabela[8]){//diagonal1
        console.log("Jogador 1 venceu!!!")
        empate = 1
        mostra_vencedor()
    }
    if(tabela[3]=="X" && tabela[3]==tabela[4] && tabela[4]==tabela[5]){//linha2
        console.log("Jogador 1 venceu!!!")
        empate = 1
        mostra_vencedor()
    }
    if(tabela[6]=="X" && tabela[6]==tabela[7] && tabela[7]==tabela[8]){//linha3
        console.log("Jogador 1 venceu!!!")
        empate = 1
        mostra_vencedor()
    }
    if(tabela[2]=="X" && tabela[2]==tabela[4] && tabela[4]==tabela[6]){//diagonal2
        console.log("Jogador 1 venceu!!!")
        empate = 1
        mostra_vencedor()
    }
    if(tabela[0]=="X" && tabela[0]==tabela[3] && tabela[3]==tabela[6]){//coluna1
        console.log("Jogador 1 venceu!!!")
        empate = 1
        mostra_vencedor()
    }
    if(tabela[1]=="X" && tabela[1]==tabela[4] && tabela[4]==tabela[7]){//coluna2
        console.log("Jogador 1 venceu!!!")
        empate = 1
        mostra_vencedor()
    }
    if(tabela[2]=="X" && tabela[2]==tabela[5] && tabela[5]==tabela[8]){//coluna3
        console.log("Jogador 1 venceu!!!")
        empate = 2
        mostra_vencedor()
    }
    //SEGUNDO JOGADOR
    if(tabela[0]=="O" && tabela[0]==tabela[1] && tabela[1]==tabela[2]){//linha1
        console.log("O jogador 2 venceu!!!")
        empate = 2
        mostra_vencedor()
    }
    if(tabela[0]=="O" && tabela[0]==tabela[4] && tabela[4]==tabela[8]){//diagonal1
        console.log("O jogador 2 venceu!!!")
        empate = 2
        mostra_vencedor()
    }
    if(tabela[3]=="O" && tabela[3]==tabela[4] && tabela[4]==tabela[5]){//linha2
        console.log("O jogador 2 venceu!!!")
        empate = 2
        mostra_vencedor()
    }
    if(tabela[6]=="O" && tabela[6]==tabela[7] && tabela[7]==tabela[8]){//linha3
        console.log("O jogador 2 venceu!!!")
        empate = 2
        mostra_vencedor()
    }
    if(tabela[2]=="O" && tabela[2]==tabela[4] && tabela[4]==tabela[6]){//diagonal2
        console.log("O jogador 2 venceu!!!")
        empate = 2
        mostra_vencedor()
    }
    if(tabela[0]=="O" && tabela[0]==tabela[3] && tabela[3]==tabela[6]){//coluna1
        console.log("O jogador 2 venceu!!!")
        empate = 2
        mostra_vencedor()
    }
    if(tabela[1]=="O" && tabela[1]==tabela[4] && tabela[4]==tabela[7]){//coluna2
        console.log("O jogador 2 venceu!!!")
        empate = 2
        mostra_vencedor()
    }
    if(tabela[2]=="O" && tabela[2]==tabela[5] && tabela[5]==tabela[8]){//coluna3
        console.log("O jogador 2 venceu!!!")
        empate = 2
        mostra_vencedor()
    }
    if(empate==0 && i==11 ){
        console.log("Deu Empate")
    }
  if(empate==1 || empate==2){
         console.log("Fim de jogo")
    }
}