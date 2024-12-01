const planetRatios = {
  "Mercury": { day: 1407.5, year: 88 },   // Merkür
  "Venus": { day: 5832.5, year: 225 },    // Venüs
  "Earth": { day: 24, year: 365 },        // Dünya
  "Mars": { day:
  }

  // Girilen zamanı Dünya saatine dönüştür
  const earthHours = convertToEarthHours(inputTime, inputUnit, inputPlanet);

  // Tüm gezegenlerdeki karşılıkları hesapla
  let outputHTML = `<h2>${inputTime} ${inputUnit} (${inputPlanet}) on all planets:</h2><ul>`;
  for (let planet in planetRatios) {
    if (planet !== inputPlanet) {
      outputHTML += `<li><strong>${planet}:</strong><br>
        ${convertFromEarthHours(earthHours, "hours", planet).toFixed(2)} hours<br>
        ${convertFromEarthHours(earthHours, "days", planet).toFixed(2)} days<br>
        ${convertFromEarthHours(earthHours, "weeks", planet).toFixed(2)} weeks<br>
        ${convertFromEarthHours(earthHours, "months", planet).toFixed(2)} months<br>
        ${convertFromEarthHours(earthHours, "years", planet).toFixed(2)} years
      </li>`;
    }
  }
  outputHTML += "</ul>";

  document.getElementById('output').innerHTML = outputHTML;
}

function convertToEarthHours(value, unit, planet) {
  const dayInHours = planetRatios[planet].day;
  const yearInDays = planetRatios[planet].year;

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
      return value * dayInHours * yearInDays;
    default:
      return value;
  }
}

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
