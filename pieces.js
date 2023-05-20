let w_ = {
    pawns : []
};
let b_ = {
    pawns : []
};

const pawn = (w) => {
    const el = document.createElement('div');
    el.className = `piece pawn ${w? 'white': ''}`;
    el.special1 = true;
    el.movements = [
        direcionalN1, mov_Especial1(el, direcionalN2, direcionalN1)
    ];
    el.captures = [
        direcionalL1N1, direcionalL_1N1
    ]
    el.pos = {L: null, N: null}
    el.id = `${wp(w)}p-${pawns.length}`;
    el.draggable = true;
    el.ondragstart = (ev) => {
        ev.dataTransfer.setData('piece', ev.target.id)
    }
    (w? w_: b_).pawns.concat([el.id]);
    return el;
}