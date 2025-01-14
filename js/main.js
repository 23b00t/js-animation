import { drawCrumbs } from './drawCrumbs.js';
import { clean } from './clean.js';
import { drawAnimation } from './drawAnimation.js';
import { btn, id } from './variables.js';

// Disable the button and add event listener to the button that starts the animation
btn.addEventListener('click', () => {
  btn.disabled = true;
  clean();
});

document.querySelector("#reset").addEventListener('click', () => {
  btn.disabled = false;
  drawCrumbs();
  drawAnimation(0, 0);
  clearInterval(id);
});

window.onload = () => drawCrumbs();
