const inquirer = require('inquirer');

// Prompts here
const prompts = [
  //questions here
];

// Perform check for answers
function processAnswers(answers) {
  // logic based on answers
}

// Export the function that triggers the Inquirer prompts and logic
module.exports = function runInquirerPrompts() {
  return inquirer.prompt(prompts)
    .then(processAnswers)
    .catch((error) => {
      if (error.isTtyError) {
        console.error('Prompt couldn\'t be rendered in the current environment');
      } else {
        console.error('Something else went wrong:', error);
      }
    });
};