class Rules extends Phaser.Scene {
    constructor() {
        super("ruleScene");
    }

    create() {
        //menu display
        let ruleConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            backgroundColor: '#21F1FF',
            color: '#000000',
            align: 'right',
            
            padding: {
                top: 5,
                bottom: 5
            },
            fixedWidth: 0
        }

        let xPosition = 15;
        let yPosition = 10;
        let textSpacer = 55

        this.add.text(xPosition, yPosition, '• Run away from the giant machine trying to crush you!', ruleConfig).setOrigin(0, 0);
        this.add.text(xPosition, yPosition + textSpacer, '• Use the ↑ arrow to jump over obstacles.', ruleConfig).setOrigin(0, 0);
        this.add.text(xPosition, yPosition + (2 * textSpacer), '• Use the ↓ arrow to slide under other obstacles.', ruleConfig).setOrigin(0, 0);
        this.add.text(xPosition, yPosition + (3 * textSpacer), '• For every obstacle you hit, the machine gets closer.', ruleConfig).setOrigin(0, 0);
        this.add.text(xPosition, yPosition + (4 * textSpacer), '• Run into the bananas to increase the ability bar.', ruleConfig).setOrigin(0, 0);
        this.add.text(xPosition, yPosition + (5 * textSpacer), "• When the ability bar is full (Spacebar) will throw a\nspanner at the machine to force it a step back.", ruleConfig).setOrigin(0, 0);
        ruleConfig.backgroundColor = "#E3FF25";
        this.add.text(centerX, yPosition + (7 * textSpacer), 'Press (R) to return to main menu', ruleConfig).setOrigin(0.5);

        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start('menuScene');
        }
    }
}