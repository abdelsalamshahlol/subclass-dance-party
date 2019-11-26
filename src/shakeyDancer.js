// Creates and returns a new blinky dancer object that can step

// Refacotored Code to Pseudoclassical

var ShakeyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="tenor" src="img/tenor.gif">');
  this.step();
  this.setPosition('85%', left + 100);
}

ShakeyDancer.prototype = Object.create(Dancer.prototype);

ShakeyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  	/*
  	toggle() is a jQuery method to show/hide the <span> tag.
	See http://api.jquery.com/category/effects/ for this and
	other effects you can use on a jQuery-wrapped html tag.
	*/
  this.$node;
}

ShakeyDancer.prototype.constructor = ShakeyDancer;