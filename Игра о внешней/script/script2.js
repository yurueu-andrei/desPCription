//бургер
let innerSubMenu = document.getElementsByClassName("submenu1")[0]
let outerSubMenu = document.getElementsByClassName("submenu3")[0]
let gamesSubMenu = document.getElementsByClassName("submenu2")[0]
let innerButton = document.getElementsByClassName("inner")[0]
let outerButton = document.getElementsByClassName("outer")[0]
let gamesButton = document.getElementsByClassName("games")[0]
closeInnerSubMenu()
closeOuterSubMenu()
closeGamesSubMenu()
function openInnerSubMenu() {
    innerSubMenu.style.visibility = "visible"
    innerSubMenu.style.opacity = "1"
    innerSubMenu.style.height = "50px"
    closeOuterSubMenu()
    closeGamesSubMenu()
}
function openOuterSubMenu() {
    outerSubMenu.style.visibility = "visible"
    outerSubMenu.style.opacity = "1"
    outerSubMenu.style.height = "50px"
    closeInnerSubMenu()
    closeGamesSubMenu()
}
function openGamesSubMenu() {
    gamesSubMenu.style.visibility = "visible"
    gamesSubMenu.style.opacity = "1"
    gamesSubMenu.style.height = "50px"
    closeInnerSubMenu()
    closeOuterSubMenu()
}
function closeInnerSubMenu() {
    innerSubMenu.style.height = "0px"
    innerSubMenu.style.opacity = "0"
    innerSubMenu.style.visibility = "hidden"
}
function closeOuterSubMenu() {
    outerSubMenu.style.height = "0px"
    outerSubMenu.style.opacity = "0"
    outerSubMenu.style.visibility = "hidden"
}
function closeGamesSubMenu() {
    gamesSubMenu.style.height = "0px"
    gamesSubMenu.style.opacity = "0"
    gamesSubMenu.style.visibility = "hidden"
}


//менюшки
let mouse=document.getElementsByClassName("mouse_images")[0]
let keyboard=document.getElementsByClassName("keyboard_images")[0]
let monitor=document.getElementsByClassName("monitor_images")[0]
let system=document.getElementsByClassName("system-block_images")[0]

let monitor_text=document.getElementsByClassName("monitor_text")[0]
let system_text=document.getElementsByClassName("system_text")[0]
let keyboard_text=document.getElementsByClassName("keyboard_text")[0]
let mouse_text=document.getElementsByClassName("mouse_text")[0]

function mouse_zoom(){
    mouse.style.display="flex"
    keyboard.style.display="none"
    monitor.style.display="none"
    system.style.display="none"
}

function text(){
    mouse.style.display="none"
    keyboard.style.display="none"
    monitor.style.display="none"
    system.style.display="none"

    monitor_text.style.display="flex"
    keyboard_text.style.display="inline"
    system_text.style.display="block"
    mouse_text.style.display="block"    
}

function monitor_zoom(){
    mouse.style.display="none"
    monitor.style.display="flex"
    keyboard.style.display="none"
    system.style.display="none"
}

function keyboard_zoom(){
    monitor.style.display="none"
    mouse.style.display="none"
    keyboard.style.display="flex"
    system.style.display="none"
}
function system_zoom(){
    monitor.style.display="none"
    mouse.style.display="none"
     keyboard.style.display="none"
    system.style.display="flex"
}

function nozoom(){
    system.style.display="none"
    monitor.style.display="none"
    mouse.style.display="none"
    keyboard.style.display="none"
}


//выбор монитора

