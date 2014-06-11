"use strict"
var color = require('colors');

function waiterjs(){
	this.launch;
	this.bar = "[                              ]";
	this.step = 0;

}

waiterjs.prototype.start = function(){
	var self = this;
	this.launch = setInterval(function(){
		for(var i = 1; i < self.bar.length-2; i++){
			if(i == self.step+1){
				self.bar = self.bar.replaceAt(i, "=");
			}else{			
				self.bar = self.bar.replaceAt(i, " ");
			}
		}		
		process.stdout.write(self.bar.rainbow+"\r");
		self.step++
		if(self.step >= 30){
			self.step = 0;
		}
	},100);
}

waiterjs.prototype.stop = function(message){
	clearInterval(this.launch);
	process.stdout.write(message);
}

String.prototype.replaceAt=function(index, character) {
	return this.substr(0, index) + character + this.substr(index+character.length);
}

module.exports = waiterjs;