class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    creat() {
        score = 0;

        this.scoreTimer = this.scoreTimer.addEvent({
            delay: 1000,
            callback: this.scoreIncrease,
            callbackScope: this,
            loop: true
        });
    }

    scoreIncrease() {
        score++;
    }
}