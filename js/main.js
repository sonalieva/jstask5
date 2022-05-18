let packman = document.getElementById('packman');
let box =  document.getElementById('box');
let speed = 3;
window.addEventListener('keydown',function(e){
    if(e.keyCode==39){
        if((packman.offsetLeft+speed)<box.offsetWidth-packman.offsetWidth){
            packman.style.left = packman.offsetLeft +speed+ 'px';

        }
        else{
            
            packman.style.left = (box.offsetWidth-packman.offsetWidth) + 'px'

        }
       
    }
    else if(e.keyCode==37){
        if((packman.offsetLeft-speed)>0){
            packman.style.left = packman.offsetLeft -speed+ 'px';

        }
        else{
            
            packman.style.left = 0 +'px';

        }
       
    }
    else if(e.keyCode==38){
        if((packman.offsetTop-speed)>0){
            packman.style.top= packman.offsetTop-speed + 'px';
        }
        else{
            packman.style.top = 0 + 'px'
        }
    }
    else if(e.keyCode==40){
        if((packman.offsetTop+speed)<(box.offsetHeight-packman.offsetHeight)){
            packman.style.top= packman.offsetTop+speed + 'px';
        }
        else{
            packman.style.top = box.offsetHeight-packman.offsetHeight+ 'px'
        }
    }
    let fromLeft = packman.offsetLeft;
    let toLeft = packman.offsetLeft+packman.offsetWidth;
    let fromTop = packman.offsetTop;
    let toTop = packman.offsetTop+packman.offsetHeight;
    let dot = findUnderDot(fromTop,toTop,fromLeft,toLeft);

    if(dot){
        box.removeChild(dot);

        packman.style.width = packman.offsetWidth+2+'px';
        packman.style.height = packman.offsetHeight+2+'px';
    }
})

let isShiftPressing=false;
window.addEventListener('keydown',function(e){
    if(e.keyCode == 16){
        isShiftPressing=true
    }
})

window.addEventListener('keyup',function(e){
    if(e.keyCode == 16){
        isShiftPressing=false
    }
})



function findUnderDot(fromTop,toTop,fromLeft,toLeft)
{
    let dots = document.querySelectorAll('.dot');

    for(let i=0;i<dots.length;i++)
    {
        if((dots[i].offsetTop>fromTop && (dots[i].offsetTop+dots[i].offsetHeight)<toTop) 
        && (dots[i].offsetLeft>fromLeft && (dots[i].offsetLeft+dots[i].offsetWidth)<toLeft))
        {
            return dots[i];
        }
    }
}


function randomDotGenerator(count,maxTop,maxLeft){
    let parent = document.getElementById('box');
    for(let i=0;i<count;i++){
        let dot = document.createElement('div');
        dot.classList.add('dot');

        let leftPos;

        do{
            leftPos = Math.ceil(Math.random()*1000);
        }
        while(leftPos>maxLeft)

        let topPos;

        do{
            topPos = Math.ceil(Math.random()*1000);
        }
        while(topPos>maxTop)

        dot.style.top = topPos+'px';
        dot.style.left = leftPos+'px';

        parent.appendChild(dot);
    }
}
