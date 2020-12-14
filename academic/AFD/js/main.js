

function chamar() {
    entrada = document.getElementById('entrada').value;

}
var automato = [];
var initialState = "";
var posicaoInicial = "";
var LINES = "";
var sequenceTransicao = "";
var finalsStates = [];
var aux_posicao = "";

function iniciar() {
    var AUX_LINHAS = prompt("Quantos estados possui seu automato?");
    var AUX_COLUNAS = prompt("Quantos elementos possui o alfabeto deste autômato?")

    var linhas = parseInt(AUX_LINHAS) + 1;
    var colunas = parseInt(AUX_COLUNAS) + 1;
    LINES = linhas;

    for (var l = 0; l < linhas; l++) {
        automato[l] = [];
        for (var c = 0; c < colunas; c++) {
            automato[l][c] = '';
        }
    }
    // mostrar(linhas, colunas);

    alfabeto(linhas, colunas);

}

function alfabeto(linhas, colunas) {

    automato[0][0] = '-'
    for (var alfabeto = 1; alfabeto < colunas; alfabeto++) {
        automato[0][alfabeto] = prompt('digite o ' + alfabeto + 'º alfabeto!')
    }
    estados(linhas, colunas)
    // mostrar(linhas,colunas);
}

function estados(linhas, colunas) {
    var stateInitial = 1;
    for (var state = 1; state < linhas; state++) {
        automato[state][0] = prompt("informe o " + state + " Estado!");
    }
    initialState = prompt("Informe o estado inicial!");
    for (var state = 1; state < linhas; state++) {
        if (automato[state][0] == initialState) {
            posicaoInicial = state;
            break;
        } else {
            continue;
        }

    }
    finalsStates[0] = prompt("informe 1 estado final!");

    var name = confirm("Pressione OK para inserir outro estado Final ou CANCELAR para informar as transições")
    var aux = 1;
    while (name == true) {


        var name = confirm("Pressione OK para inserir outro estado Final ou CANCELAR para informar as transições")
        if (name == true) {

            finalsStates[aux] = prompt("informe 1 estado final!");
            aux++;
        }
    }

    transicoes(linhas, colunas);








}

function transicoes(linhas, colunas) {
    for (var state = 1; state < linhas; state++) {
        for (var alfa = 1; alfa < colunas; alfa++) {
            automato[state][alfa] = prompt("Informe a transição de " + automato[state][0] + " com alfabeto " + automato[0][alfa]);
        }
    }
    mostrar(linhas, colunas);
    // alert(automato[2][1]);
}



function mostrar(linhas, colunas) {
    valores2 = '';
    for (var L = 0; L < linhas; L++) {
        for (var C = 0; C < colunas; C++) {
            if (C < colunas - 1) {
                valores2 += automato[L][C] + "\t\t";
            }
            else {
                valores2 += automato[L][C] + "<br>";
            }
        }
    }
    document.getElementById('Matriz').innerHTML =  valores2;
    document.getElementById('matrizNome').style.visibility = 'Visible';
}

function palavra() {
    document.getElementById('rejeita').style.visibility = 'hidden';
    document.getElementById('aceita').style.visibility = 'hidden';
    
    
    aux_palavra = document.getElementById('palavra').value;
    var aux_automato = automato[0];
    var count = aux_palavra.length;
    aux_posicao = posicaoInicial;
    var contatenacao = '';
    for (var i = 0; i < count; i++) {
        var initial = aux_posicao;
        var aux_alfa = aux_automato.indexOf(aux_palavra[i]);

        var next_state = automato[initial][aux_alfa];
        contatenacao += next_state;
        verificacaoNextState(next_state);



    }
    sequenceTransicao = contatenacao;
    if (i == count) {
        ultimostate = next_state;
        var aux_Finais =  finalsStates.length;
        for(var i = 0; i<aux_Finais; i++){
            if(ultimostate == finalsStates[i]){
                document.getElementById('aceita').style.visibility = 'Visible';
                
            }else{
                document.getElementById('rejeita').style.visibility = 'Visible';

            }
        }
    }
    document.getElementById('palavra').value='';
 

    
    document.getElementById('Sequencia').innerHTML =  sequenceTransicao;
    document.getElementById('SequenciaNome').style.visibility = 'Visible';
    
    document.getElementById('palavr').innerHTML =  aux_palavra;
    document.getElementById('PalavraNome').style.visibility = 'Visible';


}

function verificacaoNextState(ActualState) {
    var aux_automato = automato;
    for (var state = 1; state < LINES; state++) {
        if (automato[state][0] == ActualState) {
            aux_posicao = state;
            break;
        } else {
            continue;
        }

    }

}




