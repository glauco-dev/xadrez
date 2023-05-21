BOARD_STRUCT_NUMBERS = [1,2,3,4,5,6,7,8]
BOARD_STRUCT_LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const boardTransformStateGenerator = (rotateX, rotateZ) => `perspective(140vh) rotateX(${rotateX}) rotateZ(${rotateZ})`;

INITIAL_BOARD_TRANSFORM_ROTATEX = '30deg';
INITIAL_BOARD_TRANSFORM_ROTATEZ = '0deg';
INITIAL_BOARD_TRANSFORM_MATRIX_STRING = boardTransformStateGenerator(INITIAL_BOARD_TRANSFORM_ROTATEX, INITIAL_BOARD_TRANSFORM_ROTATEZ)
DRAG_ELEMENT = null;

window.addEventListener('load', () => {
    const board = document.querySelector('#game');
    board.style.transform  = INITIAL_BOARD_TRANSFORM_MATRIX_STRING;

    BOARD_STRUCT = BOARD_STRUCT_NUMBERS.map((number, index1) => 
        BOARD_STRUCT_LETTERS.map( (letter, index) =>
            addSquareTo(board, square(letter, number, (index+index1)%2!=0))
        )
    );

})

function transformBoard(board, rotateX, rotateZ){
    board.style.transform = boardTransformStateGenerator(rotateX, rotateZ);
}

function square(letter, number, white){
    let el = document.createElement('div');
    el.id = letter+number;
    el.className = `square ${white? 'white': ''}`;
    el.ondrop = onDropEvent;
    el.ondragover = (ev) => {ev.preventDefault()}
    return el;
}

function onDropEvent(ev) {
    ev.preventDefault();
    const {id, pos} = DRAG_ELEMENT;
    console.log({id, pos});
    let el = document.getElementById(id);
    el.classList.remove('dragging');
    el.parentNode.removeChild(el);
    ev.target.appendChild(el)
}

function addSquareTo(where, square){
    where.appendChild(square);
    return square
}