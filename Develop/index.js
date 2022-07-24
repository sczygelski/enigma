// TODO: Include packages needed for this application
const inquirer = require('inquirer')

//array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is your project's title?"
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project, including the what, why and how.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe the installation instructions for your project, what are the steps to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide examples of use and instructions on usage.'
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'If you would like other developers to contribute to this development, include guidelines for doing so here.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Write tests for this application and provide steps on running them.'
        }
    ])
}
questions().then(answers => console.log(answers))




// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
