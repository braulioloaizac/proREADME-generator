import inquirer from "inquirer";
import fs from "fs";
import generateREADME from "./pro-template.js";

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your project title?: '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project: '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide a step-by-step description of how to get the development environment running (Installation instructions) : '
        
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use: '
        
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'List your collaborators, if any, with links to their GitHub profiles: '
    },
    {
        type: 'checkbox',
        name: 'licence',
        message: 'Select your licence type: ',
        choices: ['GNU AGPLv3','GNU GPLv3','GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0','MIT License','Boost Software License 1.0','The Unlicense']
    },
    {
        type: 'input',
        name: 'author',
        message: 'Enter your name:'
    },
    {
        type: 'input',
        name: 'githubprofile',
        message: 'Enter your GitHub profile: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email: '
    }

];


 function init() {
    
    inquirer
    .prompt(questions)
    .then((answers) => {
        
        console.log(JSON.stringify(answers, null, '  '));

        fs.writeFile('./README.md', generateREADME(answers), err => {
            if (err) throw err;

            console.log('README was generated successful. Check out README.md to see the output!');
         }    
        )
    })

 }

// // Function call to initialize app
init();

