// This adds all packages needed for this application!
const inquirer = require('inquirer');
const fs = require('fs');

/* These will help get functions from generateMarkdown.js file 
   to this file for the writeToFile function to generate a README
*/
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");

// This creates an array of questions the user must answer!
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
        type: "checkbox",
        name: "license",
        message: "What is the license your project will have?",
        choices: ["Apache 2.0","GNU General Public License 3.0", "ISC", "MIT", "The Unlicenser", "none"],
    },
    {
        type: "input",
        name: "installation",
        message: "State all instructions needed for installing all dependencies needed for your project.", 
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

// This function writes the README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// This function initializes app!
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./dist/README.md", generateMarkdown( responses ));
    });
}

// This function calls to initialize app!
init();
