var empate=0,remover;
var i=2,j,player;
var tabela = [
    "","","",
    "","","",
    "","",""];
escolhas=["0","1","2","3","4","5","6","7","8"]
var jogadores = ["",""]
var vencedor;

function remove(numero){
    var escolhas1=[]
    numero=numero
    for(j=0;j<escolhas.length;j++){
        if(escolhas[j]==numero){
            delete escolhas[j]
        }
    }
    for(j=0;j<escolhas.length;j++){
        if(escolhas[j]!= undefined){
            escolhas1.push(escolhas[j])
        }
    }
    console.log("escolhas1:"+escolhas1)
    return escolhas1
}

function preenche(numero) { 
    if(player==1){
        jogador1(numero)
    }
    else{
        jogador2(numero)
    }
    
}

function jogador2(numero){
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
}

function jogador1(numero){
    console.log("i começa com"+i)
    if(tabela[numero]=="" && empate==0 && i<11){
        if(i%2==0){
            document.getElementById(numero).src="img/x.png";
            tabela[numero]="X";
            escolhas=remove(numero)
            console.log("marquei : "+numero)
            console.log("escolhas:"+escolhas)
            
        }
        
        console.log("i no final vale :"+i);
        i=i+1 
        console.log("depois do incremento") 
        pc_joga() 
        console.log("chamou o bot")
        i=i+1
        console.log("incrementei dnv")
        
    
    }
    console.log("tabela :"+tabela)
    console.log("---------------------------------")
}

