const fs = require('fs');
const readline = require('readline');
const { Triangle, Circle, Square, validateShape } = require('./library/shapes');

// User input prompt function
async function promptUser(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

// SVG code generator
function generateSVG(text, textColor, shape, shapeColor) {
  let shapeInstance;

  switch (shape.toLowerCase()) {
    case 'circle':
      shapeInstance = new Circle();
      break;
    case 'triangle':
      shapeInstance = new Triangle();
      break;
    case 'square':
      shapeInstance = new Square();
      break;
    default:
      throw new Error('Invalid shape. Please enter one of the following: circle, triangle, or square.');
  }

  shapeInstance.setColor(shapeColor);

  let svgCode = shapeInstance.render();

  // SVG replace for inputs from prompts
  svgCode = svgCode.replace(/<text\b[^>]*>(.*?)<\/text>/s, `<text x="150" y="110" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>`);
  svgCode = svgCode.replace(/fill="(.*?)"/s, `fill="${shapeColor}"`);

  return svgCode;
}

// Save function as .svg file
function saveSVGToFile(svgCode) {
  fs.writeFileSync('logo.svg', svgCode);
  console.log('Generated logo.svg');
}

// App run
async function run() {
  try {
    const text = await promptUser('Enter the text (up to three characters): ');
    const textColor = await promptUser('Enter the text color: ');
    let shape = await promptUser('Enter the shape (circle, triangle, or square): ');

    // Shape validation message
    while (!validateShape(shape)) {
      console.log('Invalid shape. Please enter one of the following: circle, triangle, or square.');
      shape = await promptUser('Enter the shape (circle, triangle, or square): ');
    }

    const shapeColor = await promptUser('Enter the shape color: ');

    const svgCode = generateSVG(text, textColor, shape, shapeColor);
    saveSVGToFile(svgCode);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

run();