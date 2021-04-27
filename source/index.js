let gamer = true;
let gsetting = false;
let gamersId = {
    GamerX: [],
    GamerO: []
}

var pName = document.getElementById('name');
var name = window.prompt("Enter your name: ");

window.onload = () => {
    makingCells();
    pName.value+= " " + name
}
document.getElementById('play').addEventListener('click', playAgain);
document.getElementById('exit').addEventListener('click', exit);
//function
function makingCells() {
    let parent = document.getElementById('tictacfield');

    for (let i = 0; i < 9; i++) {
        let div = document.createElement('div');
        div.className = 'cell';
        div.id = i;
        div.addEventListener('click', cellClicked);

        parent.appendChild(div);
    }
}
//function
function cellClicked(event) {
    let id = event.target.id;
    let cell = document.getElementById(id);
    cell.removeEventListener('click', cellClicked);
    if (gamer) {
        if (gsetting == false) {
            cell.style = "background-image: url('../source/images/forx.jpg')";
            player.innerText = "It's Gamer O time!";
            gamer = !gamer
            gamersId.GamerX.push(id);
            checkingMethod(gamersId.GamerX, "Congrats! Player X wins the battle....");
        }

    } else {
        if (gsetting == false) {
            cell.style = "background-image: url('../source/images/forzer.jpg')";
            player.innerText = "It's Gamer X time!"
            gamer = !gamer
            gamersId.GamerO.push(id);
            checkingMethod(gamersId.GamerO, "Congrats! Player O wins the battle....");
        }

    }
    allLength = gamersId.GamerX.length + gamersId.GamerO.length;

    console.log(allLength);

    if (gsetting == false) {
        if (allLength >= 9) {
            alert("Oh! It's tie!");
        }

    }
}
//function
function checkingMethod(gamersId, player) {
    let winningCombination = [
        ["0", "1", "2"],
        ["3", "4", "5"],
        ["6", "7", "8"],

        ["0", "3", "6"],
        ["1", "4", "7"],
        ["2", "5", "8"],

        ["0", "4", "8"],
        ["2", "4", "6"],
    ];

    for (combination of winningCombination) {
        if (gamersId.includes(combination[0]) &&
            gamersId.includes(combination[1]) &&
            gamersId.includes(combination[2])) {
            alert(player);
            gsetting = true;
        }
    }
}
//function
function playAgain() {
    let parent = document.getElementById('tictacfield');

    parent.innerHTML = "";
     gamer = true;
     gsetting = false;
     gamersId = {
        GamerX: [],
        GamerO: []
    }
    player.innerText = "It's Gamer O time!"
    makingCells();
}
//function
function exit() {
    let parent = document.getElementById('tictacfield');

    parent.innerHTML = "";
     gamer = true;
     gsetting = false;
     gamersId = {
        GamerX: [],
        GamerO: []
    }
    player.innerText = "It's Gamer X time!"
    makingCells();

}
//function
function goBack() {
    window.history.back()
  }

 