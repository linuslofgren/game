(function(self, undefined) {
	self.PlatformStd = function(x, y, onGround, gravity, lethal, damage, finish){
		this.xPos = x;
		this.yPos = y;
		this.img = self.platformImage;
		function hightwidth(img) {
			this.width = img.width;
			this.height = img.height;
		}
		this.img.onload = hightwidth(this.img);
		self.platforms.push(this);
		this.gravity = gravity;
		this.lethal = lethal;
		if(typeof this.lethal != 'undefined' && this.lethal){
			this.damage = damage;
			if(typeof this.damage == 'undefined'){
				this.damage = 10;
			}
		}
		this.finish = finish;
		if(typeof this.finish == 'undefined'){
			this.finish = false;
		}
		if(onGround)
		{
			this.yPos = self.height-20;
		}
		
		this.calculate= function()
		{
		}
		this.draw = function()
		{
			self.ctx.drawImage(this.img, this.xPos,this.yPos);
			if(this.lethal){
				self.ctx.fillStyle = 'rgba(255,0,0,0.5)';
				self.ctx.fillRect(this.xPos, this.yPos, this.img.width, this.img.height);
			}
			if(this.finish){
				self.ctx.fillStyle = 'rgba(0,255,0,0.5)';
				self.ctx.fillRect(this.xPos, this.yPos, this.img.width, this.img.height);
			}
		}
	}
})(window.game = window.game || {});