let monitor1=document.getElementsByClassName("mon_img1")[0]
let monitor2=document.getElementsByClassName("mon_img2")[0]
let monitor3=document.getElementsByClassName("mon_img3")[0]
let monitor4=document.getElementsByClassName("mon_img4")[0]
let keyboard1=document.getElementsByClassName("key_img1")[0]
let keyboard2=document.getElementsByClassName("key_img2")[0]
let keyboard3=document.getElementsByClassName("key_img3")[0]
let keyboard4=document.getElementsByClassName("key_img4")[0]
let system1=document.getElementsByClassName("sys_img1")[0]
let system2=document.getElementsByClassName("sys_img2")[0]
let system3=document.getElementsByClassName("sys_img3")[0]
let system4=document.getElementsByClassName("sys_img4")[0]
let mouse1=document.getElementsByClassName("mouse_img1")[0]
let mouse2=document.getElementsByClassName("mouse_img2")[0]
let mouse3=document.getElementsByClassName("mouse_img3")[0]
let mouse4=document.getElementsByClassName("mouse_img4")[0]


function monitor_choise1(){
    monitor1.style.display="flex"
    monitor2.style.display="none"
    monitor3.style.display="none"
    monitor4.style.display="none"
}
function monitor_choise2(){
    monitor1.style.display="none"
    monitor2.style.display="flex"
    monitor3.style.display="none"
    monitor4.style.display="none"
}
function monitor_choise3(){
    monitor1.style.display="none"
    monitor2.style.display="none"
    monitor3.style.display="flex"
    monitor4.style.display="none"
}
function monitor_choise4(){
    monitor1.style.display="none"
    monitor2.style.display="none"
    monitor3.style.display="none"
    monitor4.style.display="flex"
}

function keyboard_choise1(){
    keyboard1.style.display="flex"
    keyboard2.style.display="none"
    keyboard3.style.display="none"
    keyboard4.style.display="none"
}
function keyboard_choise2(){
    keyboard1.style.display="none"
    keyboard2.style.display="flex"
    keyboard3.style.display="none"
    keyboard4.style.display="none"
}
function keyboard_choise3(){
    keyboard1.style.display="none"
    keyboard2.style.display="none"
    keyboard3.style.display="flex"
    keyboard4.style.display="none"
}
function keyboard_choise4(){
    keyboard1.style.display="none"
    keyboard2.style.display="none"
    keyboard3.style.display="none"
    keyboard4.style.display="flex"
}

function system_choise1(){
    system1.style.display="flex"
    system2.style.display="none"
    system3.style.display="none"
    system4.style.display="none"
}
function system_choise2(){
    system1.style.display="none"
    system2.style.display="flex"
    system3.style.display="none"
    system4.style.display="none"

}
function system_choise3(){
    system1.style.display="none"
    system2.style.display="none"
    system3.style.display="flex"
    system4.style.display="none"
}
function system_choise4(){
    system1.style.display="none"
    system2.style.display="none"
    system3.style.display="none"
    system4.style.display="flex"
}

function mouse_choise1(){
    mouse1.style.display="flex"
    mouse2.style.display="none"
    mouse3.style.display="none"
    mouse4.style.display="none"
}
function mouse_choise2(){
    mouse1.style.display="none"
    mouse2.style.display="flex"
    mouse3.style.display="none"
    mouse4.style.display="none"
}
function mouse_choise3(){
    mouse1.style.display="none"
    mouse2.style.display="none"
    mouse3.style.display="flex"
    mouse4.style.display="none"
}
function mouse_choise4(){
    mouse1.style.display="none"
    mouse2.style.display="none"
    mouse3.style.display="none"
    mouse4.style.display="flex"
}

let result=document.getElementsByClassName("result")
let show_result_block=document.getElementsByClassName("show_result")[0]


let block = document.getElementsByClassName("show_result")[0]
let block_add=document.getElementsByClassName("result")[0]
let show_container=document.getElementsByClassName("show_container")[0]

var copy;
function hide_result(){
    show_result_block.style.display="none"
    copy.remove();
}
function show_results(){
    show_result_block.style.display="flex"

    copy=block_add.cloneNode(true);
    show_container.appendChild(copy);

    let count=document.getElementsByClassName("result").length;
    console.log(count);
}

