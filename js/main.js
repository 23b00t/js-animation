import { drawCrumbs } from './drawCrumbs.js';
import { clean } from './clean.js';
import { drawAnimation } from './drawAnimation.js';
import { btn, id } from './variables.js';

// Button deaktivieren und Eventlistener auf Button der die Animation startet
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
