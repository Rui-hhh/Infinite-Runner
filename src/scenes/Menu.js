class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        //menu display
        let menuConfig = {
            //fontFamily: 'Helvetica',
            fontSize: '28px',
            backgroundColor: '#21F1FF',
            color: '#000000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5
            },
            fixedWidth: 0
        }

        //adding menu text
        let textSpacer = 80;

        this.add.bitmapText(centerX, centerY - textSpacer, 'newFont', "INFINTE RUNNER", 28).setOrigin(0.5);
        this.add.text(centerX, centerY, "Press the (R) button to see the rules", menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer, "Use the (Spacebar) to begin the game", menuConfig).setOrigin(0.5);

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start('ruleScene');
        }
    }
}
