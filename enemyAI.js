(function(self,undefined){
	self.AI = function(){
		for(var i = 0;i<self.enemies.length;i++){
			var me = self.enemies[i];
			console.log(me.xSpeed + " x:y " + me.ySpeed);
			var p = self.player;
			var dX,dY;
			dX = me.xPos-p.xPos;
			dY = me.yPos-p.yPos;
			if(dX>dY){
				if(dX>0){
					me.xSpeed = -1;
				}
				else{
					me.xSpeed = 1;
				}
			}
			if(dX<dY){
				if(dY>0){
					me.jump();
				}
				else{
					me.xSpeed = 1;
				}
			}
		}
	}
})(window.game = window.game || {});