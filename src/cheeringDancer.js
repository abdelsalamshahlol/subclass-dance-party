var CheeringDancer = function(top, left, timeBetweenSteps) {
	Dancer.call(this, top, left, timeBetweenSteps);
	this.$node = $('<img class="cheering" src="img/cheering.gif">');
	this.step();
	this.setPosition('30%', '45%');
}

CheeringDancer.prototype = Object.create(Dancer.prototype);

CheeringDancer.prototype.step = function() {
	Dancer.prototype.step.call(this);
}

CheeringDancer.prototype.constructor = CheeringDancer;