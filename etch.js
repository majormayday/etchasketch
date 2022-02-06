const container = document.querySelector('.container');
const removeEvents=document.querySelector('.removeEvents');
const pixelSize = document.querySelector('.pixelSize');
const pallette=  document.querySelector('.pallette');
const rainbowEffect= document.querySelector('.rainbowEffect');

//Tools
function setContainerEvents(){
    container.addEventListener('mousedown', mouseDownEvent);
    container.addEventListener('mouseup', mouseUpEvent);
}
function mouseDownEvent(){
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.addEventListener('mouseover', setColor));
    grids.forEach(grid => grid.addEventListener('mouseup', setColor));
}
function mouseUpEvent(){
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.removeEventListener('mouseover', setColor));
    grids.forEach(grid => grid.removeEventListener('mouseup', setColor));
}
function clearCanvas(){
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.style.backgroundColor = 'unset');
}
function createCanvas() {
 //Removes any pixels already in the canvas
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
let gSize = window.prompt('How many pixels per side? (Max 100)');
if (gSize > 100) gSize = 100;


//Create the pixels
for (i=0; i< (gSize*gSize) ; i++){
    let div = document.createElement('div');
    div.classList.add('grid');
    container.appendChild(div);
    }
const grids = document.querySelectorAll('.grid');
//Sets the pixel size based on the overall grid size
grids.forEach (grid => grid.style.height = (640 / gSize) + 'px');
grids.forEach (grid => grid.style.width = (640 / gSize) +  'px')
}   
function setPallette(){
    const colors = document.querySelectorAll('.color');
    colors.forEach(color => color.style.backgroundColor = color.innerHTML);
    colors.forEach(color => color.style.borderColor = color.innerHTML);
    colors.forEach(color => color.addEventListener('click', selectColor));
    colors.forEach(color => color.innerHTML = ""); 
}
function selectColor(e){
    //This function is called by the color boxes to create a box
    const container = document.querySelector('.container');
    if (container.hasAttribute('colorSelect') == true){
        container.removeAttribute('colorSelect');
    }
    container.setAttribute('colorSelect', e.target.style.backgroundColor);
}
function setColor(e){
    const container = document.querySelector('.container');
    if (container.hasAttribute('rainbow')==true){
        e.target.style.backgroundColor = randomColor();
        console.log(randomColor());
    }
    else{
    e.target.style.backgroundColor = container.getAttribute('colorSelect');
    }
}
function setButtons(){
removeEvents.addEventListener('click',clearCanvas);
pixelSize.addEventListener('click',createCanvas);
rainbowEffect.addEventListener('click',createRainbows);  
}
function createRainbows(){
    if (container.hasAttribute('rainbow')==true){
        container.removeAttribute('rainbow');
    }
    else{
        container.setAttribute('rainbow',"");
    }
}
function randomColor(){
    let random  = "hsl(" + Math.floor(Math.random()*320) + ', 100%, 50%)';
    return random;
}
function createPallette() {
    for (i=0;i<320;i+=18){
        
             let colorAdd = document.createElement('div');
             colorAdd.classList.add('color');
             colorAdd.innerHTML = "hsl(" + i + ', 100%, 50%)';
             pallette.appendChild(colorAdd); 
     }
 }   

createCanvas();
createPallette();
setPallette();
setButtons();
setContainerEvents();


