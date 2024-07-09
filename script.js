
const opcoes={
    1: {nome:'pedra', img:'imagens/pedra.png', pedra: 'EMPATE', papel: 'DERROTA', tesoura: 'VITÓRIA'},
    2: {nome:'papel', img:'imagens/papel.png', pedra: 'VITÓRIA', papel: 'EMPATE', tesoura: 'DERROTA'},
    3: {nome:'tesoura', img:'imagens/tesoura.png', pedra: 'DERROTA', papel: 'VITÓRIA', tesoura: 'EMPATE'}
}
//selecao dos objetos do document
//imagem e texto da escolha jogador
let imgJogador = document.getElementById('imgUser')
let pJogador = document.getElementById('escolhaUsuario')

// imagem e texto da escolha do computador
let imgComputador = document.getElementById('imgComput')
let pComp = document.getElementById('escolhaComputador')

//resultado final
let resultadoFinal = document.getElementById('resultado')

//contagem dos pontos no document
let contagemPontosComputador = document.getElementById('pontosComputador')
let contagemPontosJogador = document.getElementById('pontosUsuario')

// BOTOES JOGADA USUARIo
let btnPedra = document.getElementsByTagName('button')[0]
let btnPapel = document.getElementsByTagName('button')[1]
let btnTesoura = document.getElementsByTagName('button')[2]

// variaveis globais para escolha do usuario e do computador
let escolhaJogador= {}
let escolhaComputador= {}
// variaveis globais para pontuacao dos jogadores
let pontosJogador = 0
let pontosComputador = 0


function escolherJogada(num){
    return opcoes[num]
}

function montarJogadas(numJogador){
    let numComp = Math.floor(Math.random()*3)+1
    escolhaJogador = escolherJogada(numJogador)
    escolhaComputador = escolherJogada(numComp)

}

function verificarVencedor(){
    if( escolhaJogador[escolhaComputador.nome] === 'VITÓRIA'){
        pontosJogador += 1
}
    else if (escolhaJogador[escolhaComputador.nome] === 'DERROTA'){
        pontosComputador += 1
    } 

}

function montarTela(){
    imgJogador.src = escolhaJogador.img
    imgComputador.src = escolhaComputador.img
    
    imgJogador.alt= escolhaJogador.nome
    imgComputador.alt= escolhaComputador.nome

    pJogador.innerHTML = `Você escolheu ${escolhaJogador.nome}`
    pComp.innerHTML = `O computador escolheu ${escolhaComputador.nome}`
    contagemPontosComputador.innerHTML = pontosComputador
    contagemPontosJogador.innerHTML = pontosJogador

    resultadoFinal.innerHTML = escolhaJogador[escolhaComputador.nome]

    //adicionar a classe para manipulação do style
    switch(escolhaJogador[escolhaComputador.nome]){
        case 'VITÓRIA':
            resultadoFinal.classList = 'vitoria'
           break
        case 'DERROTA':
            resultadoFinal.classList = 'derrota'
            break

        default:
            resultadoFinal.classList = 'empate'
            break
    }

}

function jogar(num){
    montarJogadas(num)
    verificarVencedor()
    montarTela()
}

// adição dos escutadores de eventos aos botoes com o evento click
btnPedra.addEventListener('click', () => jogar(1))
btnPapel.addEventListener('click', () => jogar(2))
btnTesoura.addEventListener('click', () => jogar(3))







