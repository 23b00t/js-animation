// Function to check the collision between the vacuum and the crumbs
export const checkCollision = (redBox, crumb) => {
  const redBoxRect = redBox.getBoundingClientRect();
  const crumbRect = crumb.getBoundingClientRect();

  return !(
    redBoxRect.right < crumbRect.left ||
    redBoxRect.left > crumbRect.right ||
    redBoxRect.bottom < crumbRect.top ||
    redBoxRect.top > crumbRect.bottom
  );
};

