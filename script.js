const opcoes={
    1: {nome:'Pedra', img:'imagens/pedra.png', pedra: 'EMPATE', papel: 'DERROTA', tesoura: 'VITÓRIA'},
    2: {nome:'Papel', img:'imagens/papel.png', pedra: 'VITÓRIA', papel: 'EMPATE', tesoura: 'DERROTA'},
    3: {nome:'Tesoura', img:'imagens/tesoura.png', pedra: 'DERROTA', papel: 'VITÓRIA', tesoura: 'EMPATE'}
}

function jogar(escolha){
    let escolhaComputador = Math.floor(Math.random() * 3) + 1;
    let resultado = opcoes[escolha].nome + ' vs ' + opcoes[escolhaComputador].nome + ': ';
    resultado += opcoes[escolha][opcoes[escolhaComputador].nome.toLowerCase()];
    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('imagem-jogador').src = opcoes[escolha].img;
    document.getElementById('imagem-computador').src = opcoes[escolhaComputador].img;
}


