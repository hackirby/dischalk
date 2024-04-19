const validCodes = new Set(['0', '1', '4', '30', '31', '32', '33', '34', '35', '36', '37', '40', '41', '42', '43', '44', '45', '46', '47']);

const isValidStyleCode = (code) => code.split(';').every(style => validCodes.has(style));

class ANSI {
    constructor(colorCode) {
        if (!colorCode || !isValidStyleCode(colorCode)) {
            throw new Error('Invalid style code(s)');
        }
        this.colorCode = colorCode;
    }

    getColorCode() {
        return this.colorCode;
    }

    // Modifiers
    static normal = new ANSI('0');
    static bold = new ANSI('1');
    static underline = new ANSI('4');

    // Colors
    static gray = new ANSI('30');
    static red = new ANSI('31');
    static green = new ANSI('32');
    static yellow = new ANSI('33');
    static blue = new ANSI('34');
    static pink = new ANSI('35');
    static cyan = new ANSI('36');
    static white = new ANSI('37');

    // Background colors
    static bgFireflyDarkBlue = new ANSI('40');
    static bgOrange = new ANSI('41');
    static bgMarbleBlue = new ANSI('42');
    static bgGreyishTurquoise = new ANSI('43');
    static bgGray = new ANSI('44');
    static bgIndigo = new ANSI('45');
    static bgLightGray = new ANSI('46');
    static bgWhite = new ANSI('47');

    // Method to apply styles to text
    static apply(text, ...styles) {
        if (styles.some(style => !(style instanceof ANSI))) {
            throw new Error('Invalid style argument. Only dischalk objects are allowed.');
        }

        const stylesCode = styles.map(style => style.getColorCode()).join(';');
        return `\`\`\`ansi\n\u001b[0;${stylesCode}m${text}\u001b[0m\n\`\`\``;
    }
}

module.exports = ANSI;