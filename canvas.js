const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.height =300;
canvas.width=800;
let x =100
let y = 100
let dx =7
let dy =7
let readus =10

let restart = false;
let bool =true;

let FPlayerScore =0;
let FSquerX =790
let FSquerY =180
c.fillStyle = 'green'
c.fillRect(FSquerX,FSquerY,10,60)

let SPlayerScore =0;
let SSquerX =0
let SSquerY =180
c.fillStyle = 'blue'
c.fillRect(SSquerX,SSquerY,10,60)

window.addEventListener('keydown',()=>{
    movemint(event.key)
    })
    window.addEventListener('keydown',()=>{
        if(event.key === "r"){
            FPlayerScore =0;
            SPlayerScore =0;
            x=100
            y=100
            dx =7
            dy =7
            restart =!restart;
            document.getElementById("Splayer").innerHTML = SPlayerScore
            document.getElementById("Fplayer").innerHTML = FPlayerScore
            animation();
        }
    })
    movemint = function(key){
        if(key === 'ArrowUp' && FSquerY >0){
            FSquerY=FSquerY -60
            c.clearRect(FSquerX,FSquerY+60,10,60);
            c.fillStyle = 'green'
            c.fillRect(FSquerX,FSquerY,10,60)
        }
        if(key === 'ArrowDown' && FSquerY <240){
            FSquerY=FSquerY+60
            c.clearRect(FSquerX,FSquerY-60,10,60);
            c.fillStyle = 'green'
            c.fillRect(FSquerX,FSquerY,10,60)
        } 
        if(key === 'w' && SSquerY >0){
            SSquerY=SSquerY -60
            c.clearRect(SSquerX,SSquerY+60,10,60);
            c.fillStyle = 'blue'
            c.fillRect(SSquerX,SSquerY,10,60)
        }
        if(key === 's' && SSquerY <240){
            SSquerY=SSquerY+60
            c.clearRect(SSquerX,SSquerY-60,10,60);
            c.fillStyle = 'blue'
            c.fillRect(SSquerX,SSquerY,10,60)
        }            
    }
function animation(){
    if(bool || restart){
        return;
    }else if(SPlayerScore === 7){
        c.font ="30px Arial"
        c.strokeText('Game over player one win',400,150)
        SPlayerScore = 7
        FPlayerScore = 0
        return
    }else if(FPlayerScore === 7){
        c.font ="30px Arial"
        c.strokeText('Game over player two win',400,150)
        SPlayerScore = 0
        FPlayerScore = 7
        return
    }
    requestAnimationFrame(animation);
    c.clearRect(10 ,0,780,300)
            c.beginPath()
    
    c.arc(x ,y,readus,0,Math.PI*2, false)
    c.fillStyle = 'white'
    c.fill()
    c.strokeStyle ='white'
    c.stroke()
    x =x +dx
    y =y +dy
 if(x <24){
        let curntSY = y
        console.log(SSquerY,curntSY)
        if(SSquerY +60  >= curntSY  && SSquerY  <= curntSY){

        }else{
            FPlayerScore++
            document.getElementById("Fplayer").innerHTML = FPlayerScore
        }

    }else if(x >775){
        let curntSY = y
        console.log(FSquerY,curntSY)
        if(FSquerY +60  >= curntSY  && FSquerY  <= curntSY){

        }else{
            SPlayerScore++
            document.getElementById("Splayer").innerHTML = SPlayerScore
        }
    }
    if(x +readus>785){
        dx =dx *-1
    }else if(x +readus < 35){
        dx =dx *-1
    }
    if(y +readus>300){
        dy =dy *-1
    }else if(y -readus < 0){
        dy =dy *-1
    }

}
window.addEventListener('keydown',()=>{
    if(event.key === "Enter"){
        bool =!bool
       animation() 
    }
})

