(function(self, undefined) {
	self.draw = function(){
		self.player.draw();
	}
	self.calculate = function(){
	}
	self.timedLoop = function() {
		self.calculate();
		self.draw();
	}
	self.play = function() {
		self.looping = true;
	}
	self.pause = function() {
		self.lastTime = undefined;
		self.looping = false;
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
			}
		}
		self.loopId = window.requestAnimationFrame(self.loop);
	}
	self.start = function() {
		self.looping = true;
		window.requestAnimationFrame(self.loop);
	}
})(window.game = window.game || {});