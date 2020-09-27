const inquirer = require('inquirer');
const fs = require('fs');
// array of questions for user
const generateMarkdown = require('./utils/generateMarkdown.js');
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your Projects title?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please give a detailed step by step instruction on how to install your project.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github Username?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please include a license for you project. '
    }

];
inquirer
    .prompt(questions)
    .then(function(data){
        console.log(data);
        
        fs.writeFile("README.md", generateMarkdown(data), function(err) {
            if (err){
                console.log("error");
            };

            console.log("README file was successfully created!");
        });



});

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
