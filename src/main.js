let config = {
    type: Phaser.AUTO,
    width: 720,
    height: 480,
    scene: [ Load, Menu, Rules, Play, GameOver ]
};

let game = new Phaser.Game(config);

let keySPACE, keyR;

let centerX = game.config.width/2;
let centerY = game.config.height/2;
let score;
let highScore;
let newHighScore = false;