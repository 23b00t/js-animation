import { carpet } from './variables.js';

export const drawCrumbs = () => {
  for (let i = 0; i < 100; i++) {
    const crumb = document.createElement('div');
    crumb.classList.add('crumb');

    // Random position within the container
    const x = Math.floor(Math.random() * 399); // Horizontale Position (0-398)
    const y = Math.floor(Math.random() * 399); // Vertikale Position (0-398)

    // Set the position 
    crumb.style.left = `${x}px`;
    crumb.style.top = `${y}px`;

    // Add the crumb to the container
    carpet.appendChild(crumb);
  }
}
