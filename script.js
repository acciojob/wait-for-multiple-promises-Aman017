//your JS code here. If required.
const output = document.getElementById("output");

function createPromise(index) {
  return new Promise((resolve) => {
    const time = (Math.random() * 2 + 1).toFixed(3); // Random time between 1 and 3 seconds
    setTimeout(() => {
      resolve({ index, time });
    }, time * 1000);
  });
}

// Create 3 promises
const promises = [createPromise(1), createPromise(2), createPromise(3)];

Promise.all(promises).then((results) => {
  // Remove loading row
  output.innerHTML = "";

  // Populate table with resolved values
  results.forEach((result) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>Promise ${result.index}</td>
      <td>${result.time}</td>
    `;
    output.appendChild(row);
  });

  // Calculate total time (longest time)
  const totalTime = Math.max(...results.map((result) => parseFloat(result.time))).toFixed(3);

  // Add total row
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>${totalTime}</strong></td>
  `;
  output.appendChild(totalRow);
});