// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ##Description

  ${data.description}

  ##Installation 

  ${data.installation}

  ##Contributors

  

  ##License

  ${license}

  ## Repository


  ## GitHub

  ${data.username}







`;
}

module.exports = generateMarkdown;
