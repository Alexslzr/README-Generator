/*const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });*/

const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter the description of the Project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'what are the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'please introduce the usage information',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'what are the contribution guidelines?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your Github Username?',
    },
    {
      type: 'input',
      name: 'mail',
      message: 'What is your mail?',
    }
];

const generateReadMe = ({title, description, installation, usage,contributing, tests, licence, github, mail}) =>
`
# ${title}

## Description
${description}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${installation}
## Usage
${usage}
## License
${licence}
## Contributing
${contributing} 
## Tests 
${tests}
## Questions
How to reach me <br>
[Github Link](https://github.com/${github})

Mail: ${mail}
`;


function init() {
inquirer
  .prompt(questions)
  .then((answers) => {
    const readMeContent = generateReadMe(answers);

    fs.writeFile('Readme.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created Readme.md!')
    );
  });
}

init();



/*
with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN I enter my project title
THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README*/
