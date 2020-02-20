function upArrowPressed() {
    let image = document.getElementById("myImage");
    image.style.top = parseInt(image.style.top) - 5 + "px";
}
function downArrowPressed() {
    let image = document.getElementById("myImage");
    image.style.top = parseInt(image.style.top) + 5  + "px";
}
function leftArrowPressed() {
    let image = document.getElementById("myImage");
    image.style.left = parseInt(image.style.left) -5  + "px";
}
function rightArrowPressed() {
    let image = document.getElementById("myImage");
    image.style.left = parseInt(image.style.left) + 5 + "px";
}
function moveImage(event) {
    switch (event.keyCode) {
        case 38: upArrowPressed();
            break;
        case 40: downArrowPressed();
            break;
        case 37: leftArrowPressed();
            break;
        case 39: rightArrowPressed();
             break;
    }
}
function docReady() {
    window.addEventListener('keydown' , moveImage);
}