
// function renderLicenseBadge(license) {
//   if (data.badge === 'None') {
//     return licenseBadge = ''
//   }
//   else {
//     return badge = `![License: ${data.badge}](https://img.shields.io/badge/License-${data.badge}-green)`;
//   }
// }

// function renderLicenseLink(license) {
//   if (data.badge === 'None') {
//     return license = 'There is no license for this project'
//   }  
//   else {
//     return license = data.badge
//   }
// }

// renderLicenseSection(license) 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
#${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contribution](#contributions)
- [Contacts](#contacts)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing Guidelines
${data.contributions}

## Tests
${data.tests}

## How to Contribute
${data.contributions}

## Contacts
## ${data.additional}
[Email](mailto:${data.email})
[GitHub](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
