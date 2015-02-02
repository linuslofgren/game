//The beginning
var init = function() {
//Delay: one of the global variables
//var delay = 5.0;
//Calls start to start the program.
start(5.0);




//start function, defines variables, functions and etc. Also calls the loop function.
function start(delay)
{
	var delay = delay;
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	canvas.width = 500;
	canvas.height = 500;
	setImages();
	window.addEventListener("keydown", keypressed);
	window.requestAnimationFrame(function(timestamp){loop(timestamp,delay);});
}

//Loads all images
function setImages()
{
	platformImage = new Image();
	platformImage.src = "platform.png";
	playerImage = new Image();
	playerImage.src = "player.png";
}

//The loop function runs as often as possible. The timedLoop runs with a specific time delay.
function loop(timestamp,delay)
{
	//This bit calls timedLoop with the correct delay
	if(typeof lastTime == "undefined")
	{
		lastTime = timestamp;
	}
	else if (timestamp - lastTime >= delay)
	{
		var timeCorrection = (timestamp - lastTime)/delay;
		timedLoop(timeCorrection);
		lastTime = timestamp;
	}
	//Calls itself to keep the program running
	window.requestAnimationFrame(function(timestamp){loop(timestamp,delay);});
}

// The timedLoop runs with a specific time delay. The delay is defined by the delay variabe, in microseconds. To account for slight offset timeCorrection is used.
function timedLoop(c)
{
	//Calculate everything, c = timeCorrection.
	calculate(c);
	//Draw everything in correct position
	draw();
}

function calculate(c)
{
	for(var i; i++; i<objects.length()){
		var self = object[i];
		if(self.gravity){
			if(typeof self.xSpeed === float || typeof self.xSpeed === int){
				self.xSpeed += 0.98*self.gravMult*c;
			}
		}
	}
	player.calculate(c);
}

function draw()
{
	ctx.clearRect(0,0,canvas.width,canvas.height);
	for(var i = 0;i<platforms.length;i++)
	{
		platforms[i].draw();
	}
	player.draw();
}

//All platforms in a list.
platforms = [];
objects = [];
//The platform constructor.
function PlatformStd(x, y, onGround)
{
	this.xPos = x;
	this.yPos = y;
	this.img = platformImage;
	this.width = img.width;
	this.height = img.height;
	
	
	//Shortcut for having a platform on the ground, the x parameter will be overlooked.
	if(onGround)
	{
		xPos = 500-img.height;
	}
	
	this.calculate= function()
	{
	}
	this.draw = function()
	{
		ctx.drawImage(this.xPos,this.yPos,this.img);
	}
}

function keypressed(e)
{
	console.log(e.keyCode);
}

player = 
{
	xPos: 50,
	yPos: 50,
	xSpeed: 0,
	ySpeed: 0,
	img: playerImage,
	gravity: true,
	gravMult: 1.0,
	draw: function()
	{
		ctx.drawImage(this.img,this.xPos,this.yPos);
	},
	calculate: function(c)
	{
		var onPlatform;
		//for(var i = 0;i<platforms.length;i++)
		//{
		//	if(platforms[i].)
		//}
		this.xPos += (this.xSpeed)*c;
		this.yPos += (this.ySpeed)*c;
	}
}
}
window.onload = init;