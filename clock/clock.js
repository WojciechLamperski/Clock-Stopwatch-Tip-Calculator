
function time(){

    /* Getting english time */
    let time;
    time = new Date();  
    let englishTime = time.toLocaleTimeString("en-US");

    /* Adding the zero in front of hours, so that the excercise task is complited */

    function addon(){

        let hour = time.getHours();
        
        if (hour >= 12){
            

            let hour = time.getHours() - 12;

            if (hour < 10){
                return "0";
            }
            else{
                return "";
            }      
            }else if (hour == 0){
                return "";
            }else{
            if (hour < 10){
                return "0";
            }
            else{
                return "";
            }
        } 
    }

    document.getElementById("MyClockDisplay").innerHTML = `${addon() + englishTime}`;
    
}

function clock() {
    setInterval(time);
} 

clock();