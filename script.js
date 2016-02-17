function Draggable(element) {
    this.element = element;
    // Add mousedown/touchstart, etc events here …
}

// Lots to code here to extend the Draggable class …

function init() {
    // attach the draggable behavior to our draggable element
    new Draggable(document.querySelector('.draggable'));
}

window.addEventListener('DOMContentLoaded', init, false);
