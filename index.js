// This adds all packages needed for this application!
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?", 
    },
    {
        type: "input",
        name: "description",
        message: "Describe what your project is and what does it do?", 
    },
    {
        type: "input",
        name: "license",
        message: "What is the license your project will have?",
        choices: [],
    },
    {
        type: "input",
        name: "installation",
        message: "State all instructions needed for all needed installations for your project.", 
    },
    {
        type: "input",
        name: "usage",
        message: "State all technologies and languages your project uses.", 
    },
    {
        type: "input",
        name: "contributions",
        message: "State all guidelines for any contributors for your project must follow.", 
    },
    {
        type: "input",
        name: "testing",
        message: "State all instructions needed for anyone to test your project.", 
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?", 
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?", 
    },  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
