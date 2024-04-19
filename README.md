# dischalk
colorize your discord bot messages using ANSI !

## Installation

```
npm install dischalk
```

## Usage

To utilize ANSI colors and styles in your discord bot messages, follow these instructions:

### Import dischalk:
```javascript
const dischalk = require('dischalk');
```

### Access styles:
```javascript
const myColor = dischalk.red; // red style object
const myModifier = dischalk.bold; // bold style object
``` 

### Apply styles to text:
```javascript
const styledText = dischalk.apply('Hello, world!', myColor, myModifier);
```

## Example with discord.js

```js
const { Client, GatewayIntentBits } = require('discord.js');
const dischalk = require('dischalk');

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
]});

client.on('messageCreate', async message => {
    if (message.content === 'ping') {
        message.reply(
            dischalk.apply('Pong!', dischalk.pink, dischalk.bgFireflyDarkBlue, dischalk.bold, dischalk.underline)
        );
    }
})

client.login('token');
```

![example screenshot](https://github.com/hackirby/dischalk/blob/main/.github/assets/image.png)

## API

### apply(text, ...styles)

#### Description:
- apply(text, ...styles) applies one or more styles to a specified text string.

#### Parameters:
- text (string): The text to be styled.
- ...styles (array of dischalk objects): Style directives to be applied to the text.

#### Returns:
- (string): Styled text.

#### Example:
```javascript
const styledText = dischalk.apply('Hello, world!', dischalk.green, dischalk.bold);
```

## Styles

###  Modifiers
- `normal`
- `bold`
- `underline`

### Colors
- `gray`
- `red`
- `green`
- `yellow`
- `blue`
- `pink`
- `cyan`
- `white`

### Background colors

- `bgFireflyDarkBlue`
- `bgOrange`
- `bgMarbleBlue`
- `bgGreyishTurquoise`
- `bgGray`
- `bgIndigo`
- `bgLightGray`
- `bgWhite`

## Contributing
Contributions to this project are welcome! Feel free to open issues, submit pull requests, or suggest improvements.

## License
This library is released under the MIT License. See LICENSE file for more informations.

## Contact
If you have any questions or need further assistance, please contact [@hackirby:matrix.org
](https://matrix.to/#/@hackirby:matrix.org)