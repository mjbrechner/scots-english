'use strict';

console.log('hey');

const userInput = document.getElementById("text-input-box");
const displayedResults = document.getElementById("results-box");
let userInputValue;

async function getDictionary() {
    const response = await fetch("javascript/dictionary.json");
    const data = await response.json();
    // console.log(data);
    // console.log(`Hullo: ${data[1].scots}`);
    // const x = "abee";
    // console.log(x);

    // search -start
    for (let i = 0; i < data.length; i++) {
        if (data[i].searchInput.includes(userInputValue)) {
            console.log(`${userInputValue} in Scots means ${data[i].english}.`);
            console.log(`searchInput is ${data[i].searchInput}.`);

            // Display the results -- START
            let displayedDiv1 = document.createElement("div");
            let displayedDiv2 = document.createElement("div");
            let displayedDiv3 = document.createElement("div");

            displayedDiv1.innerText = `${data[i].scots} `;
            displayedDiv2.innerText = `${data[i].pos}`;
            displayedDiv3.innerText = `${data[i].definition}`;

            displayedDiv1.setAttribute("id", "definition-display-1");
            displayedDiv2.setAttribute("id", "definition-display-2");
            displayedDiv3.setAttribute("id", "definition-display-3");

            displayedResults.appendChild(displayedDiv1);
            displayedResults.appendChild(displayedDiv2);
            displayedResults.appendChild(displayedDiv3);
            // Display the results -- END}
        }
    }
    // search -end




}


userInput.addEventListener("keyup", (event) => {
        userInputValue = userInput.value;
        getDictionary();
        console.log(userInputValue);
        displayedResults.innerText = `${userInputValue}_`;

        function clearResults(displayedResults) {
            while (displayedResults.firstChild) {
                displayedResults.removeChild(displayedResults.firstChild);
            }
        }
        displayedResults.innerHTML = "";
    }

);

// TO DO
// make the search for a word create a new list item for every hit. Right now, only the last hit is di
// displayed, but if there are multiple hits, they all  need to be visible,
// stacked up nicely in a list.
// But the list needs must vanish when another character is added in the event listener