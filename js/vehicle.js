function Vehicle(x, y) {
	this.acceleration = createVector(0, 0);
	this.velocity = createVector(0, -2);
	this.position = createVector(x, y);
	this.r = 4;
	this.maxspeed = 10;
	this.maxforce = 1;

	// Method to update location
	this.update = function () {
		// Update velocity
		this.velocity.add(this.acceleration);
		// Limit speed
		this.velocity.limit(this.maxspeed);
		this.position.add(this.velocity);
		// Reset accelerationelertion to 0 each cycle
		this.acceleration.mult(0);
	};

	this.applyForce = function (force) {
		// We could add mass here if we want A = F / M
		this.acceleration.add(force);
	};

	this.eat = function (list) {
		var record = Infinity;
		var closest = -1;
		for (var i = 0; i < list.length; i++) {
			var d = this.position.dist(list[i]);
			if (d < record) {
				record = d;
				closest = i;
			}
		}

		if (record < 5) {
			list.splice(closest, 1);
		} else if (closest > -1) {
			this.seek(food[closest]);
		}
	};

	// A method that calculates a steering force towards a target
	// STEER = DESIRED MINUS VELOCITY
	this.seek = function (target) {
		var desired = p5.Vector.sub(target, this.position); // A vector pointing from the location to the target

		// Scale to maximum speed
		desired.setMag(this.maxspeed);

		// Steering = Desired minus velocity
		var steer = p5.Vector.sub(desired, this.velocity);
		steer.limit(this.maxforce); // Limit to maximum steering force

		this.applyForce(steer);
	};

	this.display = function () {
		// Draw a triangle rotated in the direction of velocity
		var angle = this.velocity.heading() + PI / 2;

		push();
		translate(this.position.x, this.position.y);
		rotate(angle);

		var gr = color(0, 255, 0);
		var rd = color(255, 0, 0);
		var col = lerpColor(rd, gr, this.health);
	};
}
