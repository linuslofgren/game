//The beginning
var init = function() {
//Delay: one of the global variables
//var delay = 5.0;
//Loads all images


//Calls start to start the program.
var images = {
	setImages: function() {
		this.platformImage = new Image();
		this.platformImage.src = "platform.png";
		this.playerImage = new Image();
		this.playerImage.src = "player.png";
	}
}
platforms = [];
objects = [platforms];
start(5.0);

//start function, defines variables, functions and etc. Also calls the loop function.
function start(delay)
{
	var delay = delay;
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	canvas.width = 500;
	canvas.height = 500;
	images.setImages();
	window.addEventListener("keydown", keypressed);
	window.requestAnimationFrame(function(timestamp){loop(timestamp,delay,ctx);});
}


//The loop function runs as often as possible. The timedLoop runs with a specific time delay.
function loop(timestamp,delay,ctx)
{
	//This bit calls timedLoop with the correct delay
	if(typeof lastTime == "undefined")
	{
		lastTime = timestamp;
	}
	else if (timestamp - lastTime >= delay)
	{
		var timeCorrection = (timestamp - lastTime)/delay;
		timedLoop(timeCorrection,ctx	);
		lastTime = timestamp;
	}
	//Calls itself to keep the program running
	window.requestAnimationFrame(function(timestamp){loop(timestamp,delay,ctx);});
}

// The timedLoop runs with a specific time delay. The delay is defined by the delay variabe, in microseconds. To account for slight offset timeCorrection is used.
function timedLoop(c,ctx)
{
	//Calculate everything, c = timeCorrection.
	calculate(c);
	//Draw everything in correct position
	draw(ctx);
}

function calculate(c)
{
	for(var i = 0; i++; i<objects.length()){
		console.log("1")
		var self = objects[i];
		if(self.gravity){
			if(typeof self.xSpeed === float || typeof self.xSpeed === int){
				self.xSpeed += 0.98*self.gravMult*c;
			}
		}
	}
	player.calculate(c);
}

function draw(ctx)
{
	ctx.clearRect(0,0,canvas.width,canvas.height);
	for(var i = 0;i<platforms.length;i++)
	{
		platforms[i].draw(ctx);
	}
	player.draw(ctx);
}

//All platforms in a list.

//The platform constructor.
function PlatformStd(x, y, onGround, gravity)
{
	this.xPos = x;
	this.yPos = y;
	this.img = images.platformImage;
	function hightwidth(img) {
		this.width = img.width;
		this.height = img.height;
	}
	this.img.onload = hightwidth(this.img);
	platforms.push(this);
	this.gravity = gravity;
	
	//Shortcut for having a platform on the ground, the y parameter will be overlooked.
	if(onGround)
	{
		this.yPos = 500-100;
	}
	
	this.calculate= function()
	{
	}
	this.draw = function(ctx)
	{
		ctx.drawImage(this.img, this.xPos,this.yPos);
	}
}
function keypressed(e)
{
	console.log(e.keyCode);
}

var player = 
{
	xPos: 50,
	yPos: 50,
	xSpeed: 0,
	ySpeed: 0,
	img: images.playerImage,
	gravity: true,
	gravMult: 1.0,
	draw: function(ctx)
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
objects.push(player);
var my_plaform = new PlatformStd(10,10,true,false);
}
window.onload = init;