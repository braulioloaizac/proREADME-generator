const generateREADME = (answers) =>{

    //Licence badges array
    const badges = [
        '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
        '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
        '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
        '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
        ''
    ];


    // README.md Template 
    return`
# ${answers.name}

## Description
${answers.description}

${badges[answers.licence - 1]}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [License](#license)
- [Additional Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.contributors}

## Tests
${answers.tests}

## License
${answers.licence}

## Questions

[Github Profile](https://github.com/${answers.githubprofile})
Email : ${answers.email}
${answers.addinst}

`
}

export default generateREADME;