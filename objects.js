function PlatformStd(x, y, onGround, gravity)
{
	this.xPos = x;
	this.yPos = y;
	this.img = images.platformImage;
	function hightwidth(img) {
		this.width = img.width;
		this.height = img.height;
	}
	this.img.onload = hightwidth(this.img);
	platforms.push(this);
	this.gravity = gravity;
	
	//Shortcut for having a platform on the ground, the y parameter will be overlooked.
	if(onGround)
	{
		this.yPos = 500-20;
	}
	
	this.calculate= function()
	{
	}
	this.draw = function(ctx)
	{
		ctx.drawImage(this.img, this.xPos,this.yPos);
	}
}