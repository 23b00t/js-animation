// Funktion zum Überprüfen der Kollision
export const checkCollision = (redBox, pixel) => {
  const redBoxRect = redBox.getBoundingClientRect();
  const pixelRect = pixel.getBoundingClientRect();

  return !(
    redBoxRect.right < pixelRect.left ||
    redBoxRect.left > pixelRect.right ||
    redBoxRect.bottom < pixelRect.top ||
    redBoxRect.top > pixelRect.bottom
  );
};

