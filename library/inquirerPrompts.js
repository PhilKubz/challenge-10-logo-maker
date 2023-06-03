const inquirer = require('inquirer');

const runInquirerPrompts = () => {
  const prompts = [
    {
      name: 'text',
      message: 'Enter the text (up to three characters):',
    },
    {
      name: 'textColor',
      message: 'Enter the text color:',
    },
    {
      name: 'shape',
      message: 'Enter the shape (circle, triangle, or square):',
    },
    {
      name: 'shapeColor',
      message: 'Enter the shape color:',
    },
  ];

  return inquirer.prompt(prompts);
};

module.exports = {
  runInquirerPrompts,
};