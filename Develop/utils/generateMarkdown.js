// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of contents

- [Description](#Description)
- [Installation](#Installation)
- [Contributors](#Contributors)
- [Licence](#Licence)
- [Repository](#Repository)
- [GitHub Info](#GitHub)

  ## Description

  ${data.description}

  ## Installation 

  ${data.installation}

  ##Contributors

  ${data.contributors}

  ## License

  ${data.license}

  ## Repository

  For the Repo please visit https://github.com/${data.username}/${data.repo}

  ## GitHub

  ${data.username}
  If you have any questions please contatact https://github.com/${data.username} 







`;
}

module.exports = generateMarkdown;
