(function(self, undefined) {
	self.loadlevels = (function() {
		self.levels[0] = function() {
			self.player.xPos = 60;
			self.player.yPos = 160;
			self.player.xSpeed = 0;
			self.player.ySpeed = 0;
			new self.PlatformStd(50,300,false,false);
			new self.PlatformStd(100,400,false,false);
			new self.PlatformStd(100,300,false,false);
			new self.PlatformStd(300,600,false,false);
			new self.PlatformStd(250,400,false,false);
			new self.PlatformStd(250,500,false,false,true);
			new self.PlatformStd(0,500,false,false);
			new self.PlatformStd(400,600,false,false,false,undefined,true);
			new self.enemy(7);
			self.play();
		}
		self.levels[1] = function() {
			self.player.xPos = 55;
			self.player.yPos = 10;
			self.player.xSpeed = 0;
			self.player.ySpeed = 0;
			new self.PlatformStd(70,180,false,false);
			new self.PlatformStd(150,350,false,false);
			new self.PlatformStd(170,250,false,false);
			new self.PlatformStd(390,350,false,false);
			new self.PlatformStd(250,250,false,false);
			new self.PlatformStd(250,350,false,false,true);
			new self.PlatformStd(20,450,false,false);
			new self.PlatformStd(400,450,false,false,false,undefined,true);
			self.play();
		}
		self.levels[2] = function() {
			self.player.xPos = 55;
			self.player.yPos = 10;
			self.player.xSpeed = 0;
			self.player.ySpeed = 0;
			new self.PlatformStd(70,180,false,false);
			new self.PlatformStd(150,350,false,false);
			new self.PlatformStd(170,250,false,false);
			new self.PlatformStd(390,350,false,false);
			new self.PlatformStd(250,250,false,false);
			new self.PlatformStd(250,550,false,false,true);
			new self.PlatformStd(20,550,false,false);
			new self.PlatformStd(400,450,false,false,false,undefined,true);
			self.play();
		}
	})();
	self.loadlevel = function(level) {
		if(level != undefined && level < self.levels.length && level >= 0){
			self.enemies = [];
			self.platforms = [];
			self.level = level;
			self.player.health = 100;
			self.player.damv = 0;
			self.player.d = 0;
			self.levels[level]();
		}
		else{
			self.levels[level-1]();
		}
	}
	self.restart = function() {
		self.loadlevel(0);
		self.lifes = 5;
		
	}
	self.draw = function(){
		self.ctx.clearRect(0,0,self.width,self.height);
		for(var i = 0;i<self.lifes;i++){
			self.ctx.drawImage(self.images.heart,100+50*i,20);
		}
		self.showText((self.timer.getTime()/1000).toFixed(1) + " sec",200,20);
		self.player.draw();
		for(var i = 0;i<self.enemies.length;i++){
			self.enemies[i].draw();
		}
		for(var i = 0;i<self.platforms.length;i++){
			self.platforms[i].draw();
		}
	}
	self.calculate = function(){
		self.player.calculate();
		for(var i = 0; i<self.enemies.length; i++){
			var me = self.enemies[i];
			if(me.gravity){
				if(typeof me.ySpeed == "number"){
					me.ySpeed += 0.0098*me.gravMult*self.timeCorrection;
				}
			}
			me.calculate();
			var a = false;
			for(var i = 0; i<self.platforms.length; i++){
				if((me.xPos+me.img.width >= self.platforms[i].xPos && me.xPos <= self.platforms[i].xPos+self.platforms[i].img.width)&&
				(me.yPos+me.img.height >= self.platforms[i].yPos && me.yPos+me.img.height <= self.platforms[i].yPos+self.platforms[i].img.height)){
					if(!me.onGround&&!me.jumping){
						me.onGround = true;
						a = true;
					}
					if(me.onGround){
						me.yPos = self.platforms[i].yPos-me.img.height;
						me.ySpeed = 0;
						me.gravity = false;
						me.onGround = true;
					}
				}
			}
		if(!a){
			me.onGround=false;
			me.gravity = true;
		}
		}
		self.AI();
		var on = false;
		for(var i = 0; i<self.platforms.length; i++){
			if((self.player.xPos+self.player.img.width >= self.platforms[i].xPos && self.player.xPos <= self.platforms[i].xPos+self.platforms[i].img.width)&&
			(self.player.yPos+self.player.img.height >= self.platforms[i].yPos && self.player.yPos+self.player.img.height <= self.platforms[i].yPos+self.platforms[i].img.height)){
				if(!self.player.onGround&&!self.player.jumping){
					self.player.onGround = true;
					on = true;
					self.platform = self.platforms[i];
				}
				if(self.player.onGround){
					self.player.yPos = self.platforms[i].yPos-self.player.img.height;
					self.player.ySpeed = 0;
					self.player.gravity = false;
					self.player.onGround = true;
					if(typeof self.platform.lethal != 'undefined' && self.platform.lethal){
						self.player.damage(self.platform.damage);
					}
				}
			}
		}
		for(var i = 0; i<self.enemies.length; i++){
			if((self.player.xPos+self.player.img.width >= self.enemies[i].xPos && self.player.xPos <= self.enemies[i].xPos+self.enemies[i].img.width)&&
			(self.player.yPos+self.player.img.height >= self.enemies[i].yPos && self.player.yPos <= self.enemies[i].yPos+self.enemies[i].img.height)){
				self.restart();
			}}
		if(!on){
			self.player.onGround=false;
			self.player.gravity = true;
			self.platform = undefined;
		}
	}
	self.timedLoop = function() {
		self.calculate();
		self.draw();
	}
	self.play = function() {
		if(!self.looping){
			self.looping = true;
		}
	}
	self.showTextAdv = function(text, posX, posY, color, font) {
		self.ctx.fillStyle = color;
		self.ctx.font = font;
		self.ctx.fillText(text, posX, posY);
	}
	self.showText = function(text, posX, posY) {
		self.showTextAdv(text,posX,posY,"rgba(0,0,0,1)","25px Gulim");
	}
	self.pause = function() {
		self.lastTime = undefined;
		self.looping = false;
		self.ctx.fillStyle = "rgba(0,0,0,1)";
		self.ctx.font = "50px Gulim";
		self.ctx.fillText("PAUSE", self.width/2-100, self.height/2-25);
		self.ctx.fillStyle = "rgba(0,0,0,0.1)";
		self.ctx.fillRect(0,0,self.width,self.height);
	}
	self.stop = function(fail) {
		if(fail){
			self.lastTime = undefined;
			self.looping = false;
			self.ctx.fillStyle = "black";
			self.ctx.fillRect(0,0,self.width,self.height);
			self.text2 = "You made it to level " + (self.level+1) + ".";
			self.text3 = "Restart"
			self.showTextAdv(self.text,0,self.height/2+90,"white", "30px Miriam Fixed");
		}
	}
	self.loop = function(timestamp){
		if(self.looping) {
			if(typeof self.lastTime == 'undefined'){
				self.lastTime = timestamp;
			}
			else if (timestamp - self.lastTime >= self.delay){
				self.timeCorrection = (timestamp - self.lastTime)/self.delay;
				self.timedLoop(self.timeCorrection);
				self.lastTime = timestamp;
				self.oneSecond = false;
			}
		}
		self.loopId = window.requestAnimationFrame(function(timestamp){self.loop(timestamp);});
	}
	self.timer.end = function() {
		self.timer.stop = new Date().getTime();
	}
	self.timer.getTime = function() {
		if(typeof self.timer.stop == 'undefined'){
			return (new Date().getTime() - self.timer.start);
		}
		else {
			return (self.timer.stop - self.timer.start);
		}
	}
	self.timer.startTimer = function() {
		self.timer.stop = undefined;
		self.timer.start = new Date().getTime();
	}
	self.start = function() {
		self.loopId = window.requestAnimationFrame(function(timestamp){self.loop(timestamp);});
		self.loadlevel(0);
		self.timer.startTimer();
	}
})(window.game = window.game || {});