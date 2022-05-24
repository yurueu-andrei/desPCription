let text_zoom1 = document.getElementsByClassName("hint1")[0]
let text = document.getElementsByClassName("text123")[0]
//достаем наш черный блок и сам текст

function openButton1() {
text_zoom1.style.opacity = "1";
text_zoom1.style.width = "350px";
setTimeout(() => text.style.opacity = "1", 200) //тут меняем опасити для самого текста
//эта функция выполняет то, что написано после => через 200 миллисекунд
//короче просто задержка, чтобы всё выглядело красиво
}

let matDropZone = document.getElementById("matZone")
function onDragStart(event) {
    event
        .dataTransfer
        .setData('text/plain', event.target.id);
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const id = event
        .dataTransfer
        .getData('text');
    const draggableElement = document.getElementById(id);
    let dropzone = event.target;
    dropzone.appendChild(draggableElement);
    event
        .dataTransfer
        .clearData();
}
