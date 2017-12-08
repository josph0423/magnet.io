var game = new Phaser.Game( 1024, 512, Phaser.CANVAS, 'phaser-example', {
	preload: preload,
	create: create,
	update: update,
	render: render
} );

function preload() {
	game.load.image( 'background', 'images/background.svg' );
	game.load.image( 'plane', 'images/plane.svg' );
}


var plane;

function create() {


	game.physics.startSystem( Phaser.Physics.ARCADE );



	game.add.tileSprite( 0, 0, 10000, 5000, 'background' );
	game.world.setBounds( 0, 0, 10000, 5000 );



	game.physics.startSystem( Phaser.Physics.P2JS );



	plane = game.add.sprite( game.world.centerX, game.world.centerY, 'plane' );

	game.physics.p2.enable( plane );

	plane.body.fixedRotation = true;



	cursors = game.input.keyboard.createCursorKeys();



	game.camera.follow( plane, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1 );



	game.physics.enable( plane, Phaser.Physics.ARCADE );


	plane.width = 50;
	plane.height = 50;

	plane.body.maxAngular = 500;
	plane.body.angularDrag = 50;

}

function update() {
	plane.body.setZeroVelocity();

	

	if ( cursors.left.isDown ) {
		plane.body.angularAcceleration -= 200;
	} else if ( cursors.right.isDown ) {
		plane.body.angularAcceleration += 200;
	}
	// game.physics.arcade.velocityFromAngle( plane.angle, 300, plane.body.velocity );
}


function render() {
	game.debug.cameraInfo( game.camera, 32, 32 );
}
