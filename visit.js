placesToVisit = [
  "New York City",
  "San Francisco",
  "Los Angeles",
  "Aspen",
  "Augusta",
];

function writePlaces() {
  placesToVisit.push("Jackson");

  for (let i = 0; i < placesToVisit.length; i++) {
    document.write(placesToVisit[i] + "<br>");
  }
}

writePlaces();

//Outputs the array that is given to the function.
function outputArray(theArray) {
  removeItems(theArray);
  theArray.sort(); //Sort the array alphabetically
  document.write(theArray);
}

let indexToRemove = 0;
let numberToRemove = 2;
// Removes two items from the array.
function removeItems(arr) {
  arr.splice(indexToRemove, numberToRemove);
}
