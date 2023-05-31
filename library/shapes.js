class Shape {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error("render() method not implemented");
    }
  }
  
  class Triangle extends Shape {
    render() {
      const triangleWidth = 300;
      const triangleHeight = 200;
      const textX = triangleWidth / 2;
      const fontSize = Math.min(triangleWidth, triangleHeight) * 0.3;
  
      const textHeight = fontSize * 0.8;
      const textY = triangleHeight - textHeight;
  
      return `
        <svg xmlns="http://www.w3.org/2000/svg" width="${triangleWidth}" height="${triangleHeight}">
          <polygon points="150, 20 230, 180 70, 180" fill="${this.color}" />
          <text x="${textX}" y="${textY}" font-size="${fontSize}" dominant-baseline="baseline" text-anchor="middle" fill="white">${this.color}</text>
        </svg>
      `;
    }
  }

  // Shape class template
  class Circle extends Shape {
    render() {
      return `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          <circle cx="150" cy="100" r="80" fill="${this.color}" />
          <text x="150" y="110" font-size="40" text-anchor="middle" fill="white">${this.color}</text>
        </svg>
      `;
    }
  }
  
  class Square extends Shape {
    render() {
      return `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          <rect x="60" y="60" width="180" height="120" fill="${this.color}" />
          <text x="150" y="130" font-size="40" text-anchor="middle" fill="white">${this.color}</text>
        </svg>
      `;
    }
  }
  
  function validateShape(shape) {
    const validShapes = ['circle', 'triangle', 'square'];
    return validShapes.includes(shape.toLowerCase());
  }
  
  module.exports = {
    Triangle,
    Circle,
    Square,
    validateShape,
  };