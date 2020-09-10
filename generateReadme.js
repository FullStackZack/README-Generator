function generateReadme(data) {

    return 

    `
    # ${data.title}

    ## Description
    ${data.description}

    ## Table of Contents
    [Installation](#installation)
    [Usage](#usage)
    [Contributing](#contributing)
    [License](#license)
    [Test](#test)
    [Questions](#questions)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contributing
    ${data.contributing}

    ## License
    ${data.license}

    ## Tests
    ${data.test}

    ## Questions
    Contact:

    Github: [${data.username}](https://github.com/${data.username})

    Email: [${data.email}]

    `;
}