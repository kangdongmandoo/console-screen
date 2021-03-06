const consoleScreen = require('console-screen');

const screen = new consoleScreen();

let player1 = { space: '' };
let player2 = { space: '' };
let index = 0;
let message = 'ready..';

let won;

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(() => {
  screen.rendering(
    `    [${index} / ${screen.$.screenX}]  ${message}  won : ${won}\n\n\n${player1.space}*\n${player2.space}*`
  );
  index += 1;
  if (index >= 25) {
    message = 'start!';

    if (player1.space.length <= screen.$.screenX - 4) {
      player1.space += ' ';
      if (getRandom(1, 2) === 1) {
        player1.space += ' ';
      }
    } else {
      if (!won) won = 'player1';
    }
    if (player2.space.length <= screen.$.screenX - 4) {
      player2.space += ' ';
      if (getRandom(1, 2) === 1) {
        player2.space += ' ';
      }
    } else {
      if (!won) won = 'player2';
    }
  }
}, 40);
