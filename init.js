(function (self, undefined) {
	var delay = delay;
	var canvas = document.getElementById("canvas");
	self.ctx = canvas.getContext("2d");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	self.width = canvas.width;
	self.height = canvas.height;
<<<<<<< HEAD
	self.images = {
		platformImage: new Image(),
		playerImage: new Image(),
		heart: new Image(),
		enemy: new Image()
	};
	self.images.heart.src = "pictures/heart.png";
	self.images.playerImage.src = "pictures/player.png";
	self.images.platformImage.src = "pictures/platform.png";
	self.images.enemy.src = "pictures/enemy.png";
	self.platforms = [];
	self.enemies = [];
	self.objects = [];
	self.timer = {};
	self.delay = 5;
	self.looping = false;
<<<<<<< HEAD
=======
	self.platformImage = new Image();
	self.platformImage.src = "pictures/platform.png";
	self.playerImage = new Image();
	self.playerImage.src = "pictures/player.png";
	self.heart = new Image();
	self.heart.src = "pictures/heart.png";
	self.platforms = [];
	self.objects = [self.platforms];
	self.delay = 5;
	self.looping = false;
=======
>>>>>>> parent of 0557083... 1
	self.loopId;
	self.levels = [];
	self.level = undefined;
	self.lastTime = undefined;
	self.platform = undefined;
<<<<<<< HEAD
	self.oneSecond = false;
	self.time = 0;
	self.lifes = 5;
	self.a = 0;
>>>>>>> parent of 737b0f6... Enemies
=======
	self.lifes = 5;
	self.a = 0;
>>>>>>> parent of 0557083... 1
	self.timestamp;
	self.save;
})(window.game = window.game || {});