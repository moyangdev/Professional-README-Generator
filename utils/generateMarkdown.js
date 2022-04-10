// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contribution)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ![badge](http://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  For questions, please reach out at ${data.email}. <br />
  For additional projects, please check out: https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
