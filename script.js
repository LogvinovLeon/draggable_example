function Draggable(element) {
    this.element = element;

    this.startX = 0;
    this.startY = 0;

    // Add mousedown/touchstart, etc events here …
    element.addEventListener("touchstart", this.onTouchStart.bind(this), false);
    element.addEventListener("touchmove", this.onTouchMove.bind(this), false);
    element.addEventListener("touchend", this.onEndOrCancel.bind(this), false);
    element.addEventListener("touchcancel", this.onEndOrCancel.bind(this), false);

    element.addEventListener("mousedown", this.onMouseDown.bind(this), false);
    element.addEventListener("mousemove", this.onMouseMove.bind(this), false);
    element.addEventListener("mouseup", this.onEndOrCancel.bind(this), false);
    element.addEventListener("mouseout", this.onEndOrCancel.bind(this), false);
}

// Lots to code here to extend the Draggable class …

Draggable.prototype.onStart = function (e, x, y) {
    this.startX = x;
    this.startY = y;
    e.target.classList.add("dragging");
};

Draggable.prototype.onMove = function (e, x, y) {
    e.target.style.left = x - this.startX + "px";
    e.target.style.top = y - this.startY + "px";
    e.preventDefault();
};

Draggable.prototype.onTouchStart = function (e) {
    var touch = e.targetTouches[0];
    this.onStart(e, touch.pageX, touch.pageY);
};

Draggable.prototype.onTouchMove = function (e) {
    var touch = e.targetTouches[0];
    this.onMove(e, touch.pageX, touch.pageY);
};

Draggable.prototype.onMouseDown = function (e) {
    this.onStart(e, e.pageX, e.pageY);
};

Draggable.prototype.onMouseMove = function (e) {
    if (e.target.classList.contains("dragging"))
        this.onMove(e, e.pageX, e.pageY);
};

Draggable.prototype.onEndOrCancel = function (e) {
    e.target.style.left = "0";
    e.target.style.top = "0";
    e.target.classList.remove("dragging");
};

function init() {
    // attach the draggable behavior to our draggable element
    new Draggable(document.querySelector('.draggable'));
}

window.addEventListener('DOMContentLoaded', init, false);
