// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
//const questions = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Please enter a description of your project:"
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide installation instructions:",
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide usage information:",
        },
        {
            type: "input",
            name: "contribution",
            message: "What are the contribution guidelines?"
        },
        {
            type: "input",
            name: "test",
            message: "What are the test instructions?"
        },
        {
            type: "list",
            name: "license",
            message: "Please select a license for your application from the list of options:",
            choices: ['MIT', 'GNU', 'Apache', 'BSD', 'ISC', 'Other']
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub Username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        }
    ]);
} 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

promptUser();