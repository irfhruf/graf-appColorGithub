// Sliders
const redRange = document.getElementById("redRange");
const greenRange = document.getElementById("greenRange");
const blueRange = document.getElementById("blueRange");

// Inputs numéricos
const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

// Color picker
const colorPicker = document.getElementById("colorPicker");

// UI
const colorBox = document.getElementById("colorBox");
const rgbValue = document.getElementById("rgbValue");
const hexValue = document.getElementById("hexValue");

// Convertir RGB a HEX
function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map(x => {
        const hexPart = x.toString(16);
        return hexPart.length === 1 ? "0" + hexPart : hexPart;
      })
      .join("")
  );
}

// Convertir HEX a RGB
function hexToRgb(hex) {
  let bigint = parseInt(hex.slice(1), 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;
  return [r, g, b];
}

// Función principal para actualizar color
function updateColor(r, g, b) {
  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));

  // Actualizar sliders e inputs
  redRange.value = r;
  greenRange.value = g;
  blueRange.value = b;

  redInput.value = r;
  greenInput.value = g;
  blueInput.value = b;

  const rgb = `rgb(${r}, ${g}, ${b})`;
  const hex = rgbToHex(r, g, b);

  // Actualizar UI
  colorBox.style.backgroundColor = rgb;
  rgbValue.textContent = rgb;
  hexValue.textContent = hex.toUpperCase();
  colorPicker.value = hex;
}

// Eventos sliders
[redRange, greenRange, blueRange].forEach(() => {
  redRange.addEventListener("input", () => {
    updateColor(+redRange.value, +greenRange.value, +blueRange.value);
  });
  greenRange.addEventListener("input", () => {
    updateColor(+redRange.value, +greenRange.value, +blueRange.value);
  });
  blueRange.addEventListener("input", () => {
    updateColor(+redRange.value, +greenRange.value, +blueRange.value);
  });
});

// Eventos inputs numéricos
[redInput, greenInput, blueInput].forEach(() => {
  redInput.addEventListener("input", () => {
    updateColor(+redInput.value || 0, +greenInput.value || 0, +blueInput.value || 0);
  });
  greenInput.addEventListener("input", () => {
    updateColor(+redInput.value || 0, +greenInput.value || 0, +blueInput.value || 0);
  });
  blueInput.addEventListener("input", () => {
    updateColor(+redInput.value || 0, +greenInput.value || 0, +blueInput.value || 0);
  });
});

// Evento color picker
colorPicker.addEventListener("input", () => {
  const [r, g, b] = hexToRgb(colorPicker.value);
  updateColor(r, g, b);
});

// Inicializar
updateColor(0, 0, 0);