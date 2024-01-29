// These add the necessary packages for this application!
const inquirer = require('inquirer');
const fs = require('fs');

// This creates an array of questions where the user will answer each question! 
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Describe what is your project and what does it do.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select what license your project will have.",
        choices: ["Apache 2.0", "Boost Software License 1.0", "GNU General Public License 2.0", "ISC", "MIT", "The Unlicense", "none"],
    },
    {
        type: "input",
        name: "installation",
        message: "State all instructions needed for all required installations needed for your project.",
    },
    {
        type: "input",
        name: "usage",
        message: "State all technologies and languages that were used for your project.",
    },
    {
        type: "input",
        name: "contribution",
        message: "State all guidelines that any contributors to your project must follow.",
    },
    {
        type: "input",
        name: "testing",
        message: "State all instructions needed for anyone to test your project.",
    },
    {
        type: "input",
        name: "GitHub username",
        message: "What is your GitHub username?",
    },
    {
        type: "input", 
        name: "email",
        message: "What is your email address?",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
