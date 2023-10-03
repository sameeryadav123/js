// Details
// Discussions
// LOCAL STORAGE EXERCISE
// Task:
// Create an HTML file with input fields to accept a user's name and age.
// Store this data in Local Storage when the user submits the form.
// Create a button to retrieve and display the stored data from Local Storage.
// Style the form and display area using CSS to make it visually appealing.
// You can make use of tables to show the data stored in the local storage.
// Guidelines:
// Create a JavaScript file index.js to write the logic for storing and retrieving data from Local Storage.


let storedAgeEl = document.getElementById('storedAge');
let storedNameEl = document.getElementById('storedName');
let userData = document.getElementById('information');
let storedDetails=document.getElementById('storedInfo');

userData.addEventListener("submit", function(event) {
    event.preventDefault();
    //  storedDetails.textContent="";

    const name = userData.querySelector('[name="name"]').value;
    const age = userData.querySelector('[name="age"]').value;

    localStorage.setItem('name', name);
    localStorage.setItem('age', age);

    storedAgeEl.textContent = age;
    storedNameEl.textContent = name;
});

const storedNames = localStorage.getItem('name');
const storedAges = localStorage.getItem('age');

if (storedNames && storedAges) {
    storedNameEl.textContent = storedNames;
    storedAgeEl.textContent = storedAges;
}