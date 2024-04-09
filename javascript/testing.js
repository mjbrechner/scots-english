// I worked on this file months ago. Just uploading it here for the time being in cse it proves useful.

'use strict';

const userInput = document.getElementById("search-box");
const displayedResults = document.getElementById("results-box");
let userInputValue = userInput.value.toLowerCase();

// On load, put focus on the search box
document.getElementById("search-box").focus();

// Dictionary fetch & lookup--START
async function getDictionary() {
    const response = await fetch("javascript/dictionary.json");
    const data = await response.json();

    let numberOfDictionaryMatches = 0;

    // Search for dictionary matches--START
    for (let i = 0; i < data.length; i++) {
        if (data[i].searchInput.includes(userInputValue)) {
            numberOfDictionaryMatches++

            // Display the results--START
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
            // Display the results--END
        }
    }
    // Search for dictionary matches--END


    // Toggle visibility of results--START
    // if (numberOfDictionaryMatches === 0) {
    if (userInputValue.length === 0) {
        displayedResults.style.display = "none";
    } else {
        displayedResults.style.display = "grid";
    }
    // Toggle visibility of results--END
}
// Dictionary fetch & lookup--END



// Dictionary fetch & random word lookup--START
async function randomWord() {
    const response = await fetch("javascript/dictionary.json");
    const data = await response.json();
    let randomNumber = Math.floor(Math.random() * data.length);

    // Display the results--START
    let displayedDiv1 = document.createElement("div");
    let displayedDiv2 = document.createElement("div");
    let displayedDiv3 = document.createElement("div");

    displayedDiv1.innerText = `${data[randomNumber].scots} `;
    displayedDiv2.innerText = `${data[randomNumber].pos}`;
    displayedDiv3.innerText = `${data[randomNumber].definition}`;

    displayedDiv1.setAttribute("id", "definition-display-1");
    displayedDiv2.setAttribute("id", "definition-display-2");
    displayedDiv3.setAttribute("id", "definition-display-3");

    displayedResults.appendChild(displayedDiv1);
    displayedResults.appendChild(displayedDiv2);
    displayedResults.appendChild(displayedDiv3);
    // Display the results--END

    displayedResults.style.display = "grid";
}
// Dictionary fetch & random word lookup--END













// userInput.addEventListener("keyup", (event) => {
//     userInputValue = userInput.value.toLowerCase();
//     displayedResults.innerHTML = "";
//     getDictionary();
// });

function searchButtonClick() {
    userInputValue = userInput.value.toLowerCase();
    displayedResults.innerHTML = "";
    getDictionary();
}

function searchRandomClick() {
    userInputValue = userInput.value.toLowerCase();
    displayedResults.innerHTML = "";
    randomWord();
}


// TO DO
// make the search for a word create a new list item for every hit. Right now, only the last hit is di
// displayed, but if there are multiple hits, they all  need to be visible,
// stacked up nicely in a list.
// But the list needs must vanish when another character is added in the event listener
// You still need the search button, and it does the same thing as keyup except that
// (1) it also alerts if no word is found at all; ans
// (2) it only shows exact matches with userInputValue... e.g. includes(userInputValue)
// Though at the moment, includes(userInputValue) is actually found in keyup... maybe thatcan be relaxed to show more hits.

// Decide whether or not to use numberOfDictionaryMatches, such as in visibility toggling

// What if the Scots entries were all shown in uppercase?