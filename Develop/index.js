// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown  = require('./utils/generateMarkdown.js')

//array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is your project's title?",
            validate: (titleInput) => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project, including the what, why and how.',
            validate: (descriptionInput) => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide a description.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe the installation instructions for your project, what are the steps to install your project?',
            validate: (installationInput) => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please provide an installation method.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide examples of use and instructions on usage.',
            validate: (usageInput) => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide usage instructions.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Add contribution guidelines for others to use this development.',
            validate: (contributionsInput) => {
                if (contributionsInput) {
                    return true;
                } else {
                    console.log('Please provide contribution information')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide tests for this application and steps on running them.',
            validate: (testsInput) => {
                if (testsInput) {
                    return true;
                } else {
                    console.log('Please provide test information.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: (githubInput) => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please provide your Github username.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'additional',
            message: 'How would you like to be reached with additional questions?',
            validate: (additionalInput) => {
                if (additionalInput) {
                    return true;
                } else {
                    console.log('Please provide how you would like to be reached.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: (emailInput) => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please provide your email.')
                    return false;
                }
            }
        }
    ])
}

// // TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', generateMarkdown(data), function(err) {
        if (err) {
            return console.log(err)
        }
    })
}

// // TODO: Create a function to initialize app
function init() {
    questions()
        .then((data) => writeToFile(data))
}

// // Function call to initialize app
init();
