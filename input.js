(function(self, undefined){
	self.keys = [];
	self.varinarrayadd = function(v, a) {
		var is = false;
		for(var i = 0; i<a.length; i++){
		if(a[i] == v){
				is = true;
			}
		}
		if(!is){
			self.keys.unshift(v);
		}
		return is;
	}
	self.keypressed = function(e){
		if(e.keyCode == 38){
			self.player.jump();
		}
		else if(e.keyCode == 39){
			self.varinarrayadd(39,self.keys)
		}
		else if(e.keyCode == 37){
			self.varinarrayadd(37, self.keys);
		}
		else if(e.keyCode == 27){
			if(self.looping){
				self.pause();
			}
			else{
				self.play();
			}
		}
	}
	self.varinarray = function(e, a) {
		var is = false;
		for(var i = 0; i<a.length; i++){
		if(a[i] == e){
				is = true;
			}
		}
		return is;
	}
	self.varinarrayremove = function(e, a){
		var is;
		for(var i = 0; i<a.length; i++){
			if(a[i] == e.keyCode){
				is = i;
			}
		}
		if(is != undefined){
			a.splice(is,1);
		}
	}
	self.keyup = function(e) {
		self.varinarrayremove(e, self.keys);
	}
	window.addEventListener("keydown", self.keypressed);
	window.addEventListener("keyup", self.keyup);
})(window.game = window.game || {});