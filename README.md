# SVG Logo Generator
The SVG Logo Generator is a command-line application that allows you to generate simple logos for your projects. It prompts you for text, text color, shape, and shape color, and generates an SVG file that represents your logo. SVG logos provide a scalable image that does not compromise quality when the size is altered - perfect for logos!

## Installation
Clone the repository or download the source code.

Navigate to the project directory and open the terminal.

Install the dependencies by running the following command:

`npm install` or `npm i` is used in order to install Node package

`npm install jest` is used in order to install Jest package

`npm install inquirer@7.3.3` is used to install the inquirer package

## Usage
To run the Logo Generator application, execute the following command in your terminal:

`node index.js`

#### The application will prompt you for the following inputs:

Text: Enter the text for your logo (up to three characters).
Text Color: Enter the color for the text. -- You can use color keywords (e.g., "red") or hexadecimal color codes (e.g., "#FF0000").
Shape: choose from: circle, triangle, or square. (It will provide invalid option if input does not match these choices)
Shape Color: Enter the color for the shape. -- You can use color keywords or hexadecimal color codes.


Once you have provided all the required inputs, the application will generate an SVG file named logo.svg. You can open this file in a web browser to view your logo.

## Testing

In the installation we mentioned typing `npm install jest` into the terminal

Using Jest allows us to make sure that our program is able to function as expected, and allows us to encounter/debug code as needed.

With proper application of inquirer, installed with `npm install inquirer@7.3.3`, questions can be created in order to ensure proper functionality. The inquirer prompts allow user returned responses to have verification during the time that application is used.


## Walkthrough Video
Demonstration of the Logo Generator application and its functionality

[Video Demonstration Link](https://drive.google.com/file/d/1Uv05owI-KW6zCuVCPNNX6exWeyj7wEKm/view)

## License
This project is licensed under the MIT License.


Name: Philip Kubisz
Email: philip.kubisz@gmail.com


Name: [Your Name]
Email: [Your Email]