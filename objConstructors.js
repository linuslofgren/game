(function(self, undefined) {
	self.PlatformStd = function(x, y, onGround, gravity)
	{
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
	
	
		if(onGround)
		{
			this.yPos = 500-20;
		}
		
		this.calculate= function()
		{
		}
		this.draw = function()
		{
			self.ctx.drawImage(this.img, this.xPos,this.yPos);
		}
	}
})(window.game = window.game || {});