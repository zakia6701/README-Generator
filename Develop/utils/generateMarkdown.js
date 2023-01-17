// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === "None") {
    return "";
  } else {
    if (data.license === "MIT") {
      licenseBadge =
        "![License](https://img.shields.io/badge/License-MIT-yellow.svg)";
      return licenseBadge;
    }
    if (data.license === "Apache") {
      licenseBadge =
        "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
      return licenseBadge;
    }
    if (data.license === "Boost") {
      licenseBadge =
        "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
      return licenseBadge;
    }
    if (data.license === "BDS 3-Clause") {
      licenseBadge =
        "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
      return licenseBadge;
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let licenseLink;
  if (data.license === "None") {
    return "";
  } else {
    if (data.license === "MIT") {
      licenseLink =
        "[MIT License](https://opensource.org/licenses/MIT)";
      return licenseLink;
    }
    if (data.license === "Apache") {
      licenseLink =
        "[Apache License](https://opensource.org/licenses/Apache-2.0)";
      return licenseLink;
    }
    if (data.license === "Boost") {
      licenseLink =
        "[Boost License](https://www.boost.org/LICENSE_1_0.txt)";
      return licenseLink;
    }
    if (data.license === "BDS 3-Clause") {
      licenseLink =
        "[BDS 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)";
      return licenseLink;
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license === "None") {
    return "";
  } else {
    return `## License
${renderLicenseBadge(data)}
${renderLicenseLink(data)}`;
  }
}

function renderLicenseTOC(data) {
  if (data.license == "None") {
    return ""
  } else {
    return `* [License](#license)`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseTOC(data)}
* [Contributors](#contributor)
* [Test](#test)
* [Questions](#questions)

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
${renderLicenseSection(data)}
  ## Contibutors
  ${data.contributions}
  ## Test 
  ${data.tests}
  ## Questions
  If you have any questions about this project, you can contact me at ${data.email} or https://github/${data.github}
`;
}

module.exports = generateMarkdown;
