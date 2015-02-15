(function (self, undefined) {
	var delay = delay;
	var canvas = document.getElementById("canvas");
	self.ctx = canvas.getContext("2d");
	canvas.width = 500;
	canvas.height = 500;
	self.width = canvas.width;
	self.height = canvas.height;
	self.platformImage = new Image();
	self.platformImage.src = "platform.png";
	self.playerImage = new Image();
	self.playerImage.src = "player.png";
	self.platforms = [];
	self.objects = [self.platforms];
	self.delay = 5;
})(window.game = window.game || {});