
const start = document.getElementById("button-start");
const stop = document.getElementById("button-stop");
const reset = document.getElementById("button-reset");
const secondsShow = document.getElementById("seconds");
const tensShow = document.getElementById("tens");

let miliseconds = 0;
let timeCount = null;

function stopWatch(){

    miliseconds ++; 
    
    let seconds = Math.floor(miliseconds/100);
    let tens = miliseconds % 100

    secondsInText = secondsShow.innerText = `${addonSeconds() + seconds}`;
    tensInText = tensShow.innerText = `${addonTens() + tens}`;

    return secondsInText, tensInText;


    function addonTens(){
        if(tens < 10  ){
            
            return "0";

        } else{
            
            return "";

        }
    }

    function addonSeconds(){
        if(seconds < 10  ){
            
            return "0";

        } else{
            
            return "";

        }
    }

}


start.addEventListener('click', function(){

    if(timeCount){
        return
    } else{
        /* Nie rozumiem czemu tu musi być 10, normalnie dałbym w stopWatch 1000 zamiast 100 ale tylko z kodem poniżej sekunda jest sekundą. */
        timeCount = setInterval(stopWatch, 10);
    }
    
     

});

stop.addEventListener('click', function(){

    clearInterval(timeCount);
    timeCount = null;

});

reset.addEventListener('click', function(){

    clearInterval(timeCount);  
    miliseconds = 0;
    timeCount = null;

    secondsInText = secondsShow.innerText = `00`;
    tensInText = tensShow.innerText = `00`;

});

