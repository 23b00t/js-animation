import { container } from './variables.js';

export const drawCrumbs = () => {
  for (let i = 0; i < 100; i++) {
    // Erstelle ein Pixel
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');

    // Zufällige Position innerhalb des Containers
    const x = Math.floor(Math.random() * 399); // Horizontale Position (0-398)
    const y = Math.floor(Math.random() * 399); // Vertikale Position (0-398)

    // Setze die Position
    pixel.style.left = `${x}px`;
    pixel.style.top = `${y}px`;

    // Füge das Pixel zum Container hinzu
    container.appendChild(pixel);
  }
}
