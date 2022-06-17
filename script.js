// O objetivo desse projeto é fazer o script de calculadora mais simples possivel

const resultado = document.getElementById("display"); // pega o valor que tá exibindo na tela


function botao(valor) { // gerencia todos os botões (exceto "=", "del" e "C")
    //resultado.value = resultado.value + valor; (mesma coisa que abaixo)
    resultado.value += valor;
}

function calcular() { // gerencia botão "="
    try {
        if (resultado.value == "") {
            alert("Insira uma operação válida"); 
        } else{
            resultado.value = eval(resultado.value);
        }
    }
    catch (err) { //quando inserido uma operção inválida exibe essa mensagem
        alert("Insira uma operação válida");
        resultado.value = ""
    }
    
}

function limpar() { //gerencia botão "C"
    resultado.value = "";
}

function deletar() { //gerencia botão "del"
    resultado.value = resultado.value.slice(0, -1); //.slice(0,-1) remove só o ultimo elemento
}