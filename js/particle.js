let hue = 0;
class Particle {
	// setting the co-ordinates, radius and the
	// speed of a particle in both the co-ordinates axes.
	constructor() {
		this.x = vehicle.position.x;
		this.y = vehicle.position.y;
		this.r = random(5, 16);
		this.xSpeed = random(-2, 2);
		this.ySpeed = random(-1, 1.5);
		this.color = "hsl(" + hue + ", 75%, 50%)";
	}

	// creation of a particle.
	createParticle() {
		noStroke();
		fill(this.color);
		circle(this.x, this.y, this.r);
	}

	// setting the particle in motion.
	moveParticle() {
		if (this.x < 0 || this.x > width) this.xSpeed *= -1;
		if (this.y < 0 || this.y > height) this.ySpeed *= -1;
		this.x += this.xSpeed;
		this.y += this.ySpeed;
	}

	
	update() {
		this.r -= 0.05;
	}
	handleParticles() {
		particles.forEach((element) => {
			let dis = dist(this.x, this.y, element.x, element.y);
			if (dis < 75 && dis > 30) {
                strokeWeight(0.1)
				stroke(this.color);
				line(this.x, this.y, element.x, element.y);
			}
		});
	}
}
