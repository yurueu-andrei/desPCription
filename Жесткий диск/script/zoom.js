let text_zoom1 = document.getElementsByClassName("button_1_text")[0]
let text = document.getElementsByClassName("text123")[0]
//достаем наш черный блок и сам текст

function openButton1() {
text_zoom1.style.opacity = "1";
text_zoom1.style.width = "350px";
setTimeout(() => text.style.opacity = "1", 200)
setTimeout(() => text_zoom1.style.opacity = "1", 1500) //тут меняем опасити для самого текста
//эта функция выполняет то, что написано после => через 200 миллисекунд
//короче просто задержка, чтобы всё выглядело красиво
}

function closeButton1() {
text.style.opacity = "0"
text_zoom1.style.width = "0";
setTimeout(() => text_zoom1.style.opacity = "0.5", 1)
//меняем опасити для текста и сворачиваем наш блок
}


let text_zoom2 = document.getElementsByClassName("button_2_text")[0]
let text_2 = document.getElementsByClassName("text456")[0]


function openButton2() {
    text_zoom2.style.opacity = "1";
    text_zoom2.style.width = "350px";
    setTimeout(() => text_2.style.opacity = "1", 200) 
    setTimeout(() => text_zoom2.style.opacity = "1", 1500)
}

function closeButton2() {
    text_2.style.opacity = "0"
    text_zoom2.style.width = "0";
    setTimeout(() => text_zoom2.style.opacity = "0.5", 1)
}




let text_zoom3 = document.getElementsByClassName("button_3_text")[0]
let text_3 = document.getElementsByClassName("text789")[0]


function openButton3() {
    text_zoom3.style.opacity = "1";
    text_zoom3.style.width = "350px";
    setTimeout(() => text_3.style.opacity = "1", 200)
    setTimeout(() => text_zoom3.style.opacity = "1", 1500) 
}

function closeButton3() {
    text_3.style.opacity = "0"
    text_zoom3.style.width = "0";
    setTimeout(() => text_zoom3.style.opacity = "0.5", 1)
}



