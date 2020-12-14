var entrada = ''; 
var cont; 
var palavra = [];
var sentenca;
var cont;

function chamar(){
    entrada = document.getElementById('entrada').value;
        
}
var automato = [];
    
function iniciar(){
    var AUX_LINHAS = prompt("Quantos estados possui seu automato?");
    var AUX_COLUNAS = prompt("Quantos elementos possui o alfabeto deste autômato?")

    var linhas = parseInt(AUX_LINHAS)+1;
    var colunas = parseInt(AUX_COLUNAS)+1;

    for(var l=0; l<linhas; l++){
        automato[l] = [];
        for(var c=0; c<colunas; c++){
            automato[l][c] = '';
        }
    }
    // mostrar(linhas, colunas);
    
    alfabeto(linhas, colunas);

}

function alfabeto(linhas, colunas){
    for(var alfabeto = 1; alfabeto < colunas; alfabeto++){
        automato[0][alfabeto] = prompt('digite o '+alfabeto+'º alfabeto!')
    }   
    estados(linhas, colunas) 
    // mostrar(linhas,colunas);
}

function estados(linhas, colunas){
    var stateInitial = 1;
    for(var state = 1; state<linhas; state++){
        automato[state][0] = prompt("informe o "+state+" Estado!" );    
    }
    transicoes(linhas, colunas);


}

function transicoes(linhas, colunas){
    for(var state = 1; state<linhas; state++){
        for(var alfa = 1; alfa<colunas; alfa++){
            automato[state][alfa] = prompt("Informe a transição de "+automato[state][0]+" com alfabeto "+automato[0][alfa]);
        }  
    }
    mostrar(linhas, colunas);
    // alert(automato[2][1]);
}



function mostrar(linhas, colunas){
    valores2 = '';
    for(var L = 0; L<linhas; L++ ){
        for(var C=0; C <colunas; C++){
            if(C < colunas - 1 ){
                valores2 += automato[L][C] + "\t\t";
            }
            else{
                valores2 += automato[L][C] + "\n";
            } 
        }
    }
    alert(valores2);
}




function exibe(){
 var matriz = [ [1,2,3],
                       [4,5,6],
                       [7,8,9] ];

    for(let lin=0 ; lin<3 ; lin++){
     for(let col=0; col<3 ; col++)
      document.write(matriz[lin][col] + "  ");
     

     document.write("<br />");
    }

}

