class Banana extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, scoreValue) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        this.points = scoreValue;
    }
}