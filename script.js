const opcoes={
    1: {nome:'Pedra', img:'imagens/pedra.png', pedra: 'EMPATE', papel: 'DERROTA', tesoura: 'VITÓRIA'},
    2: {nome:'Papel', img:'imagens/papel.png', pedra: 'VITÓRIA', papel: 'EMPATE', tesoura: 'DERROTA'},
    3: {nome:'Tesoura', img:'imagens/tesoura.png', pedra: 'DERROTA', papel: 'VITÓRIA', tesoura: 'EMPATE'}
}

let escolhaJogador= {}
let escolhaComputador= {}

function escolherJogada(num){
    return opcoes[num]
}

let numComp = Math.floor(Math.random()*3)+1
escolhaComputador= opcoes[numComp]





