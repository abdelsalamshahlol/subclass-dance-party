// Creates and returns a new blinky dancer object that can step

// Refacotored Code to Pseudoclassical

var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="img/suprise.gif">');
}

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.step = function (){
  Dancer.prototype.step.call(this);
  	/*
  	toggle() is a jQuery method to show/hide the <span> tag.
	See http://api.jquery.com/category/effects/ for this and
	other effects you can use on a jQuery-wrapped html tag.
	*/
  this.$node.toggle(900);
}

BlinkyDancer.prototype.constructor = BlinkyDancer;