// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "what is the name of the your  project?",
    name: "title",
  },
  {
    type: "input",
    message: "Give a breif description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "what dependencies was used for this project?",
    name: "installation",
  },
  {
    type: "input",
    message: "what are the steps taken to make this app run?",
    name: "usage",
  },
  {
    type: "list",
    message: "what kinf of license is needed?",
    name: "license",
    choices: ["None", "MIT", "Apache", "Boost", "BDS 3-Clause"]
  },
  {
    type: "input",
    message: "who developed this project?",
    name: "contributions",
  },
  {
    type: "input",
    message: "how did you test this project?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "github",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(data),
      err ? console.log(err) : console.log("README has been created!");
  });
}

// TODO: Create a function to initialize app
function init() {}
inquirer.prompt(questions).then(function (data) {
  writeToFile("README.md", generateMarkdown(data));
});

// Function call to initialize app
init();
