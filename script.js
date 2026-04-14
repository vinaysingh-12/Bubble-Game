var timer = 60;
let score = 0;
let hitrn = 0;


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}
function getNewHit() {
     hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = hitrn;
}
function makebubble() {
    var clutter = "";
    for (var i = 1; i <= 126; i++) {
        let rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer() {
    let time = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeval").textContent = timer;
        }
        else {
            clearInterval(time);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
        }
    }, 1000);
}


document.querySelector("#pbtm").addEventListener("click",function(dets){
    let clickednum = Number(dets.target.textContent);
    if(clickednum==hitrn){
        increaseScore();
        makebubble();
        getNewHit();
    }
});


runTimer();
makebubble();
getNewHit();


