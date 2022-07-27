// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generatePage = require('./README.md')
const { generateMarkdown } = require('./utils/generateMarkdown.js')

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
            message: 'If you would like other developers to contribute to this development, include guidelines for doing so here.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide tests for this application and steps on running them if you have them.'
        }
    ])
}
//questions().then(answers => console.log(answers))

questions()
    .then(data => {
        return generateMarkdown(data)
    })
    .then(writeFile => {
        console.log(writeFile);
        return copyFile()
    })
    .then(copyFile => {
        console.log(copyFile)
    })
    .catch(err => {
        console.log(err)
    })



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
