console.log('Loaded!');
var element = document.getElementById("main text");
element.innerHTML = 'New Value'; 
//Move the image

var im =document.getElementById("Madi");
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft +1;
    im.style.marginLeft=marginLeft + 'px';
}
im.onclick = function(){
    var intervel =setInterval(moveRight,50);
   
};