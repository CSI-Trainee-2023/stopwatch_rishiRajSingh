var hr =0 ;
var min =0 ;
var sec =0 ;
var count = 0; 

var timer = false ;

// -----> KeyBoard Shortcuts 

document.addEventListener('keydown', (e)=>{
    e.preventDefault()
    if( (e.key === "s" || e.key == "p")&& 
    e.ctrlKey){ 
        start(); rotate(); reverseRotate(); show();
    }
    if( e.key === "x" && e.ctrlKey){
        setTimeout(stop(),100); pauseWheel(); hide();
    }
    if( e.ctrlKey && e.key === "r"){
        reset(); showPlay();
    }
    if( e.key === "l" && e.ctrlKey){
        
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
    hr = 0 ;
    min = 0;
    sec = 0;

    document.getElementById("sec").innerHTML = sec ;
    document.getElementById("min").innerHTML = min ;
    document.getElementById("hr").innerHTML = hr ;
}   
function stopwatch(){
    if( timer == true ){
        sec++ ;

        if( sec == 60){
            min++ ;
            sec = 0 ;
        }

        if( min == 60){
            hr++ ;
            min =0;
            sec =0;
        }
        document.getElementById("sec").innerHTML = sec ;
        document.getElementById("min").innerHTML = min ;
        document.getElementById("hr").innerHTML = hr ;
        setTimeout("stopwatch()", 1000);
    }
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
    let reset = document.getElementById('reset').classList;
    reset.remove('hide');
    reset.add('show');
    let start = document.getElementById('start').classList;
    start.remove('show');
    start.add('hide');
    let lap = document.getElementById('lapCounter').classList;
    lap.remove('show');
    lap.add('hide');
}

function hide(){
    let start = document.getElementById('start').classList;
    start.remove('hide');
    start.add('show');
    let lap = document.getElementById('lapCounter').classList;
    lap.remove('hide');
    lap.add('show'); 
    let stop =  document.getElementById('stop').classList;
    stop.remove('show');
    stop.add('hide');
    let reset = document.getElementById('reset').classList;
    reset.remove('show');
    reset.add('hide');

}

function showPlay(){
    hide();
    let lap = document.getElementById('lapCounter').classList;
    lap.remove('show');
    lap.add('hide');
    pauseWheel();
}