import inquirer from "inquirer";
import fs from "fs";

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide a step-by-step description of how to get the development environment running. (Installation instructions)'
        
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
        
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'List your collaborators, if any, with links to their GitHub profiles.'
    },
    {
        type: 'checkbox',
        name: 'licence',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        choices: ['GNU AGPLv3','GNU GPLv3','GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0','MIT License','Boost Software License 1.0','The Unlicense']
    },

];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    // inquirer.prompt(questions).then((answers) => {
//     console.log(JSON.stringify(answers, null, '  '));
//   });
    
//}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

