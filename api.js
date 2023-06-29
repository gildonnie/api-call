
async function logJSONData() {
  // Making the initial Call
  const response = await fetch("https://catfact.ninja/fact");
  const jsonData = await response.json();
  // Logging the data into the console. Inspect the page and go to the console tab to see the data that is in an a object {}.
  console.log(jsonData)

  //Making a variable name fact for the cat fact and setting the data to it. jsonData is the whole data the .fact is drilling into the object to only get the fact.
  const fact = jsonData.fact;

  //I access the <p> tag with the id of catFact. This allows us to access and modify its content. I set it to a new variable called jsonDataElement
  const jsonDataElement = document.getElementById("catfact");
  
  //The jsonDataElement is the p tag we target and we use textContent to replace any content in it with what we want in this case it will be the cat fact. 
  //I use JSON.stringify to make the fact object into a string so it can be read in the html
  jsonDataElement.textContent = JSON.stringify(fact);
}

//Calling the function
logJSONData();