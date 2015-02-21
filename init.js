(function (self, undefined) {
	var delay = delay;
	var canvas = document.getElementById("canvas");
	self.ctx = canvas.getContext("2d");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	self.width = canvas.width;
	self.height = canvas.height;
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
	self.loopId;
	self.levels = [];
	self.level = undefined;
	self.lastTime = undefined;
	self.platform = undefined;
	self.lifes = 5;
	self.a = 0;
	self.timestamp;
})(window.game = window.game || {});