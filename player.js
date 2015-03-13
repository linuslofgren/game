(function(self, undefined) {
	self.player = {
		xPos: 50,
		yPos: 50,
		xSpeed: 0,
		ySpeed: 0,
		img: self.images.playerImage,
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
			self.ctx.drawImage(this.img,this.xPos,this.yPos);
		},
		calculate: function(){
		}
	}
})(window.game = window.game || {});