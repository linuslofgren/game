(function(self, undefined) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
	self.loadlevels = (function() {
		self.levels[0] = function() {
			self.player.xPos = 55;
			self.player.yPos = 10;
			self.player.xSpeed = 0;
			self.player.ySpeed = 0;
<<<<<<< HEAD
<<<<<<< HEAD
			new self.PlatformStd(50,300,false,false);
			new self.PlatformStd(100,400,false,false);
			new self.PlatformStd(100,300,false,false);
			new self.PlatformStd(300,600,false,false);
			new self.PlatformStd(250,400,false,false);
			new self.PlatformStd(250,500,false,false,true);
			new self.PlatformStd(0,500,false,false);
			new self.PlatformStd(400,600,false,false,false,undefined,true);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
			//new self.enemy(3);
=======
			new self.enemy(7);
=======
=======
>>>>>>> parent of 737b0f6... Enemies
			new self.PlatformStd(50,150,false,false);
			new self.PlatformStd(100,250,false,false);
			new self.PlatformStd(100,150,false,false);
			new self.PlatformStd(300,450,false,false);
			new self.PlatformStd(250,250,false,false);
			new self.PlatformStd(250,350,false,false,true);
			new self.PlatformStd(0,350,false,false);
			new self.PlatformStd(400,450,false,false,false,undefined,true);
<<<<<<< HEAD
>>>>>>> parent of 737b0f6... Enemies
=======
>>>>>>> parent of 737b0f6... Enemies
>>>>>>> origin/master
=======
			new self.enemy(3);
>>>>>>> parent of 2fe194d... Good Input
=======
			new self.enemy(3);
>>>>>>> parent of 2fe194d... Good Input
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
			self.platforms = [];
			self.level = level;
			self.player.health = 100;
			self.player.damv = 0;
			self.player.d = 0;
			self.levels[level]();
		}
		else{
			console.log("No level " + level);
		}
	}
	self.restart = function() {
		self.loadlevel(0);
		self.lifes = 5;
		self.time = 0;
		self.time -= self.save/1000;
		
	}
>>>>>>> parent of 0557083... 1
	self.draw = function(){
		if(self.looping){
			self.ctx.clearRect(0,0,self.width,self.height);
			for(var i = 0;i<self.lifes;i++){
				self.ctx.drawImage(self.heart,100+50*i,20);
			}
			self.showText("Total time: " + Math.round(self.time) + " seconds", 180,20);
			self.player.draw();
			for(var i = 0;i<self.platforms.length;i++){
				self.platforms[i].draw();
			}
<<<<<<< HEAD
		}
	}
	self.calculate = function(){
<<<<<<< HEAD
<<<<<<< HEAD
=======
	self.loadlevels = (function() {
		self.levels[0] = function() {
			self.player.xPos = 55;
			self.player.yPos = 10;
			self.player.xSpeed = 0;
			self.player.ySpeed = 0;
			new self.PlatformStd(50,150,false,false);
			new self.PlatformStd(100,250,false,false);
			new self.PlatformStd(100,150,false,false);
			new self.PlatformStd(300,450,false,false);
			new self.PlatformStd(250,250,false,false);
			new self.PlatformStd(250,350,false,false,true);
			new self.PlatformStd(0,350,false,false);
			new self.PlatformStd(400,450,false,false,false,undefined,true);
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
			self.platforms = [];
			self.level = level;
			self.player.health = 100;
			self.player.damv = 0;
			self.player.d = 0;
			self.levels[level]();
		}
		else{
			console.log("No level " + level);
		}
	}
	self.restart = function() {
		self.loadlevel(0);
		self.lifes = 5;
		self.time = 0;
		self.time -= self.save/1000;
		
	}
	self.draw = function(){
		if(self.looping){
			self.ctx.clearRect(0,0,self.width,self.height);
			for(var i = 0;i<self.lifes;i++){
				self.ctx.drawImage(self.heart,100+50*i,20);
			}
			self.showText("Total time: " + Math.round(self.time) + " seconds", 180,20);
			self.player.draw();
			for(var i = 0;i<self.platforms.length;i++){
				self.platforms[i].draw();
			}
=======
>>>>>>> parent of 737b0f6... Enemies
		}
	}
	self.calculate = function(){
		for(var i = 0; i<self.objects.length; i++){
			var me = self.objects[i];
<<<<<<< HEAD
=======
		self.player.calculate();
		for(var i = 0; i<self.enemies.length; i++){
			var me = self.enemies[i];
>>>>>>> parent of 0557083... 1
=======
		for(var i = 0; i<self.objects.length; i++){
			var me = self.objects[i];
>>>>>>> parent of 737b0f6... Enemies
=======
>>>>>>> parent of 737b0f6... Enemies
			if(me.gravity){
				if(typeof me.ySpeed == "number"){
					me.ySpeed += 0.0098*me.gravMult*self.timeCorrection;
				}
			}
<<<<<<< HEAD
		}
=======
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
>>>>>>> parent of 0557083... 1
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
<<<<<<< HEAD
=======
		for(var i = 0; i<self.enemies.length; i++){
			if((self.player.xPos+self.player.img.width >= self.enemies[i].xPos && self.player.xPos <= self.enemies[i].xPos+self.enemies[i].img.width)&&
			(self.player.yPos+self.player.img.height >= self.enemies[i].yPos && self.player.yPos <= self.enemies[i].yPos+self.enemies[i].img.height)){
				self.restart();
			}}
>>>>>>> parent of 0557083... 1
		if(!on){
			self.player.onGround=false;
			self.player.gravity = true;
			self.platform = undefined;
		}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
		self.player.calculate();
>>>>>>> parent of 737b0f6... Enemies
=======
>>>>>>> parent of 0557083... 1
=======
		self.player.calculate();
>>>>>>> parent of 737b0f6... Enemies
=======
		self.player.calculate();
>>>>>>> parent of 737b0f6... Enemies
	}
	self.timedLoop = function() {
		self.calculate();
		self.draw();
	}
	self.play = function() {
<<<<<<< HEAD
<<<<<<< HEAD
		self.looping = true;
=======
		if(!self.looping){
			self.looping = true;
			self.loopId = window.requestAnimationFrame(self.loop);
=======
		if(!self.looping){
			self.looping = true;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 0557083... 1
=======
			self.loopId = window.requestAnimationFrame(self.loop);
>>>>>>> parent of 737b0f6... Enemies
=======
			self.loopId = window.requestAnimationFrame(self.loop);
>>>>>>> parent of 737b0f6... Enemies
		}
	}
	self.showTextAdv = function(text, posX, posY, color, font) {
		self.ctx.fillStyle = color;
		self.ctx.font = font;
		self.ctx.fillText(text, posX, posY);
	}
	self.showText = function(text, posX, posY) {
		self.showTextAdv(text,posX,posY,"rgba(0,0,0,1)","25px Gulim");
<<<<<<< HEAD
>>>>>>> parent of 737b0f6... Enemies
=======
>>>>>>> parent of 0557083... 1
	}
	self.pause = function() {
		self.lastTime = undefined;
		self.looping = false;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
		window.cancelAnimationFrame(self.loopId);
=======
>>>>>>> parent of 0557083... 1
=======
		window.cancelAnimationFrame(self.loopId);
>>>>>>> parent of 737b0f6... Enemies
=======
		window.cancelAnimationFrame(self.loopId);
>>>>>>> parent of 737b0f6... Enemies
		self.ctx.fillStyle = "rgba(0,0,0,1)";
		self.ctx.font = "50px Gulim";
		self.ctx.fillText("PAUSE", self.width/2-100, self.height/2-25);
		self.ctx.fillStyle = "rgba(0,0,0,0.1)";
		self.ctx.fillRect(0,0,self.width,self.height);
	}
	self.stop = function(fail) {
		if(fail){
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
			self.save = self.timestamp;
			self.lastTime = undefined;
			self.looping = false;
			window.cancelAnimationFrame(self.loopId);
			self.ctx.fillStyle = "black";
			self.ctx.fillRect(0,0,self.width,self.height);
			self.text = "You lose. Your time was " + self.time + " seconds.";
			self.text2 = "You made it to level " + (self.level+1) + ".";
			self.text3 = "Restarting..."
			setTimeout(function(){
				for(var i = 0;i<self.text.length;i++){
					self.showTextTimer(i,1);
				}
				setTimeout(function(){
					for(var i = 0;i<self.text2.length;i++){
						self.showTextTimer(i,2);
					}
					setTimeout(function(){
						for(var i = 0;i<self.text3.length;i++){
							self.showTextTimer(i,3);
						}
						setTimeout(function(){
							self.restart();
						},2000/2);
					},3000/2);
			},5500/2);},500/2);
		}
	}
	self.showTextTimer=function(i,text){
		if(text==1){
			setTimeout(function(){
				self.showTextAdv(self.text[i],30*i,self.height/2-30,"white", "30px Miriam Fixed");
			},100/2*i);
		}
		else if(text==2){
			setTimeout(function(){
				self.showTextAdv(self.text2[i],30*i,self.height/2+30,"white", "30px Miriam Fixed");
			},100/2*i);
		}
		else if(text == 3){
			setTimeout(function(){
				self.showTextAdv(self.text3[i],30*i,self.height/2+90,"white", "30px Miriam Fixed");
			},100/2*i);
		}
>>>>>>> parent of 737b0f6... Enemies
=======
=======
			self.save = self.timestamp;
>>>>>>> parent of 737b0f6... Enemies
=======
			self.save = self.timestamp;
>>>>>>> parent of 737b0f6... Enemies
			self.lastTime = undefined;
			self.looping = false;
			window.cancelAnimationFrame(self.loopId);
			self.ctx.fillStyle = "black";
			self.ctx.fillRect(0,0,self.width,self.height);
			self.text = "You lose. Your time was " + self.time + " seconds.";
			self.text2 = "You made it to level " + (self.level+1) + ".";
			self.text3 = "Restarting..."
			setTimeout(function(){
				for(var i = 0;i<self.text.length;i++){
					self.showTextTimer(i,1);
				}
				setTimeout(function(){
					for(var i = 0;i<self.text2.length;i++){
						self.showTextTimer(i,2);
					}
					setTimeout(function(){
						for(var i = 0;i<self.text3.length;i++){
							self.showTextTimer(i,3);
						}
						setTimeout(function(){
							self.restart();
						},2000/2);
					},3000/2);
			},5500/2);},500/2);
<<<<<<< HEAD
=======
		}
	}
	self.showTextTimer=function(i,text){
		if(text==1){
			setTimeout(function(){
				self.showTextAdv(self.text[i],30*i,self.height/2-30,"white", "30px Miriam Fixed");
			},100/2*i);
		}
		else if(text==2){
			setTimeout(function(){
				self.showTextAdv(self.text2[i],30*i,self.height/2+30,"white", "30px Miriam Fixed");
			},100/2*i);
		}
		else if(text == 3){
			setTimeout(function(){
				self.showTextAdv(self.text3[i],30*i,self.height/2+90,"white", "30px Miriam Fixed");
			},100/2*i);
>>>>>>> parent of 737b0f6... Enemies
		}
	}
	self.showTextTimer=function(i,text){
		if(text==1){
			setTimeout(function(){
				self.showTextAdv(self.text[i],30*i,self.height/2-30,"white", "30px Miriam Fixed");
			},100/2*i);
		}
		else if(text==2){
			setTimeout(function(){
				self.showTextAdv(self.text2[i],30*i,self.height/2+30,"white", "30px Miriam Fixed");
			},100/2*i);
		}
		else if(text == 3){
			setTimeout(function(){
				self.showTextAdv(self.text3[i],30*i,self.height/2+90,"white", "30px Miriam Fixed");
			},100/2*i);
		}
>>>>>>> parent of 0557083... 1
	}
	self.loop = function(timestamp){
		if(self.looping) {
			self.timestamp = timestamp;
			if(typeof self.lastTimeSec == 'undefined'){
				self.lastTimeSec = timestamp;	
			}
			else if (timestamp - self.lastTimeSec >= 1000){
				self.lastTimeSec = timestamp;
				self.oneSecond = true;
			}
			if(typeof self.lastTime == 'undefined'){
				self.lastTime = timestamp;
			}
			else if (timestamp - self.lastTime >= self.delay){
				self.timeCorrection = (timestamp - self.lastTime)/self.delay;
				self.timedLoop(self.timeCorrection);
				self.lastTime = timestamp;
				self.oneSecond = false;
			}
			if(typeof self.timeCorrection != 'undefined'){
				self.time += (self.delay*self.timeCorrection)/1000;
				console.log(self.timeCorrection);
			}
			self.loopId = window.requestAnimationFrame(function(timestamp){self.loop(timestamp);});
		}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
		self.loopId = window.requestAnimationFrame(self.loop);
	}
	self.start = function() {
		self.looping = true;
		window.requestAnimationFrame(self.loop);
=======
>>>>>>> parent of 737b0f6... Enemies
=======
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
>>>>>>> parent of 0557083... 1
=======
>>>>>>> parent of 737b0f6... Enemies
=======
>>>>>>> parent of 737b0f6... Enemies
	}
})(window.game = window.game || {});