// Requisito 1 - criei o header e dentro o h1 com id title e textogetColor de Cores.
const elementHeader = document.createElement('header');
document.body.appendChild(elementHeader);

const elementH1 = document.createElement('h1');
elementH1.id = 'title';
elementH1.innerText = 'Paleta de Cores';
elementHeader.appendChild(elementH1);

// Requisito 2 - criei a seção com id color-palette dentro do body.
const elementSection = document.createElement('section');
elementSection.id = 'color-palette';
document.body.appendChild(elementSection);

// // criei as 4 divs para irem dentro da seção e coloquei a classe color em cada uma.
for (let index = 1; index <= 4; index += 1) {
    const elementDiv = document.createElement('div');
    elementDiv.className = 'color';
    elementSection.appendChild(elementDiv);
}
// Coloquei cores nas divs com o id color.

const divColor1 = document.getElementsByClassName('color')[0].style.backgroundColor = "black";
const divColor2 = document.getElementsByClassName('color')[1].style.backgroundColor = "blue";
const divColor3 = document.getElementsByClassName('color')[2].style.backgroundColor = "red";
const divColor4 = document.getElementsByClassName('color')[3].style.backgroundColor = "yellow";


// Requisito 3, verifica se a cor da getColor é preta e se as demais cores podem ser escolhidas livremente, já estão no requisito acima.

// Requisito 4 - Criei 5 seções com o id getPixel-board e dentro criei 5 divs com a classe getPixel.
const elementSection2 = document.createElement('section');
elementSection2.id = 'pixel-board';
document.body.appendChild(elementSection2);

for (let index1 = 1; index1 <= 5; index1 += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    elementSection2.appendChild(line);

    for (let index2 = 1; index2 <= 5; index2 += 1) {
        const column = document.createElement('div');
        column.className = 'pixel';
        line.appendChild(column);
    }
}
// Requisito 5 está no arquivo style.

// Requisito 6 - adicionei a classe selected na primeira posição da div id color
const addClassSelected = document.getElementsByClassName('color')[0];
addClassSelected.classList.add('selected');

// // Requisito 7- Adicionei o addEventListener nas classes color e criei a função que vai inserir e remover a classe selected das cores
let getClassColor = document.querySelectorAll('.color');
let getClassPixel = document.querySelectorAll('.pixel');
let getSelectedColor = getClassColor[0].style.backgroundColor;


for (let index = 0; index < getClassColor.length; index += 1) {
    getClassColor[index].addEventListener('click', function () {
        getSelectedColor = getClassColor[index].style.backgroundColor;
        document.querySelector('.color.selected').classList.remove('selected');
        getClassColor[index].classList.add('selected');
    })

}
// // Requisto 8 - Adicionei o addEventListener nas classes pixel
const getPixelBoard = document.getElementById('pixel-board');

getPixelBoard.addEventListener('click', (event) => {
    if (event.target.classList == 'pixel') {
      const selected = document.querySelector('.selected');
      const selectedColor = getComputedStyle(selected).backgroundColor;
      event.target.style.backgroundColor = selectedColor;
    }
  });

// Requisito 9
// Criei o botao limpar
const elementButton = document.createElement('button');
elementButton.id = 'clear-board';
elementButton.innerText = 'Limpar';
document.body.appendChild(elementButton);

// Posicionei o botão entre a paleta de cores e o pixel board
const target = document.querySelector('#pixel-board');
target.parentNode.insertBefore(elementButton, target);

// Criei a função que vai adicionar o click e apagar o pixel board.
let buttonClearBoard = document.querySelector('#clear-board');

buttonClearBoard.addEventListener('click', function (event) {
    const getClassPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < getClassPixel.length; index += 1) {
        getClassPixel[index].style.backgroundColor = 'white';
    }
});

// // Requisito 10 e 11
const target2 = document.querySelector('#position');
target.parentNode.insertBefore(position, target);

// const getPixelBoard = document.getElementById('pixel-board');
const getBoardSize = document.querySelector('#board-size');
const getGenerateBoard = document.querySelector('#generate-board');

function removeBoard() {

    const getPixelBoard = document.getElementById('pixel-board');
    for (let index = getPixelBoard.childNodes.length - 1; index >= 0; index -= 1) {
        const currentChildren = getPixelBoard.childNodes[index];
        currentChildren.remove();
    }
}

getGenerateBoard.addEventListener('click', function () {
    if (getBoardSize.value !== '') {
        removeBoard();
        let boardSize;
        if (getBoardSize.value < 5) {
            boardSize = 5;
        } else if (getBoardSize.value > 50) {
            boardSize = 50;
        } else {
            boardSize = getBoardSize.value;
        }
        for (let index = 0; index < boardSize; index += 1) {
            let line = document.createElement('div');
            line.id = "line";
            getPixelBoard.appendChild(line);
            for (let index2 = 0; index2 < boardSize; index2 += 1) {
                let column = document.createElement('div');
                column.className = 'pixel';
                line.appendChild(column);
            }
        }
    } else {
        alert('Board inválido!');
    }
});

// Requisito 12
function ColorPaletteGenerator() {
    for (let i = 1; i < getClassColor.length; i += 1) {
        const r = Math.random() * 256;
        const g = Math.random() * 256;
        const b = Math.random() * 256;
        getClassColor[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}
ColorPaletteGenerator();
