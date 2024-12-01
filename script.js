// Gezegensel zaman oranları (Dünya saatine göre bir gün uzunluğu ve Dünya gününe göre bir yıl uzunluğu)
const planetData = {
  Mercury: { dayInHours: 1407.5, yearInDays: 88 },
  Venus: { dayInHours: 5832.5, yearInDays: 225 },
  Earth: { dayInHours: 24, yearInDays: 365 },
  Mars: { dayInHours: 24.6, yearInDays: 687 },
  Jupiter: { dayInHours: 9.9, yearInDays: 4333 },
  Saturn: { dayInHours: 10.7, yearInDays: 10759 },
  Uranus: { dayInHours: 17.2, yearInDays: 30687 },
  Neptune: { dayInHours: 16.1, yearInDays: 60190 }
};

// Zaman birimlerinin saat cinsinden değerleri
const timeUnitsInHours = {
  hours: 1,
  days: 24,
  weeks: 168,      // 7 gün x 24 saat
  months: 730.5,   // 30.4375 gün x 24 saat
  years: 8766      // 365.25 gün x 24 saat (artık yıl dahil)
};

// Zaman birimlerinin Dünya gününe çevrim değerleri
const timeUnitsInDays = {
  hours: 1 / 24,
  days: 1,
  weeks: 7,
  months: 30.4375,
  years: 365.25
};

// Zaman birimini Dünya saatine dönüştürme
function convertToEarthHours(value, unit, planet) {
  const dayInHours = planetData[planet].dayInHours;
  const earthHours = value * (timeUnitsInHours[unit] / dayInHours);
  return earthHours;
}

// Dünya saatinden hedef gezegen zamanına dönüştürme
function convertFromEarthHours(earthHours, unit, planet) {
  const dayInHours = planetData[planet].dayInHours;
  const targetValue = earthHours * (dayInHours / timeUnitsInHours[unit]);
  return targetValue;
}

// Dönüştürme işlemi
function convertTime() {
  const inputPlanet = document.getElementById('inputPlanet').value;
  const inputTime = parseFloat(document.getElementById('inputTime').value);
  const inputUnit = document.getElementById('inputUnit').value;
  const outputPlanet = document.getElementById('outputPlanet').value;
  const outputUnit = document.getElementById('outputUnit').value;

  if (isNaN(inputTime) || inputTime <= 0) {
    document.getElementById('output').innerHTML = "<p>Lütfen geçerli bir zaman girin!</p>";
    return;
  }

  // 1. Başlangıç gezegeninden Dünya saatine dönüştür
  const earthHours = convertToEarthHours(inputTime, inputUnit, inputPlanet);

  // 2. Dünya saatinden hedef gezegene dönüştür
  const targetTime = convertFromEarthHours(earthHours, outputUnit, outputPlanet);

  // Sonucu göster
  document.getElementById('output').innerHTML = `
    ${inputTime} ${inputUnit} (${inputPlanet}) → ${targetTime.toFixed(2)} ${outputUnit} (${outputPlanet})
  `;
}
