

function FirstFunc1() {
    
let username = document.getElementById("input").value;
localStorage.setItem("name",username);
let str = 'Hello!';

if(username.length>0){
    document.getElementById("name").innerHTML=('"' + str+ ' ' +username+'"');
    document.getElementById("getFor").style.display = "block";
    document.getElementById("input").value = "";
    document.getElementById("emer").style.display = "none";
}
else{
    document.getElementById("emer").innerHTML=("Hello Almighty, It will be easy for me if you will enter your name.");
    document.getElementById("getFor").style.display = "none";
}

}


//document.getElementById("name").innerHTML=( (username != null) ? (`${str} ${username} !`) : (`${str}`));
//console.log ( (username != null) ? (`${str} ${username} !`) : (`${str}`));

//let userQue = ;
//console.log ((userQue!= null) ? (`${username} ask ${userQue}`) : (`${username} didn't ask any question`));
function FirstFunc(){
let randomNumber = Math.floor(Math.random()*8);

let eightball = '';

switch(randomNumber){
    case 0: eightball = 'It is certain'
    break;
    case 1: eightball = 'It is decidedly so'
    break;
    case 2: eightball = 'Reply hazy try again'
    break;
    case 3: eightball = 'Cannot predict now'
    break;
    case 4: eightball = 'Do not count on it'
    break;
    case 5: eightball = 'My sources say no'
    break;
    case 6: eightball = 'Outlook not so good'
    break;
    case 7: eightball = 'Signs point to yes'
    break;
}
document.getElementById("name2").innerHTML = (eightball);
document.getElementById("col").style.display = "none";
//document.getElementById("img").style.animation-shake = 0.5s;
//document.getElementById("img").style.animation-iteration = "infinite";
//console.log(eightball);
}
/*
if(randomNumber==0){
    console.log('It is certain');
}
else if(randomNumber==1){
    console.log('It is decidedly so');
}
else if(randomNumber==2){
    console.log('Reply hazy try again');
}
else if(randomNumber==3){
    console.log('Cannot predict now');
}
else if(randomNumber==4){
    console.log('Do not count on it');
}
else if(randomNumber==5){
    console.log('My sources say no');
}
else if(randomNumber==6){
    console.log('Outlook not so good');
}
else if(randomNumber==7){
    console.log('Signs point to yes');
}
}
*/
function FuncH1 (){
    document.getElementById("h1").innerHTML = "Enter Your Question Mr." + localStorage.getItem("name");
}




function FirstFunc2()
{
let ball = document.getElementById("img");
ball.classList.add("shake");

document.getElementById("input").value = "";

setTimeout(function()
{
    ball.classList.remove("shake");
},2000);
setTimeout(function()

{
FirstFunc();
},2000);
}