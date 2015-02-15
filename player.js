(function(self, undefined) {
	self.player = {
		xPos: 50,
		yPos: 50,
		xSpeed: 0,
		ySpeed: 0,
		img: self.playerImage,
		gravity: true,
		onGround: false,
		gravMult: 1.0,
		jumping: false,
		friction: 0.4,
		platform: null,
		jumpingheight: 1.5,
		jump: function(){
			if(this.onGround){
				this.ySpeed = -this.jumpingheight;
				this.onGround = false;
				this.gravity = true;
				this.jumping = true;
			}
		},
		draw: function(ctx){
			self.ctx.drawImage(this.img,this.xPos,this.yPos);
		},
		calculate: function(){
			if(!self.varinarray(37,self.keys)&&!self.varinarray(39,self.keys)){this.xSpeed = this.xSpeed*this.friction;}
			if(this.xSpeed < 1 && this.xSpeed > -1){this.xSpeed = 0;}
			if(this.ySpeed > 0){this.jumping=false;}
			this.xPos += (this.xSpeed)*self.timeCorrection;
			this.yPos += (this.ySpeed)*self.timeCorrection;
			if(this.xPos < 0){
				this.xPos = 0;
			}
			if(this.xPos > self.width-this.img.height){
				this.xPos = self.width-this.img.height;
			}
			if(this.yPos+this.img.height > self.height){
				self.loadlevel();
			}
		}
		
	}
	self.objects.push(self.player);
})(window.game = window.game || {});