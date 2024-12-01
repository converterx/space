const planetRatios = {
  "Mercury": { day: 1407.5, year: 88 },   // Merkür
  "Venus": { day: 5832.5, year: 225 },    // Venüs
  "Earth": { day: 24, year: 365 },        // Dünya
  "Mars": { day: 24.6, year: 687 },       // Mars
  "Jupiter": { day: 9.9, year: 4333 },    // Jüpiter
  "Saturn": { day: 10.7, year: 10759 },   // Satürn
  "Uranus": { day: 17.2, year: 30687 },   // Uranüs
  "Neptune": { day: 16.1, year: 60190 }   // Neptün
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

  // Girilen birimi Dünya saatine çevir
  const earthHours = convertToEarthHours(inputTime, inputUnit, inputPlanet);

  // Dünya saatinden hedef gezegene dönüştür
  const targetTime = convertFromEarthHours(earthHours, inputUnit, outputPlanet);

  document.getElementById('output').innerHTML = `
    <h2>${inputTime} ${inputUnit} (${inputPlanet}) → ${targetTime.toFixed(2)} ${inputUnit} (${outputPlanet})</h2>
  `;
}

// Girdi birimini Dünya saatine çevirme fonksiyonu
function convertToEarthHours(value, unit, planet) {
  const dayInHours = planetRatios[planet].day;

  switch (unit) {
    case "hours":
      return value;
    case "days":
      return value * dayInHours;
    case "weeks":
      return value * dayInHours * 7;
    case "months":
      return value * dayInHours * 30;
    case "years":
      return value * dayInHours * planetRatios[planet].year;
    default:
      return value;
  }
}

// Dünya saatinden hedef gezegen birimine dönüştürme fonksiyonu
function convertFromEarthHours(hours, unit, planet) {
  const dayInHours = planetRatios[planet].day;
  const yearInDays = planetRatios[planet].year;

  switch (unit) {
    case "hours":
      return hours / (24 / dayInHours);
    case "days":
      return hours / dayInHours;
    case "weeks":
      return hours / (dayInHours * 7);
    case "months":
      return hours / (dayInHours * 30);
    case "years":
      return hours / (dayInHours * yearInDays);
    default:
      return hours;
  }
}
