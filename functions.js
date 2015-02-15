(function(self, undefined) {
	self.loadlevel = function(level) {
		self.player.xPos = 55;
		self.player.yPos = 10;
		self.player.xSpeed = 0;
		self.player.ySpeed = 0;
		new self.PlatformStd(50,150,false,false);
		new self.PlatformStd(100,250,false,false);
		new self.PlatformStd(100,150,false,false);
		new self.PlatformStd(300,450,false,false);
		new self.PlatformStd(250,250,false,false);
		new self.PlatformStd(250,350,false,false);
		new self.PlatformStd(0,350,false,false);
		new self.PlatformStd(400,450,false,false);
		self.loop();
	}
	self.draw = function()
{
	self.ctx.clearRect(0,0,self.width,self.height);
	self.player.draw();
	for(var i = 0;i<self.platforms.length;i++)
	{
		self.platforms[i].draw();
	}
}
	self.calculate = function(){
	for(var i = 0; i<self.objects.length; i++){
		var me = self.objects[i];
		if(me.gravity){
			if(typeof me.ySpeed == "number"){
				me.ySpeed += 0.0098*me.gravMult*self.timeCorrection;
			}
		}
	}
	var on = false;
	for(var i = 0; i<self.platforms.length; i++){
		if((self.player.xPos+self.player.img.width >= self.platforms[i].xPos && self.player.xPos <= self.platforms[i].xPos+self.platforms[i].img.width)&&
		(self.player.yPos+self.player.img.height >= self.platforms[i].yPos && self.player.yPos+self.player.img.height <= self.platforms[i].yPos+self.platforms[i].img.height)){
			if(!self.player.onGround&&!self.player.jumping){
				self.player.onGround = true;
				on = true;
			}
			if(self.player.onGround){
				self.player.yPos = self.platforms[i].yPos-self.player.img.height;
				self.player.ySpeed = 0;
				self.player.gravity = false;
				self.player.onGround = true;
			}
		}
	}
	if(!on){
		self.player.onGround=false;
		self.player.gravity = true;
	}
	self.player.calculate();
}
	self.timedLoop = function() {
		self.calculate();
		self.draw();
	}
	self.loop = function(timestamp){
		if(typeof self.lastTime == "undefined"){
			self.lastTime = timestamp;
		}
		else if (timestamp - self.lastTime >= self.delay){
			self.timeCorrection = (timestamp - self.lastTime)/self.delay;
			self.timedLoop(self.timeCorrection);
			self.lastTime = self.timestamp;
		}
		window.requestAnimationFrame(function(timestamp){self.loop(timestamp);});
	}
})(window.game = window.game || {});