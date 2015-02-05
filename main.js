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
	window.addEventListener("keyup", keyup);
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
	for(var i = 0; i<objects.length; i++){
		var self = objects[i];
		if(self.gravity){
			if(typeof self.ySpeed == "number"){
				self.ySpeed += 0.0098*self.gravMult*c;
			}
		}
	}
	for(var i = 0; i<platforms.length; i++){
		if((player.xPos >= platforms[i].xPos && player.xPos+player.img.width <= platforms[i].xPos+platforms[i].img.width)&&
		(player.yPos+player.img.height >= platforms[i].yPos && player.yPos+player.img.height <= platforms[i].yPos+platforms[i].img.height)){
			console.log(4);
			if(!player.onGround&&!player.jumping){
				player.onGround = true;
				console.log(3);
			}
			if(player.onGround){
				player.yPos = platforms[i].yPos-player.img.height;
				player.ySpeed = 0;
				player.gravity = false;
				player.onGround = true;
			}
		}
	}
	player.calculate(c);
}

function draw(ctx)
{
	ctx.clearRect(0,0,canvas.width,canvas.height);
	player.draw(ctx);
	for(var i = 0;i<platforms.length;i++)
	{
		platforms[i].draw(ctx);
	}
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
function varinarrayadd(v, a) {
	var is = false;
	for(var i = 0; i<a.length; i++){
	if(a[i] == v){
			is = true;
		}
	}
	if(!is){
		keys.push(v);
	}
	return is;
}
var keys = [];
function keypressed(e)
{
	if(e.keyCode == 32){
		if(!varinarrayadd(32, keys)){player.jump();}
	}
	else if(e.keyCode == 39){
		if(!varinarrayadd(39,keys)){
		player.xSpeed += 1;
		}
	}
	else if(e.keyCode == 37){
		if(!varinarrayadd(37,keys)){
		player.xSpeed += -1;
		}
	}
}
function varinarray(e, a) {
	var is = false;
	for(var i = 0; i<a.length; i++){
	if(a[i] == e){
			is = true;
		}
	}
	return is;
}
function varinarrayremove(e, a){
	var is;
	for(var i = 0; i<a.length; i++){
		if(a[i] == e.keyCode){
			is = i;
		}
	}
	if(is != undefined){
		a.splice(is,1);
	}
}
function keyup(e) {
	varinarrayremove(e, keys);
}

var player = 
{
	xPos: 50,
	yPos: 50,
	xSpeed: 0,
	ySpeed: 0,
	img: images.playerImage,
	gravity: true,
	onGround: false,
	gravMult: 1.0,
	jumping: false,
	friction: 0.4,
	jumpingheight: 1.5,
	jump: function(){
		console.log(1);
		if(this.onGround){
			console.log(2);
			this.ySpeed = -this.jumpingheight;
			this.onGround = false;
			this.gravity = true;
			this.jumping = true;
		}
	},
	draw: function(ctx)
	{
		ctx.drawImage(this.img,this.xPos,this.yPos);
	},
	calculate: function(c)
	{
		if(!varinarray(37,keys)&&!varinarray(39,keys)){this.xSpeed = this.xSpeed*this.friction;}
		if(this.xSpeed < 1 && this.xSpeed > -1){this.xSpeed = 0;}
		if(this.ySpeed > 0){this.jumping=false;}
		this.xPos += (this.xSpeed)*c;
		this.yPos += (this.ySpeed)*c;
	}
	
}
objects.push(player);
var my_plaform = new PlatformStd(10,10,true,false);
}
window.onload = init;