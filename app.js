function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value); 
    let ate = parseInt(document.getElementById('ate').value);
  
    if (de > ate) {
        alert("Erro: O valor do campo 'Do número' não pode ser maior que o valor do campo 'Até o número'. Por favor, revise seus dados.");
        return;
    }

    let intervaloDisponivel = ate - de + 1;
    if (quantidade > intervaloDisponivel) {
        alert("Erro: A quantidade de números a sortear é maior que o intervalo disponível entre 'Do número' e 'Até o número'. Por favor, ajuste a quantidade.");
        return; 
    }

    if (quantidade <= 0 || de < 0 || ate < 0) { 
        alert("Erro: Por favor, insira valores positivos e válidos para o sorteio.");
        return;
    }

    let sorteados = [];
    let numero;
  

    for (let i = 0; i < quantidade; i++) {
        numero = nmrAleatorio(de, ate);

        while (sorteados.includes(numero)) {    
            numero = nmrAleatorio(de, ate);
        }
            
        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    alterarStatusBotao(); 
}

function nmrAleatorio (min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML ='<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao();
}