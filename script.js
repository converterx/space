const planetRatios = {
  "Mercury": 1407.5,   // Merkür günü (saat)
  "Venus": 5832.5,     // Venüs günü (saat)
  "Earth": 24,         // Dünya günü (saat)
  "Mars": 24.6,        // Mars günü (saat)
  "Jupiter": 9.9,      // Jüpiter günü (saat)
  "Saturn": 10.7,      // Satürn günü (saat)
  "Uranus": 17.2,      // Uranüs günü (saat)
  "Neptune": 16.1      // Neptün günü (saat)
};

function convertTime() {
  const inputPlanet = document.getElementById('inputPlanet').value;
  const inputTime = parseFloat(document.getElementById('inputTime').value);
  const inputUnit = document.getElementById('inputUnit').value;
  const outputPlanet = document.getElementById('outputPlanet').value;

  if (isNaN(inputTime) || inputTime <= 0) {
    document.getElementById('output').innerHTML = "<p>Lütfen geçerli bir zaman girin!</p>";
    return;
  }

  const earthHours = convertToHours(inputTime, inputUnit, inputPlanet);
  const targetHours = (earthHours * planetRatios["Earth"]) / planetRatios[outputPlanet];
  const result = convertFromHours(targetHours, inputUnit, outputPlanet);

  document.getElementById('output').innerHTML = `
    <h2>${inputTime} ${inputUnit} (${inputPlanet}) → ${result.toFixed(2)} ${inputUnit} (${outputPlanet})</h2>
  `;
}

function convertToHours(value, unit, planet) {
  const ratio = planetRatios[planet];
  if (unit === "days") return value * ratio;
  if (unit === "weeks") return value * ratio * 7;
  if (unit === "months") return value * ratio * 30;
  if (unit === "years") return value * ratio * 365;
  return value;  // Saat
}

function convertFromHours(hours, unit, planet) {
  const ratio = planetRatios[planet];
  if (unit === "days") return hours / ratio;
  if (unit === "weeks") return hours / (ratio * 7);
  if (unit === "months") return hours / (ratio * 30);
  if (unit === "years") return hours / (ratio * 365);
  return hours;
}
