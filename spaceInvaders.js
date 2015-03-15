function test() {
	console.log("it works .. yaaay");
}


var player = {
	numOfLives: undefined,
	posX:undefined,
	posY:undefined,
	width:undefined,
	height:undefined,
	numOfShotsLive:undefined,
	maxNumOfShotsLive:undefined,
	movementSpeed:undefined,
	shipColor:undefined,
	__init: function() {
		this.numOfLives = 3;
		this.width = 50;
		this.height = 20;
		this.posX = canvas.width/2 - this.width/2;
		this.posY = canvas.height - this.height - 20;
		this.maxNumOfShotsLive = 10;
		this.numOfShotsLive = 0;
		this.movementSpeed = 10;
		this.shipColor = "#C02FF5";
	},
	move: function(direction) {
		this.deleteDraw();
		switch (direction) {			
			case "left":
				player.posX -= this.movementSpeed;
				break;
			case "up":
				player.posY -= this.movementSpeed;
				break;			
			case "right":
				player.posX += this.movementSpeed;
				break;
			case "down":
				player.posY += this.movementSpeed;
				break;
		}
	},
	shoot: function() {

	},
	draw: function() {
		context.fillStyle = this.shipColor;
		context.fillRect(this.posX, this.posY, this.width, this.height);
	},
	deleteDraw: function() {
		context.fillStyle = "#000000";
		context.fillRect(this.posX, this.posY, this.width, this.height);
	}
}

var badGuy = {

}

var badGuys = [];

function gameLoop() {
	player.draw();
	requestAnimFrame(gameLoop);
	//redrawScreen();
}

function gameInit() {
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	player.__init();
	requestAnimFrame(gameLoop);
}

function checkKeyPressed(keyCode) {
	console.log(keyCode);
	switch ( keyCode ) {		
		//left
		case "Left":
			player.move("left");
			break;
		//up
		case "Up":
			player.move("up");
			break;
		//right
		case "Right":
			player.move("right");
			break;
		//down
		case "Down":
			player.move("down");
			break;
	}
}

$(document).keydown(function(e) {	
	//console.log(e);
    checkKeyPressed(e.key);
});

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 200);
          };
})();



