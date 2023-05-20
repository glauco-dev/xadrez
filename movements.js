// Arquivo dedicado a criação dos movimentos de peças

// um lista ordenada das identificações de casas separadas letra de numero
const Ns = [1, 2, 3, 4, 5, 6, 7, 8]
const Ls = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


// São esses movimentos do peão

// -- movimentação para frente, movimento especial para frente duas casas
// movimento: na direção padrão da cor - 1 NUMERO
const direcionalN1 = (N) => {
    return [Ns.findIndex(N+ 1)]
}

const mov_Especial1 = (piece) => (movimento, alternativo) => {
    if(piece.special1){
        piece.special1 = false;
        return movimento
    }
    else
        return alternativo;
}
// movimento: na direção padrão da cor - 2 NUMEROs
const direcionalN2 = (N) => {
    return [Ns.findIndex(N+ 2)] 
}

// captura diagonal 1
// movimento: na direção padrão da cor - 1 NUMERO, 1 LETRA
const direcionalL1N1 = (L, N) => {
    return [Ls.findIndex(L + 1), Ns.findIndex(N + 1)]
}

// captura diagonal 2
// movimento: na direção padrão da cor - menos 1 LETRA, 1 NUMERO
const direcionalL_1N1 = (L, N) => {
    return [Ls.findIndex(L - 1), Ns.findIndex(N + 1)]
}
