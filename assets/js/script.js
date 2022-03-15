
// Selecting All Required Element

const selectBox = document.querySelector(".select-box"),
selectXBtn = selectBox.querySelector(".playerX"),
selectOBtn = selectBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board");


window.onload = ()=>{
    for (let i = 0; i < allBox.length; i++) {
       allBox[i].setAttribute("onclick", "clickedBox(this)");
    }
}
selectXBtn.onclick = ()=>{
    selectBox.classList.add("hide");
    
}
selectOBtn.onclick = ()=>{ 
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
    players.setAttribute("class", "players active player");
}

