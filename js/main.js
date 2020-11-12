/* ====== DOM (Document Object Model) ======= */
/*
What is the DOM? A representation for the specific page. It is
used to find and modify HTML on a webpage.

What can we do with the DOM?
    - Find Elements
    - Make new Elements
    - Update Elements 
    - Change properties on Elements
    - Listen for events

*/

const h1 = document.querySelector('h1')
h1.classList.add('color-change')
console.log(h1)

// Example to show Username with button click
function displayUserInfo(user_info) {
    element = document.getElementById('sampleText');
    element.innerHTML = user_info
}

// Create an Element
let button = document.createElement('button')
button.innerHTML = 'Cogito, ergo sum';
document.body.append(button)

// // Getting Elements by querying for a specific selector
// let buttonElement = document.querySelectorAll('button')[1];
//  // event listener and function on JS
// buttonElement.onclick = showRandomText = () => {
//     let showText = 'Code or die';
//     let text = document.createElement('h3');
//     text.innerHTML = showText;
//     document.body.append(text);  
// }

// Grab from the HTML using ID
const form = document.getElementById('testForm');
form.onsubmit = submitForm;
// Function to grab form data
function submitForm(event) {
    event.preventDefault(); //so the name won't load until the input is done
    
    console.log(document.getElementById('first-name').value);
    console.log(document.querySelector('#last-name').value);
}


// Submit form with regular button
function submitButtonForm() {
    document.querySelector('#username').value;
    document.querySelector('#password').value;
}
/*
  Steps to work with the DOM
    1) - Selector
    2) - Event Listener
    3) - Function

*/


// Selectors
const colorSection = document.querySelector('#colors');

// Event Listeners
colorSection.addEventListener('click', changeColor);

// Function
function changeColor(e) {
    document.body.style.backgroundColor = e.target.dataset.hex;
}

/* ======= API ======= */
/*
    Reading API Documentation
    1) Find base url
    2) Look for endpoints (after slashes)
    3) Look for data I can query in the url
*/


function getJson() {
    let season = document.querySelector('#season').value;
    let round = document.querySelector('#round').value;
    fetch(`http://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    
    //Place Name on page
    let givenName = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName
    let given_name_text = document.createElement('#givenName')
    given_name_text.innerHTML = givenName
    document.body.append(given_name_text)

    //Place Family Name on Page
    let familyName = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName
    let familyName_text = document.querySelector('familyName') 
    familyName_text.innerHTML = familyName

    // get first 3 Constructors for F1 Cars
    for (let i=0; i<3; i++) {
        let constructors_name = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name
        let display_constructors = document.createElement('h1')
        display_constructors.innerHTML = constructors_name
        document.body.append(display_constructors)
    }

    })
}
