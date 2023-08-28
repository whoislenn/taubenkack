var fish = document.getElementById("post-right-image");
var moving = false;

fish.addEventListener("mousedown", initialClick, false);

function move(e) {
    var newX = e.clientX - 10;
    var newY = e.clientY - 10;

    fish.style.left = newX + "px";
    fish.style.top = newY + "px";
}

function initialClick(e) {
    if (moving) {
        document.removeEventListener("mousemove", move);
        moving = !moving;
        return;
    }
  
    moving = !moving;
    image = this;

    document.addEventListener("mousemove", move, false);
}
