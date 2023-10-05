
// -----> KeyBoard Shortcuts 

document.addEventListener('keydown', (e)=>{
    e.preventDefault()
    if( (e.key === "s" || e.key === "p")&& 
    e.ctrlKey){ 
        start(); rotate(); reverseRotate(); show();
    }
    if( e.key === "x" && e.ctrlKey){
        stop(); pauseWheel(); hide();
    }
    if( e.ctrlKey && e.key === "r"){
        reset(); showPlay();
    }
    if( e.key === "l" && e.ctrlKey){
        buttonShow();
    }
});

// ----> StopWatch Function 

function start(){ 
    timer = true ;
    stopwatch();
}
function stop(){
    timer = false ;  
}
function reset(){
    timer = false;
    mil = 0 ;
    min = 0;
    sec = 0;

    document.getElementById("mil").innerHTML = "0" + mil ;
    document.getElementById("sec").innerHTML = "0" + sec ;
    document.getElementById("min").innerHTML = "0" + min ;
}   
function stopwatch(){
    if( timer == true ){
        mil++ ;

        if( mil == 100){
            sec++ ;
            mil = 0 ;
        }

        if( sec == 60){
            min++ ;
            sec =0;
            mil =0;
        }
        if ( sec < 10){
            document.getElementById("sec").innerHTML = "0" + sec ;
        }else {
            document.getElementById("sec").innerHTML = sec ;
        }        
        if ( min < 10){
            document.getElementById("min").innerHTML = "0" + min ;
        }else {
            document.getElementById("min").innerHTML = min ;
        }   
        if ( mil < 10){
            document.getElementById("mil").innerHTML = "0" + mil ;
        }else {
            document.getElementById("mil").innerHTML = mil ;
        } 
        let timeNow = "0" + min + " : " + "0"  + sec +  " : " + "0" + mil ;
        localStorage.setItem("timesNow", timeNow );
        let timer =setTimeout("stopwatch()", 10);    
    }
    else{
        clearTimeout(timer);
    }    
}


// ----> Laps Display 
// let secEx = 0;
// let milEx = 0 ;
// let minEx = 0 ; 
// let int = null ;
// document.getElementById("start").addEventListener("click", 
// () => {
//     if( int != null ){
//         clearInterval(int);
//     }
//     int = setInterval(displaytimer, 10);
// });
// document.getElementById('stop').addEventListener("click",
// () => {
//     clearInterval(int);
// }
// )

// function displaytimer(){
//     milEx++ ;
//     if( milEx == 100 ){
//         secEx++ ;
//         milEx = 0;
//     }
//     if( secEx == 60 ){
//         minEx++ ;
//         secEx = 0 ;
//         milEx = 0 ;
//     }
// }


// const playButton = document.getElementById("start");
// const lapButton = document.getElementById("lapCounter");
// const resetButton = document.getElementById("reset");
// const stopButton  = document.getElementById("stop");

// let isPlay = false ;
// const play = () => {
//     if(!isPlay){        
//         let counterMil = setInterval ( () => {
//             milEx++ ; 
//         },10);
//         if( milEx == 100 ){
//             secEx++ ;
//             milEx = 0;
//         }
//         if ( secEx == 60){
//             minEx++ ;
//             secEx = 0 ;
//             milEx = 0;
//         }
//         isPlay = true ;
//     }else{
//         clearInterval(milEx);
//         isPlay =false ;
//     }
// }


// const resetEx = () => {
//     play();
// }

// playButton.addEventListener("click",play);
// resetButton.addEventListener("click",resetEx);

function buttonShow(){
    document.getElementsByClassName('clearBtn')[0].classList.remove('hide');
    document.getElementsByClassName('clearBtn')[0].classList.add('buttonShow');

}
function lapsDisplay(){
    const li =  document.createElement("li");
    const laps = document.getElementsByClassName('laps')[0];
    li.setAttribute("class","li-item");
    let timeNew = min + " : " + sec + " : "  + mil;   
    li.append(timeNew);

    laps.append(li);
}




// ----> Wheel rotation and stop-action

function rotate(){
    document.getElementsByClassName('chakra')[0].style.animationPlayState = 'running';
}
function reverseRotate(){
    document.getElementsByClassName('kaal')[0].style.animationPlayState = 'running';
}
function pauseWheel(){
    document.getElementsByClassName('chakra')[0].style.animationPlayState = 'paused';
    document.getElementsByClassName('kaal')[0].style.animationPlayState = 'paused';
}

// ----> toggle play -- pause -- reset ---  Button 



function show(){
    let stop =  document.getElementById('stop').classList;
    stop.remove('hide');
    stop.add('show');
    let lap = document.getElementById('lapCounter').classList;
    lap.remove('hide');
    lap.add('show');
    let start = document.getElementById('start').classList;
    start.remove('show');
    start.add('hide');
    let reset = document.getElementById('reset').classList;
    reset.remove('show');
    reset.add('hide');
}

function hide(){
    let start = document.getElementById('start').classList;
    start.remove('hide');
    start.add('show');
    let reset = document.getElementById('reset').classList;
    reset.remove('hide');
    reset.add('show'); 
    let stop =  document.getElementById('stop').classList;
    stop.remove('show');
    stop.add('hide');
    let lap = document.getElementById('lapCounter').classList;
    lap.remove('show');
    lap.add('hide');

}

function showPlay(){
    hide();
    let reset = document.getElementById('reset').classList;
    reset.remove('show');
    reset.add('hide');
    pauseWheel();
}