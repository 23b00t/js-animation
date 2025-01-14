import { elem } from './variables.js';
import { checkCollision } from './checkCollision.js';

// Draw element at position x, y
export const drawAnimation = (x, y) => {
  elem.style.left = x + 'px';
  elem.style.top = y + 'px';

  // Check for collisions and remove hit crumbs
  document.querySelectorAll('.crumb').forEach(crumb => {
    if (checkCollision(elem, crumb)) crumb.remove();
  });
};

