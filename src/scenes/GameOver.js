class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene")
    }

    create() {
        if (localStorage.getItem('highscore') != null) {
            let currHighScore = parseInt(localStorage.getItem('highscore'));

            if (score > currHighScore) {
                localStorage.setItem('highscore', score.toString());
                highScore = score;
                newHighScore = true;
            } else {
                highScore = parseInt(localStorage.getItem('highscore'));
                newHighScore = false;
            }
        } else {
            highScore = score;
            localStorage.setItem('highscore', highScore.toString());
            newHighScore = true;
        }
    }
}