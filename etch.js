const container = document.querySelector('.container');
const mouseOver = document.querySelector('.mouseOver');
const clickOn = document.querySelector('.clickOn');
const removeEvents=document.querySelector('.removeEvents');
const pixelSize = document.querySelector('.pixelSize');

//Tools
function setMouseover(){
    const grids = document.querySelectorAll('.grid');

    if (grids[0].getAttribute('listeneroc') == 'true'){
        grids.forEach(grid => grid.removeEventListener('click', setColor));
        grids.forEach(grid => grid.removeAttribute('listeneroc'));
    }
     grids.forEach(grid => grid.addEventListener('mouseover', setColor));
     grids.forEach(grid => grid.setAttribute('listenermo', 'true'));
}
function setClick(){
    const grids = document.querySelectorAll('.grid');

    if (grids[0].getAttribute('listenermo') == 'true'){
        grids.forEach(grid => grid.removeEventListener('mouseover', setColor));
        grids.forEach(grid => grid.removeAttribute('listenermo'));
    }
    grids.forEach(grid => grid.addEventListener('click', setColor));
    grids.forEach(grid => grid.setAttribute('listeneroc', 'true'));

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
//Check is divs already

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
    const container = document.querySelector('.container');
    if (container.hasAttribute('colorSelect') == true){
        container.removeAttribute('colorSelect');
    }
    container.setAttribute('colorSelect', e.target.style.backgroundColor);
}
function setColor(e){
    const container = document.querySelector('.container');
    e.target.style.backgroundColor = container.getAttribute('colorSelect');
}
function setButtons(){
mouseOver.addEventListener('click', setMouseover);
clickOn.addEventListener('click', setClick);
removeEvents.addEventListener('click',clearCanvas);
pixelSize.addEventListener('click',createCanvas);
   
}

/* Set attribute in container that holds the currently selected color and then set the bg color
based on that attribute value.
*/






createCanvas();
setPallette();
setButtons();







