const planetRatios = {
  "Mercury": 1407.5,   // Saat
  "Venus": 5832.5,
  "Earth": 24,
  "Mars": 24.6,
  "Jupiter": 9.9,
  "Saturn": 10.7,
  "Uranus": 17.2,
  "Neptune": 16.1
};

function convertTime() {
  const inputPlanet = document.getElementById('inputPlanet').value;
  const inputTime = parseFloat(document.getElementById('inputTime').value);
  const outputPlanet = document.getElementById('outputPlanet').value;

  if (isNaN(inputTime) || inputTime <= 0) {
    document.getElementById('output').innerHTML = "<p>Lütfen geçerli bir saat girin!</p>";
    return;
  }

  const earthHours = (inputTime * planetRatios[inputPlanet]) / 24;
  const targetHours = (earthHours * 24) / planetRatios[outputPlanet];

  document.getElementById('output').innerHTML = `
    <h2>${inputTime} Saat ${inputPlanet} → ${targetHours.toFixed(2)} Saat ${outputPlanet}</h2>
  `;
}
