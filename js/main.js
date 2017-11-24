var game = new Phaser.Game(1024, 512, Phaser.CANVAS, 'phaser-example', {
	preload: preload,
	create: create,
	update: update
});

function preload() {
	game.load.image('back', 'images/back.svg', 0, 0);
	game.load.image('plane', 'images/plane.svg', 0, 0);
}

function create() {
	game.stage.backgroundColor = '#000000';
	var back = game.add.sprite(0, 0, 'back');
	back.width = 10000;
	back.height = 5000;

	var plane = game.add.sprite(0, 0, 'plane');
	plane.width = 50;
	plane.height = 50;

	plane.centerX = game.width/2;
	plane.centerY = game.height/2;
}

function update() {}
