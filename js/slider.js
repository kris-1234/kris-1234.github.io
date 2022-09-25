const thumb = slider.querySelector('.thumb');

const rightEdge = slider.offsetWidth - thumb.offsetWidth;

let selectionIndex = 0;

function adjustLeftToBounds(left) {
    // the pointer is out of slider => lock the thumb within the bounaries
    if (left < 0) {
        return 0;
    }

    if (left > rightEdge) {
        return rightEdge;
    }

    return left;
}

const numSteps = getNumOptions() - 1;
let newContinuousLeft;
		
thumb.onmousedown = function(event) {
  event.preventDefault(); // prevent selection start (browser action)

  let shiftX = event.clientX - thumb.getBoundingClientRect().left;
  // shiftY not needed, the thumb moves only horizontally

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    newContinuousLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
    thumb.style.left = adjustLeftToBounds(newContinuousLeft) + 'px';
  }

  function onMouseUp() {
    const stepWidth = rightEdge / numSteps;
    selectionIndex = Math.round(newContinuousLeft / stepWidth);
    changeSubmitter(selectionIndex);
    const newDiscreteLeft = stepWidth * selectionIndex;
    thumb.style.left = adjustLeftToBounds(newDiscreteLeft) + 'px';

    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }

};

thumb.ondragstart = function() {
  return false;
};