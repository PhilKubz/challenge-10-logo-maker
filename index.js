const fs = require('fs');
const { Triangle, Circle, Square, validateShape } = require('./library/shapes');
const { runInquirerPrompts } = require('./library/inquirerPrompts.js');

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
    const answers = await runInquirerPrompts();

    const { text, textColor, shape, shapeColor } = answers;

    const svgCode = generateSVG(text, textColor, shape, shapeColor);
    saveSVGToFile(svgCode);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

run();