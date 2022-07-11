import inquirer from "inquirer";
import fs from "fs";
//Import the template function
import generateREADME from "./pro-template.js";


const licences = [
    '1. GNU AGPLv3',
    '2. GNU GPLv3',
    '3. GNU LGPLv3',
    '4. Mozilla Public License 2.0',
    '5. Apache License 2.0',
    '6. MIT License',
    '7. Boost Software License 1.0',
    '8. The Unlicense']

      
//Questions to be prompt
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your project title? (Required): ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project: (Required)'
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
        type: 'input',
        name: 'tests',
        message: 'Provide your application tests, and how to do them: '
    },
    {   //Returns the number of the licence
        type: 'list',
        name: 'licence',
        message: 'Select your licence type: (Required)',
        choices: licences,
        
    },
    {
        type: 'input',
        name: 'author',
        message: 'Enter your name: (Required)'
    },
    {
        type: 'input',
        name: 'githubprofile',
        message: 'Enter your GitHub profile:(Required) '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email: (Required) '
    },
    {
        type: 'input',
        name: 'addinst',
        message: 'Any additional instructions to reach you for Q&A: '
    }

];


 function init() {
    
    inquirer
    .prompt(questions)
    .then((answers) => {
        
        //console.log(JSON.stringify(answers, null, '  '));
        //console.log(answers.licence)
        
        //Creates and overwrites the file
        fs.writeFile('./dist/README.md', generateREADME(answers), err => {
            if (err) throw err;

            console.log('README was generated successful. Check out README.md to see the output!');
         }    
        )
    })

 }

// // Function call to initialize app
init();

