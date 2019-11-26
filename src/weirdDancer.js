var WeirdDancer = function(top, left, timeBetweenSteps) {
	Dancer.call(this, top, left, timeBetweenSteps);
	this.$node = $('<img class="cat" src="img/cat.gif">');
	this.step();
	// this.setPosition(, '45%');
}

WeirdDancer.prototype = Object.create(Dancer.prototype);

WeirdDancer.prototype.step = function() {
	Dancer.prototype.step.call(this);
}

WeirdDancer.prototype.constructor = WeirdDancer;