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
      default: 'npm i',
      message: 'what command should be run to install dependencies',
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
      name: 'tests',
      default: 'npm test',
      message: 'What command should be run to test',
    },
    {
      type: 'list',
      message: 'What license does your project have',
      name: 'license',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
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

const generateReadMe = ({title, description, installation, usage, contributing, tests, license, github, mail}) =>
`
# ${title}
![License](https://img.shields.io/static/v1?label=license&message=${license.split(' ').join('+')}&color=blue)
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
to install necessary dependencies, run the following command;
\`\`\`
${installation}
\`\`\`
## Usage
${usage}
## License
This Project is under ${license} license.
## Contributing
${contributing} 
## Tests 
To test the project please run the following command:
\`\`\`
${tests}
\`\`\`
## Questions
If you have any other question about the repo you can contact me via mail at ${mail}<br>
Get to know more of my work at my Github: [${github}](https://github.com/${github})
`;


function init() {
inquirer
  .prompt(questions)
  .then((answers) => {
    const readMeContent = generateReadMe(answers);
    fs.writeFile('README-test.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created Readme.md!')
    );
  });
}

init();

