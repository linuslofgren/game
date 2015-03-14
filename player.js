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
		jumpbool: false,
		jumpval: 0,
		jumpmax: 5,
		jumpingheight: 1.5,
		damage: function(d) {
			this.dam = true;
			this.damv += d;
			this.health -= this.damv*0.025*self.timeCorrection;
		},
		jump: function(){
			this.jumpbool = true;
			
		},
		draw: function(ctx){
			self.showText("Health: " + Math.round(this.health) + "%",10,20);
			self.ctx.globalAlpha = 1;
			self.ctx.drawImage(this.img,this.xPos,this.yPos);
			self.showText("Level " + (self.level+1),500,20);
		},
		calculate: function(){
<<<<<<< HEAD
<<<<<<< HEAD
=======
			if(self.lifes<=0){
				self.stop(true);
			}
			if(!self.varinarray(37,self.keys)&&!self.varinarray(39,self.keys)){this.xSpeed = this.xSpeed*this.friction;}
=======
			if(self.lifes<=0){
				self.restart();
			}
			this.ySpeed += 0.0098*this.gravMult*self.timeCorrection;
			if(!self.varinarray(37,self.keys)&&!self.varinarray(39,self.keys)){this.xSpeed = this.xSpeed*this.friction;}
			if(this.jumpbool){
				if(this.jumpval<this.jumpmax){
					if(this.onGround){
						this.ySpeed = -this.jumpingheight;
						this.onGround = false;
						this.gravity = true;
						this.jumping = true;
						this.jumpbool = false;
						this.jumpval = 0;
					}
				}
				else{
					this.jumpval = 0;
					this.jumpbool = false;
				}
				this.jumpval ++;
			}
>>>>>>> parent of 0557083... 1
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
				self.lifes-=1;
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
			else if(self.platform.finish){
				self.loadlevel(self.level+1);
			}
			if(this.health <= 0.4999){
				self.lifes-=1;
				self.loadlevel(self.level);
			}
<<<<<<< HEAD
>>>>>>> parent of 737b0f6... Enemies
=======
>>>>>>> parent of 0557083... 1
		}
		
	}
	self.objects.push(self.player);
})(window.game = window.game || {});