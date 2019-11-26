// Creates and returns a new blinky dancer object that can step

// Refacotored Code to Pseudoclassical

var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
}

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.step = function (){
  makeDancer.prototype.step.call(this);
  	/*
  	toggle() is a jQuery method to show/hide the <span> tag.
	See http://api.jquery.com/category/effects/ for this and
	other effects you can use on a jQuery-wrapped html tag.
	*/
  this.$node.toggle();
}

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;