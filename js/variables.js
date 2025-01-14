export const container = document.getElementById('container');
export const elem = document.getElementById('animate');
export const btn = document.querySelector('#start');
export let id = null;

// Funktion zum Setzen von `id` (wird benötigt, um `id` zu aktualisieren)
export const setId = (newId) => {
  id = newId;
};
