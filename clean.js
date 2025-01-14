import { id, setId } from './variables.js';
import { drawAnimation } from './drawAnimation.js';

// Funktion zum Ausführen der Animation
export const clean = () => {
  // Initialisiere x und y Koordinaten
  let x = 0, y = 0;

  // Führe Rechts- oder Linksbewegung 
  // (für y = 0, 100, 200, ... nach Rechts (+1) sonst nach Links (-1))
  const scaleX = () => x += (y % 100 === 0) ? 1 : -1;

  // Führe animierte Bewegung aus
  const frame = () => {
    // Aktiviere Button und setze Intervall zurück, wenn Zielposition erreicht
    if (x === 0 && y === 350) return clearInterval(id);

    // X-Achse Bewegung
    if (x <= 350 && x >= 0) {
      drawAnimation(x, y); // Bevor x den Wertebereich verlässt
      scaleX();
    } else { // Y-Achse Bewegung
      y += 1;
      drawAnimation(x, y);
      // Ende der Y-Bewegung und erste X-Bewegung die zum erfüllen der ersten if Bedingung führt
      if (y % 50 === 0) scaleX();
    }
  };

  // Intervall zurücksetzen und Animation ausführen
  clearInterval(id);
  setId(setInterval(frame, 2));
};