function pc_joga(){
    if(i%2!=0){
        if((tabela[4]) == ""){
            num='4'
            document.getElementById(num).src="img/o.png";
            tabela[4]="O";
            escolhas=remove(num)
            console.log("tirou 4"+escolhas)
            }
        
        else if (tabela[0]== "O" && tabela[0]==tabela[1] && (tabela[2]) ==""){  // linha1 xx_
            if ((tabela[2]) ==""){
                num = '2'
                document.getElementById(num).src="img/o.png";
                tabela[2]="O";
                escolhas=remove(num)
                console.log("tirou 2"+escolhas)
            }
        }
        else if (tabela[0]== "O" && tabela[0]==tabela[2] && (tabela[1]) ==""){  // linha 1 x_x
            if ((tabela[1]) ==""){
                num = '1'
                document.getElementById(num).src="img/o.png";
                tabela[1]="O";
                escolhas=remove(num)
                console.log("tirou 1"+escolhas)
            }
        }
        else if (tabela[2]== "O" && tabela[2]==tabela[0] && (tabela[1]) ==""){  // linha 1 x_x
            if ((tabela[1]) ==""){
                num='1'
                document.getElementById(num).src="img/o.png";
                tabela[1]="O";
                escolhas=remove(num)
                console.log("tirou 1"+escolhas)
            }
        }
        else if (tabela[2]== "O" && tabela[2]==tabela[1] && (tabela[0]) ==""){  // linha 1 _xx
            if ((tabela[0]) ==""){
                num='0'
                document.getElementById(num).src="img/o.png";
                tabela[0]="O";
                escolhas=remove(num)
                console.log("tirou 0 "+escolhas)
        //diagonal
            }
        }
        else if (tabela[0]== "O" && tabela[0]==tabela[8] && (tabela[4]) ==""){  // linha 1 x_x
            if ((tabela[4]) ==""){
                num='4'
                document.getElementById(num).src="img/o.png";
                tabela[4]="O";
                escolhas=remove(num)
                console.log("tirou 4 "+escolhas)
            }
        }
        else if (tabela[8]== "O" && tabela[8]==tabela[0] && (tabela[4]) ==""){  // linha 1 x_x
            if ((tabela[4]) ==""){
                num='4'
                document.getElementById(num).src="img/o.png";
                tabela[4]="O";
                escolhas=remove(num)
                console.log("tirou 4"+escolhas)
            }
        }
        else if (tabela[0]== "O" && tabela[0]==tabela[4] && (tabela[8]) ==""){  // linha 1 xx_
            if ((tabela[8]) ==""){
                num='8'
                document.getElementById(num).src="img/o.png";
                tabela[8]="O";
                escolhas=remove(num)
                console.log("tirou 8 "+escolhas)
            }
        }
        else if (tabela[8]== "O" && tabela[8]==tabela[4] && (tabela[0]) ==""){  // linha 1 _xx
            if ((tabela[0]) ==""){
                num='0'
                document.getElementById(num).src="img/o.png";
                tabela[0]="O";
                escolhas=remove(num)
                console.log("tirou 0 "+escolhas)
            }
        }
        else if (tabela[2]== "O" && tabela[2]==tabela[6] && (tabela[4]) ==""){  // linha 1 x_x
            if ((tabela[4]) ==""){
                num='4'
                document.getElementById(num).src="img/o.png";
                tabela[4]="O";
                escolhas=remove(num)
                console.log("tirou 4 "+escolhas)
            }
        }
        else if (tabela[6]== "O" && tabela[6]==tabela[2] && (tabela[4]) ==""){  // linha 1 x_x
            if ((tabela[4]) ==""){
                num='4'
                document.getElementById(num).src="img/o.png";
                tabela[4]="O";
                escolhas=remove(num)
                console.log("tirou 4 "+escolhas)
            }
        }
        else if (tabela[2]== "O" && tabela[2]==tabela[4] && (tabela[6]) ==""){  // linha 1 xx_
            if ((tabela[6]) ==""){
                num='6'
                document.getElementById(num).src="img/o.png";
                tabela[6]="O";
                escolhas=remove(num)
                console.log("tirou 6 "+escolhas)
            }
        }
        else if (tabela[6]== "O" && tabela[6]==tabela[4] && (tabela[2]) ==""){  // linha 1 _xx
            if ((tabela[2]) ==""){
                num='2'
                document.getElementById(num).src="img/o.png";
                tabela[2]="O";
                escolhas=remove(num)
                console.log("tirou 2 "+escolhas)
            }
        }
        else if (tabela[3]== "O" && tabela[3]==tabela[4] && (tabela[5]) ==""){  // linha2 xx_
            if ((tabela[5]) ==""){
                num='5'
                document.getElementById(num).src="img/o.png";
                tabela[5]="O";
                escolhas=remove(num)
                console.log("tirou 5 "+escolhas)          }
        }
        else if (tabela[3]== "O" && tabela[3]==tabela[5] && (tabela[4]) ==""){  // linha2 x_x
            if ((tabela[4]) ==""){
                num='4'
                document.getElementById(num).src="img/o.png";
                tabela[4]="O";
                escolhas=remove(num)
                console.log("tirou 4 "+escolhas)     }
        }
        else if (tabela[5]== "O" && tabela[5]==tabela[3] && (tabela[4]) ==""){  // linha 2 x_x
            if ((tabela[4]) ==""){
                num='4'
                document.getElementById(num).src="img/o.png";
                tabela[4]="O";
                escolhas=remove(num)
                console.log("tirou 4 "+escolhas)           }
        }
        else if (tabela[5]== "O" && tabela[5]==tabela[4] && (tabela[3]) ==""){  // linha 2 _xx
            if ((tabela[3]) ==""){
                num='3'
                document.getElementById(num).src="img/o.png";
                tabela[3]="O";
                escolhas=remove(num)
                console.log("tirou 3 "+escolhas)      }
        }
        else if (tabela[6]== "O" && tabela[6]==tabela[7] && (tabela[8]) ==""){  // linha 3 xx_
            if ((tabela[8]) ==""){
                num='8'
                document.getElementById(num).src="img/o.png";
                tabela[8]="O";
                escolhas=remove(num)
                console.log("tirou 8 "+escolhas)           }
        }
        else if (tabela[6]== "O" && tabela[6]==tabela[8] && (tabela[7]) ==""){  // linha 3 x_x
            if ((tabela[7]) ==""){
                num='7'
                document.getElementById(num).src="img/o.png";
                tabela[7]="O";
                escolhas=remove(num)
                console.log("tirou 7 "+escolhas)           }
        }
        else if (tabela[8]== "O" && tabela[8]==tabela[6] && (tabela[7]) ==""){  // linha 3 x_x
            if ((tabela[7]) ==""){
                num='7'
                document.getElementById(num).src="img/o.png";
                tabela[7]="O";
                escolhas=remove(num)
                console.log("tirou 7 "+escolhas)      }
        }
        else if (tabela[8]== "O" && tabela[8]==tabela[7] && (tabela[6]) ==""){  // linha 3 _xx
            if ((tabela[6]) ==""){
                num='6'
                document.getElementById(num).src="img/o.png";
                tabela[6]="O";
                escolhas=remove(num)
                console.log("tirou 6 "+escolhas)           }
        }
        else if (tabela[0]== "O" && tabela[0]==tabela[3] && (tabela[6]) ==""){  // coluna1 xx_
            if ((tabela[6]) ==""){
                num='6'
                document.getElementById(num).src="img/o.png";
                tabela[6]="O";
                escolhas=remove(num)
                console.log("tirou 6 "+escolhas)           }
        }
        else if (tabela[0]== "O" && tabela[0]==tabela[6] && (tabela[3]) ==""){  // colunaa 1 x_x
            if ((tabela[3]) ==""){
                num='3'
                document.getElementById(num).src="img/o.png";
                tabela[3]="O";
                escolhas=remove(num)
                console.log("tirou 3 "+escolhas)         }
        }
        else if (tabela[6]== "O" && tabela[6]==tabela[8] && (tabela[3]) ==""){  // colunaa 1 x_x
            if ((tabela[3]) ==""){
                num='3'
                document.getElementById(num).src="img/o.png";
                tabela[3]="O";
                escolhas=remove(num)
                console.log("tirou 3 "+escolhas)          }
        }
        else if (tabela[6]== "O" && tabela[6]==tabela[3] && (tabela[0]) ==""){  // coluna 1 _xx
            if ((tabela[0]) ==""){
                num='0'
                document.getElementById(num).src="img/o.png";
                tabela[0]="O";
                escolhas=remove(num)
                console.log("tirou 0"+escolhas)           }
        }
        else if (tabela[1]== "O" && tabela[1]==tabela[4] && (tabela[7]) ==""){  // coluna2 xx_
            if ((tabela[7]) ==""){
                num='7'
                document.getElementById(num).src="img/o.png";
                tabela[7]="O";
                escolhas=remove(num)
                console.log("tirou 7 "+escolhas)           }
        }
        else if (tabela[1]== "O" && tabela[1]==tabela[7] && (tabela[4]) ==""){  // colunaa 2 x_x
            if ((tabela[4]) ==""){
                num='4'
                document.getElementById(num).src="img/o.png";
                tabela[4]="O";
                escolhas=remove(num)
                console.log("tirou 4 "+escolhas)           }
        }
        else if (tabela[7]== "O" && tabela[7]==tabela[1] && (tabela[4]) ==""){  // colunaa 2 x_x
            if ((tabela[4]) ==""){
                num='4'
                document.getElementById(num).src="img/o.png";
                tabela[4]="O";
                escolhas=remove(num)
                console.log("tirou 4 "+escolhas)         }
        }
        else if (tabela[7]== "O" && tabela[7]==tabela[4] && (tabela[1]) ==""){  // coluna 2 _xx
            if ((tabela[1]) ==""){
                num='1'
                document.getElementById(num).src="img/o.png";
                tabela[1]="O";
                escolhas=remove(num)
                console.log("tirou 1 "+escolhas)        }
        }
        else if (tabela[2]== "O" && tabela[2]==tabela[5] && (tabela[8]) ==""){  // coluna3 xx_
            if ((tabela[8]) ==""){
                num='8'
                document.getElementById(num).src="img/o.png";
                tabela[8]="O";
                escolhas=remove(num)
                console.log("tirou 8 "+escolhas)         }
        }
        else if (tabela[2]== "O" && tabela[2]==tabela[8] && (tabela[5]) ==""){  // colunaa 3 x_x
            if ((tabela[5]) ==""){
                num='5'
                document.getElementById(num).src="img/o.png";
                tabela[5]="O";
                escolhas=remove(num)
                console.log("tirou 5"+escolhas)          }
        }
        else if (tabela[8]== "O" && tabela[8]==tabela[2] && (tabela[5]) ==""){  // colunaa 3 x_x
            if ((tabela[5]) ==""){
                num='5'
                document.getElementById(num).src="img/o.png";
                tabela[5]="O";
                escolhas=remove(num)
                console.log("tirou 5 "+escolhas)           }
        }
        else if (tabela[8]== "O" && tabela[8]==tabela[5] && (tabela[2]) ==""){  // coluna 3 _xx
            if ((tabela[2]) ==""){
                num='2'
                document.getElementById(num).src="img/o.png";
                tabela[2]="O";
                escolhas=remove(num)
                console.log("tirou 2"+escolhas)
                       //defender
            }
        }
        else if (tabela[0]== "X" && tabela[0]==tabela[1] && (tabela[2]) ==""){  // linha1 xx_
            if ((tabela[2]) ==""){
                num = '2'
                document.getElementById(num).src="img/o.png";
                tabela[2]="O";
                escolhas=remove(num)
                console.log("tirou 2 "+escolhas)


            }
        }
        else if (tabela[0]== "X" && tabela[0]==tabela[2] && (tabela[1]) ==""){  // linha 1 x_x
            if ((tabela[1]) ==""){
                num = '1'
                document.getElementById(num).src="img/o.png";
                tabela[1]="O";
                escolhas=remove(num)
                console.log("tirou 1 "+escolhas)

            }
        }
        else if (tabela[2]== "X" && tabela[2]==tabela[0] && (tabela[1]) ==""){  // linha 1 x_x
            if ((tabela[1]) ==""){
                num = '1'
                document.getElementById(num).src="img/o.png";
                tabela[1]="O";
                escolhas=remove(num)
                console.log("tirou 1 "+escolhas) 

            }
        }
        else if (tabela[2]== "X" && tabela[2]==tabela[1] && (tabela[0]) ==""){  // linha 1 _xx
            if ((tabela[0]) ==""){
                num = '0'
                document.getElementById(num).src="img/o.png";
                tabela[0]="O";
                escolhas=remove(num)
                console.log("tirou 0 "+escolhas)
            }
        }
        else if (tabela[3]== "X" && tabela[3]==tabela[4] && (tabela[5]) ==""){  // linha2 xx_
            if ((tabela[5]) ==""){
                num='5'
                document.getElementById(num).src="img/o.png";
                tabela[5]="O";
                escolhas=remove(num)
                console.log("tirou 5 "+escolhas)                }
        }
        else if (tabela[3]== "X" && tabela[3]==tabela[5] && (tabela[4]) ==""){  // linha2 x_x
            if ((tabela[4]) ==""){
                num='4'
                document.getElementById(num).src="img/o.png";
                tabela[4]="O";
                escolhas=remove(num)
                console.log("tirou 4 "+escolhas)             }
        }
        else if (tabela[5]== "X" && tabela[5]==tabela[3] && (tabela[4]) ==""){  // linha 2 x_x
            if ((tabela[4]) ==""){
                num='4'
                document.getElementById(num).src="img/o.png";
                tabela[4]="O";
                escolhas=remove(num)
                console.log("tirou 4 "+escolhas)            }
        }
        else if (tabela[5]== "X" && tabela[5]==tabela[4] && (tabela[3]) ==""){  // linha 2 _xx
            if ((tabela[3]) ==""){
                num='3'
                document.getElementById(num).src="img/o.png";
                tabela[3]="O";
                escolhas=remove(num)
                console.log("tirou 3 "+escolhas)                }
        }
        else if (tabela[6]== "X" && tabela[6]==tabela[7] && (tabela[8]) ==""){  // linha 3 xx_
            if ((tabela[8]) ==""){
                num='8'
                document.getElementById(num).src="img/o.png";
                tabela[8]="O";
                escolhas=remove(num)
                console.log("tirou 8 "+escolhas)           }
        }
        else if (tabela[6]== "X" && tabela[6]==tabela[8] && (tabela[7]) ==""){  // linha 3 x_x
            if ((tabela[7]) ==""){
                num='7'
                document.getElementById(num).src="img/o.png";
                tabela[7]="O";
                escolhas=remove(num)
                console.log("tirou 7 "+escolhas)           }
        }
        else if (tabela[8]== "X" && tabela[8]==tabela[6] && (tabela[7]) ==""){  // linha 3 x_x
            if ((tabela[7]) ==""){
                num='7'
                document.getElementById(num).src="img/o.png";
                tabela[7]="O";
                escolhas=remove(num)
                console.log("tirou 7 "+escolhas)         }
        }
        else if (tabela[8]== "X" && tabela[8]==tabela[7] && (tabela[6]) ==""){  // linha 3 _xx
            if ((tabela[6]) ==""){
                num='6'
                document.getElementById(num).src="img/o.png";
                tabela[6]="O";
                escolhas=remove(num)
                console.log("tirou 6 "+escolhas)           }
        }
        else if (tabela[0]== "X" && tabela[0]==tabela[3] && (tabela[6]) ==""){  // coluna1 xx_
            if ((tabela[6]) ==""){
                num='6'
                document.getElementById(num).src="img/o.png";
                tabela[6]="O";
                escolhas=remove(num)
                console.log("tirou 6 "+escolhas)           }
        }
        else if (tabela[0]== "X" && tabela[0]==tabela[6] && (tabela[3]) ==""){  // colunaa 1 x_x
            if ((tabela[3]) ==""){
                num='3'
                document.getElementById(num).src="img/o.png";
                tabela[3]="O";
                escolhas=remove(num)
                console.log("tirou 3 "+escolhas)           }
        }
        else if (tabela[6]== "X" && tabela[6]==tabela[8] && (tabela[3]) ==""){  // colunaa 1 x_x
            if ((tabela[3]) ==""){
                num='3'
                document.getElementById(num).src="img/o.png";
                tabela[3]="O";
                escolhas=remove(num)
                console.log("tirou 3 "+escolhas)          }
        }
        else if (tabela[6]== "X" && tabela[6]==tabela[3] && (tabela[0]) ==""){  // coluna 1 _xx
            if ((tabela[0]) ==""){
                num='0'
                document.getElementById(num).src="img/o.png";
                tabela[0]="O";
                escolhas=remove(num)
                console.log("tirou 0 "+escolhas)         }
        }
        else if (tabela[1]== "X" && tabela[1]==tabela[4] && (tabela[7]) ==""){  // coluna2 xx_
            if ((tabela[7]) ==""){
                num='7'
                document.getElementById(num).src="img/o.png";
                tabela[7]="O";
                escolhas=remove(num)
                console.log("tirou 7 "+escolhas)           }
        }
        else if (tabela[1]== "X" && tabela[1]==tabela[7] && (tabela[4]) ==""){  // colunaa 2 x_x
            if ((tabela[4]) ==""){
                num='4'
                document.getElementById(num).src="img/o.png";
                tabela[4]="O";
                escolhas=remove(num)
                console.log("tirou 4 "+escolhas)           }
        }
        else if (tabela[7]== "X" && tabela[7]==tabela[1] && (tabela[4]) ==""){  // colunaa 2 x_x
            if ((tabela[4]) ==""){
                num='4'
                document.getElementById(num).src="img/o.png";
                tabela[4]="O";
                escolhas=remove(num)
                console.log("tirou 4 "+escolhas)           }
        }
        else if (tabela[7]== "X" && tabela[7]==tabela[4] && (tabela[1]) ==""){  // coluna 2 _xx
            if ((tabela[1]) ==""){
                num='1'
                document.getElementById(num).src="img/o.png";
                tabela[1]="O";
                escolhas=remove(num)
                console.log("tirou 1 "+escolhas)    
            }
        }
        else if (tabela[2]== "X" && tabela[2]==tabela[5] && (tabela[8]) ==""){  // coluna3 xx_
            if ((tabela[8]) ==""){
                num='8'
                document.getElementById(num).src="img/o.png";
                tabela[8]="O";
                escolhas=remove(num)
                console.log("tirou 8 "+escolhas)           }
        }
        else if (tabela[2]== "X" && tabela[2]==tabela[8] && (tabela[5]) ==""){  // colunaa 3 x_x
            if ((tabela[5]) ==""){
                num='5'
                document.getElementById(num).src="img/o.png";
                tabela[5]="O";
                escolhas=remove(num)
                console.log("tirou 5 "+escolhas)          }
        }
        else if (tabela[8]== "X" && tabela[8]==tabela[2] && (tabela[5]) ==""){  // colunaa 3 x_x
            if ((tabela[5]) ==""){
                num='5'
                document.getElementById(num).src="img/o.png";
                tabela[5]="O";
                escolhas=remove(num)
                console.log("tirou 5"+escolhas)          }
        }
        else if (tabela[8]== "X" && tabela[8]==tabela[5] && (tabela[2]) ==""){  // coluna 3 _xx
            if ((tabela[2]) ==""){
                num='2'
                document.getElementById(num).src="img/o.png";
                tabela[2]="O";
                escolhas=remove(num)
                console.log("tirou 2 "+escolhas)
                      //diagonal
            }
        }
        else if (tabela[0]== "X" && tabela[0]==tabela[8] && (tabela[4]) ==""){  // linha 1 x_x
            if ((tabela[4]) ==""){
                num='4'
                document.getElementById(num).src="img/o.png";
                tabela[4]="O";
                escolhas=remove(num)
                console.log("tirou 4 "+escolhas)
            }
        }
        else if (tabela[8]== "X" && tabela[8]==tabela[0] && (tabela[4]) ==""){  // linha 1 x_x
            if ((tabela[4]) ==""){
                num='4'
                document.getElementById(num).src="img/o.png";
                tabela[4]="O";
                escolhas=remove(num)
                console.log("tirou 4"+escolhas)
            }
        }
        else if (tabela[0]== "X" && tabela[0]==tabela[4] && (tabela[8]) ==""){  // linha 1 xx_
            if ((tabela[8]) ==""){
                num='8'
                document.getElementById(num).src="img/o.png";
                tabela[8]="O";
                escolhas=remove(num)
                console.log("tirou 8 "+escolhas)
            }
        }
        else if (tabela[8]== "X" && tabela[8]==tabela[4] && (tabela[0]) ==""){  // linha 1 _xx
            if ((tabela[0]) ==""){
                num='0'
                document.getElementById(num).src="img/o.png";
                tabela[0]="O";
                escolhas=remove(num)
                console.log("tirou 0 "+escolhas)
            }
        }
        else if (tabela[2]== "X" && tabela[2]==tabela[6] && (tabela[4]) ==""){  // linha 1 x_x
            if ((tabela[4]) ==""){
                num='4'
                document.getElementById(num).src="img/o.png";
                tabela[4]="O";
                escolhas=remove(num)
                console.log("tirou 4 "+escolhas)
            }
        }
        else if (tabela[6]== "X" && tabela[6]==tabela[2] && (tabela[4]) ==""){  // linha 1 x_x
            if ((tabela[4]) ==""){
                num='4'
                document.getElementById(num).src="img/o.png";
                tabela[4]="O";
                escolhas=remove(num)
                console.log("tirou 4 "+escolhas)
            } 
        } 
        else if (tabela[2]== "X" && tabela[2]==tabela[4] && (tabela[6] ) ==""){  // linha 1 xx_
            if ((tabela[6]) ==""){
                num='6'
                document.getElementById(num).src="img/o.png";
                tabela[6]="O";
                escolhas=remove(num)
                console.log("tirou 6 "+escolhas)
            }
        }
        else if (tabela[6]== "X" && tabela[6]==tabela[4] && (tabela[2]) ==""){  // linha 1 _xx
            if ((tabela[2]) ==""){
                num='2'
                document.getElementById(num).src="img/o.png";
                tabela[2]="O";
                escolhas=remove(num)
                console.log("tirou 2 "+escolhas)
            }
        }
        else{
             num = escolhas[Math.floor(Math.random() * escolhas.length)];
             console.log("sorteou :"+num)
            if(num=="0"){
                tabela[0]="O";
                escolhas=remove(num)
                document.getElementById(num).src="img/o.png";
                console.log("tirou 0"+escolhas)
            }
            else if(num=="1"){
                tabela[1]="O";
                escolhas=remove(num)
                document.getElementById(num).src="img/o.png";
                console.log("tirou 1"+escolhas)
            }
            else if(num=="2"){
                tabela[2]="O";
                escolhas=remove(num)
                document.getElementById(num).src="img/o.png";
                console.log("tirou 2"+escolhas)
            }
            else if(num=="3"){
                tabela[3]="O";
                escolhas=remove(num)
                document.getElementById(num).src="img/o.png";
                console.log("tirou 3"+escolhas)
            }
            else if(num=="5"){
                tabela[5]="O";
                escolhas=remove(num)
                document.getElementById(num).src="img/o.png";
                console.log("tirou 5"+escolhas)
            }
            else if(num=="6"){
                tabela[6]="O";
                escolhas=remove(num)
                document.getElementById(num).src="img/o.png";
                console.log("tirou 6"+escolhas)
            }
            else if(num=="7"){
                tabela[7]="O";
                escolhas=remove(num)
                document.getElementById(num).src="img/o.png";
                console.log("tirou 7"+escolhas)
            }
            else if(num=="8"){
                tabela[8]="O";
                escolhas=remove(num)
                document.getElementById(num).src="img/o.png";
                console.log("tirou 8"+escolhas)
            }
         
            }    
    
         
        }
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
function pede_nome1() {
    jogadores[0]= (document.getElementById("nome").value) ;
    jogadores[1] = "computador";
    var inserenome2 = document.getElementById("inserenome2")
    inserenome2.style.display = "none"
    var inserenome2 = document.getElementById("inserenome1")
    inserenome1.style.display = "none"

    var meuForm = document.forms['formNomes']
    var nome1 = document.getElementById("nome1").value

    document.querySelector('#fundo').style.filter= "blur(0px)";

    return false;
}

function botao_menu1() {
player = 1
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

    player = 2
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
        document.querySelector('#printarvencedor').innerHTML= vencedor+" venceu o jogo";
    }
    if(empate==2){
        vencedor=jogadores[1];
        document.querySelector('#printarvencedor').innerHTML= vencedor+" venceu o jogo";
    }
    if(i>10){
        document.querySelector('#printarvencedor').innerHTML= "Deu empate o jogo";
    }
    //alert(vencedor+" venceu o jogo")
    
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
    if(empate==0 && i>10 ){
        console.log("Deu Empate")
        mostra_vencedor()
    }
  if(empate==1 || empate==2){
         console.log("Fim de jogo")
    }
}