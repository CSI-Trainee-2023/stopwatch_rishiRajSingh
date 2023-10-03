
var hr =0 ;
var min =0 ;
var sec =0 ;

var timer = false ;

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







function rotate(){
    document.getElementsByClassName('chakra')[0].classList.toggle('rotate');
}
function reverseRotate(){
    document.getElementsByClassName('kaal')[0].classList.toggle('reverseRotate');
}