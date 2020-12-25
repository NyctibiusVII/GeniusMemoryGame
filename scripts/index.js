let order = [];
let clickedOrder = [];
let score = 0;

/*
0 = Red
1 = Green
2 = Yellow
3 = Blue
*/

const red    = document.querySelector('.red');
const green  = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const blue   = document.querySelector('.blue');

// Cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}



// Acende a proxima cor (pisca)
let lightColor = (element, number) => {
    number *= 500;
    setTimeout(() => {
        element.classList.add('selected');
        setTimeout(() => {
            element.classList.remove('selected');
        }, 300);
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}


// Checa se os botões clicados são os mesmos gerados
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando proximo nível!`);
        nextLevel();
    }
}



// Clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}



// Retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return red;
    }else if (color == 1){
        return green;
    }else if (color == 2){
        return yellow;
    }else if (color == 3){
        return blue;
    }else{
        return alert('OpA! Tem algo errado por ai...\n\nInvalid color!');
    }
}



// Proximo nível
let nextLevel = () => {
    score++;
    shuffleOrder();
}



// Perdeu
let gameOver = () => {
    alert(`Pontuação: ${score}\nNão foi dessa vez ≧ ﹏ ≦\n\nClique em OK para iniciar um novo jogo!`);
    order = [];
    clickedOrder = [];

    playGame();
}



// Iniciar o jogo
let playGame = () => {
    alert(`Bem vindo ao Genesis!\nIniciando um novo jogo!`);
    score = 0;

    nextLevel();
}



// Clique para as cores
red   .onclick = () => click(0);
green .onclick = () => click(1);
yellow.onclick = () => click(2);
blue  .onclick = () => click(3);

playGame();