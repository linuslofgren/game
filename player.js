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
		health: 100,
		dam: false,
		damv: 0,
		jumpingheight: 1.5,
		damage: function(d) {
			this.dam = true;
			this.damv += d;
			this.health -= this.damv*0.025*self.timeCorrection;
		},
		jump: function(){
			if(this.onGround){
				this.ySpeed = -this.jumpingheight;
				this.onGround = false;
				this.gravity = true;
				this.jumping = true;
			}
		},
		draw: function(ctx){
			self.showText(Math.round(this.health),10,20);
			self.ctx.globalAlpha = 1;
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
				self.loadlevel(self.level);
			}
			if(typeof self.platform == 'undefined'){
				this.dam = false;
				this.damv = 0;
			}
			else if(typeof self.platform.lethal == 'undefined'){
				this.dam = false;
				this.damv = 0;
			}
			if(this.health <= 0.4999){
				self.loadlevel(self.level);
			}
		}
		
	}
	self.objects.push(self.player);
})(window.game = window.game || {});