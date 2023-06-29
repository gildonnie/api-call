
async function logJSONData() {
  const response = await fetch("https://catfact.ninja/fact");
  const jsonData = await response.json();
  console.log(jsonData)

  const fact = jsonData.fact;
  const jsonDataElement = document.getElementById("catfact");
  jsonDataElement.textContent = JSON.stringify(fact);
}

logJSONData();