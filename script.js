//your JS code here. If required.
const output = document.getElementById("output");

// Show loading initially
const loadingRow = document.createElement("tr");
loadingRow.innerHTML = `<td colspan="2">Loading...</td>`;
output.appendChild(loadingRow);

// Function to create a promise with random delay between 1-3 seconds
function createPromise(id) {
  const delay = Math.random() * 2 + 1; // 1 to 3 seconds
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, time: delay.toFixed(3) });
    }, delay * 1000);
  });
}

const startTime = performance.now();
const promises = [1, 2, 3].map(i => createPromise(i));

// Wait for all promises to resolve
Promise.all(promises).then(results => {
  const totalTime = ((performance.now() - startTime) / 1000).toFixed(3);

  // Remove loading row
  output.innerHTML = "";

  // Insert rows for each promise
  results.forEach((result, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>Promise ${i + 1}</td><td>${result.time}</td>`;
    output.appendChild(row);
  });

  // Insert total row
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `<td><strong>Total</strong></td><td><strong>${totalTime}</strong></td>`;
  output.appendChild(totalRow);
});
