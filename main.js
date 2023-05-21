window.addEventListener('load', () => {
    let pawn1 = pawn(true);
    addPiece(pawn1, document.querySelector('#a1'))
})

function wp(w){
    return w? 'w': 'b'
}

function addPiece(piece, square){
    let arr = square.id.split('');
    piece.pos.L = arr[0]; piece.pos.N = arr[1];
    square.appendChild(piece);
}

function wrap() {
    const allSquares = document.querySelectorAll('.square');
    const allBlackPieces = {
        pawns: document.querySelectorAll('')
    }
}