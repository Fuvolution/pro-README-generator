// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// This function returns the license link
// If there is no license, this function will return an empty string
function renderLicenseLink(license) {
  if(license !== "none"){
    return `\n* [License](#license)\n`;
  }
  return "";
}

// This function returns the license section of README
// If there is no license, this function will return an empty string
function renderLicenseSection(license) {
  if(license !== "none"){
    return `## License
    
        Licensed under the ${license} license.`;
  }
  return "";
}

// This function generates the markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributions}
## Tests
${data.testing}
## Questions
Please send your questions to ${data.username} [Here](mailto:${data.email})
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
