let w_ = {
    pawns : []
};
let b_ = {
    pawns : []
};

const pawn = (w) => {
    const el = document.createElement('div');
    const model = document.createElement('div');
    model.className = 'pawn_model';
    el.appendChild(model);
    el.className = `piece pawn ${w? 'white': ''}`;
    el.special1 = true;
    el.movements = [
        direcionalN1, mov_Especial1(el, direcionalN2, direcionalN1)
    ];
    el.captures = [
        direcionalL1N1, direcionalL_1N1
    ]
    el.pos = {L: null, N: null}
    el.id = `${wp(w)}p-${(w? w_: b_).pawns.length}`;
    el.draggable = true;
    el.ondragstart = dragStartEv;
    (w? w_: b_).pawns.concat([el.id]);
    return el;
}

function dragStartEv(ev) {
    const {id, pos} = ev.target;
    DRAG_ELEMENT = {id, pos}
    ev.target.classList.add('dragging'); 
}