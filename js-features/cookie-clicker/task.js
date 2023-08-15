const cliker = document.getElementById("cookie");
const numberClick = document.getElementById("clicker__counter"); 


function clickNumber() {
    numberClick.textContent ++;

    if(numberClick.textContent % 2 !== 0){
        cliker.width = 215;
    } else {
        cliker.width = 200;
    }
}

cliker.onclick = clickNumber;
