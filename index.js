const readline = require('readline');
const fs = require('fs');

// User input prompt function
function promptUser(question) {
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
  const shapeFilePath = `./shapes/${shape}.svg`;

  // read the shape file
  const shapeCode = fs.readFileSync(shapeFilePath, 'utf8');

  // variable for user input choices
  const svgCode = shapeCode
    .replace('SVG', text)
    .replace('${textColor}', textColor)
    .replace('${shapeColor}', shapeColor);

  return svgCode;
}

// save function as .svg file
function saveSVGToFile(svgCode) {
  fs.writeFileSync('logo.svg', svgCode);
  console.log('Generated logo.svg');
}

// shadpe function validation
function validateShape(shape) {
  const validShapes = ['circle', 'triangle', 'square'];
  return validShapes.includes(shape.toLowerCase());
}

// app run
async function run() {
  try {
    const text = await promptUser('Enter the text (up to three characters): ');
    const textColor = await promptUser('Enter the text color: ');
    let shape = await promptUser('Enter the shape (circle, triangle, or square): ');

    // shadpw validation message
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