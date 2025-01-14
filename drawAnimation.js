import { elem } from './variables.js';
import { checkCollision } from './checkCollision.js';

// Zeichne Element an Position x, y 
export const drawAnimation = (x, y) => {
  elem.style.left = x + 'px';
  elem.style.top = y + 'px';

  // Überprüfe Kollisionen und entferne getroffene Pixel
  document.querySelectorAll('.pixel').forEach(pixel => {
    if (checkCollision(elem, pixel)) pixel.remove();
  });
};

