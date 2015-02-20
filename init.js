(function (self, undefined) {
	var delay = delay;
	var canvas = document.getElementById("canvas");
	self.ctx = canvas.getContext("2d");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	self.width = canvas.width;
	self.height = canvas.height;
	self.platformImage = new Image();
	self.platformImage.src = "platform.png";
	self.playerImage = new Image();
	self.playerImage.src = "player.png";
	self.heart = new Image();
	self.heart.src = "heart.png";
	self.platforms = [];
	self.objects = [self.platforms];
	self.delay = 5;
	self.looping = false;
	self.loopId;
	self.levels = [];
	self.level = undefined;
	self.lastTime = undefined;
	self.platform = undefined;
	self.oneSecond = false;
	self.time = 0;
	self.lifes = 5;
	self.a = 0;
	self.timestamp;
	self.save;
})(window.game = window.game || {});