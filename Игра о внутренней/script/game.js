let success = document.getElementsByClassName("success")[0]
let failure = document.getElementsByClassName("failure")[0]
let test = document.getElementById("test")
let game_new  = document.getElementById("game_new")

function checkResults() {
    if (matZone.children.length == 1
    && matZone.children[0] == document.getElementById("draggable-1")
    && videoZone.children.length == 1
    && videoZone.children[0] == document.getElementById("draggable-2")
    && diskZone.children.length == 1
    && diskZone.children[0] == document.getElementById("draggable-3")
    && powerZone.children.length == 1
    && powerZone.children[0] == document.getElementById("draggable-4") 
    && procZone.children.length == 1
    && procZone.children[0] == document.getElementById("draggable-5")
    && operZone.children.length == 1
    && operZone.children[0] == document.getElementById("draggable-6")) {
        success.style.display = "block"
        failure.style.display = "none"
        test.style.display = "none"
        game_new.style.justifyContent = "space-evenly"
    } 
    else 
    {
        failure.style.display = "block"
        success.style.display = "none"
        test.style.display = "none"
        game_new.style.justifyContent = "space-evenly"
    }
}


 