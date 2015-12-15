// Hallo, ich bin ein Script
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var x = 0;

var spaceship {

	width: 40,
	height: 40,
	position {
		x: 0,
		y: 0,
	},
	//angle: 0,
	engineOn: false,
	//rotatingLeft: false,
	//rotatingRight: false

}

function SpaceshipMovement() {

	context.safe();
	context.translate(spaceship.position.x, spaceship.position.y);
	context.rotate(spaceship.angle);
	context.rect(spaceship.width * -0.5, spaceship.height * -0.5, spaceship.width, spaceship.height);
	context.fillStyle = "spaceship.color";
	context.fill();
	context.restore();
}


function main(){

	requestAnimationFrame(SpaceshipMovement);
	requestAnimationFrame(main);
	
}

main();


/*(function () {





}());*/
