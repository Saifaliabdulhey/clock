function updateDate(){
    var date = new Date();
    var setTime = document.getElementById("setTime");
    setTime.innerHTML = date.getHours()+ ":"+date.getMinutes()+":"+date.getUTCSeconds();
    var setDate = document.getElementById("setData");
    setDate.innerHTML = parseInt(date.getMonth()+1)+"-"+date.getDate()+"-"+date.getUTCFullYear();
}
setInterval(updateDate,100);
onload =updateDate();

function getColor(){
    var getColor = document.getElementById("setColor").value;
    localStorage.setItem("COLOR",getColor);

    document.getElementById("time").style.background = localStorage.getItem("COLOR");
    document.getElementById("body").style.background = localStorage.getItem("COLOR");


}

function setColor(){
    

    document.getElementById("time").style.background = localStorage.getItem("COLOR");
    document.getElementById("body").style.background = localStorage.getItem("COLOR");



}
setInterval(setColor,100);

function add(){
    var li = document.createElement("LI");
    var input = document.getElementById("input").value;
    var text = document.createTextNode(input);
    li.appendChild(text);

    document.getElementById("myList").appendChild(li);
}


var music = document.getElementById("music");

var play = document.getElementById("play");
var pause = document.getElementById("pause");
var update = document.getElementById("update");

play.addEventListener("click",()=>{
    music.play();
})
pause.addEventListener("click",()=>{
    music.pause();
})
update.addEventListener("click",()=>{
    music.update();
})