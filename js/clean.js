import { id, setId } from './variables.js';
import { drawAnimation } from './drawAnimation.js';

// Function to execute the animation
export const clean = () => {
  // Initialize x and y coordinates
  let x = 0, y = 0;

  // Perform right or left movement
  // (for y = 0, 100, 200, ... move right (+1), otherwise move left (-1))
  const scaleX = () => x += (y % 100 === 0) ? 1 : -1;

  // Perform animated movement
  const frame = () => {
    // Enable button and reset interval when target position is reached
    if (x === 0 && y === 350) return clearInterval(id);

    // X-axis movement
    if (x <= 350 && x >= 0) {
      drawAnimation(x, y); // Before x leaves the range
      scaleX();
    } else { // Y-axis movement
      y += 1;
      drawAnimation(x, y);
      // End of Y-movement and first X-movement that fulfills the first if condition
      if (y % 50 === 0) scaleX();
    }
  };

  // Reset interval and execute animation
  clearInterval(id);
  setId(setInterval(frame, 2));
};
