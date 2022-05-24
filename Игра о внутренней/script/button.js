function hide_show()
{
    //Получаем стиль блока с айди div (для изменения)
    var div=document.getElementById("div").style.display;
    //Получаем стиль ссылки (для изменения)
    var link=document.getElementById("link").innerHTML;
 
    //Изначально стиль display у блока равен ""
    //так как он изначально отображается
    //задаем ему стиль block
    if(div=="")div="none";
 
    //Если блок не отображается
    if(div=="none")
    {
        div="block";
        link="Подсказка ⌵";
    }
    else
    {
        div="none";
        link="Подсказка &#10095";
    }
    //Теперь меняем стили у ссылки
    //и блока который хотим скрыть или показать
    document.getElementById("div").style.display=div;
    document.getElementById("link").innerHTML=link;
}