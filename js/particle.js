let hue = 0;
class Particle {
	// setting the co-ordinates, radius and the
	// speed of a particle in both the co-ordinates axes.
	constructor() {
		// this.x = random(0, width);
		// this.y = random(0, height);
		this.x = vehicle.position.x;
		this.y = vehicle.position.y;
		this.r = random(5, 24);
		this.xSpeed = random(-2, 2);
		this.ySpeed = random(-1, 1.5);
		this.color = "hsl(" + hue + ", 75%, 50%)";
        // console.log(this.hue)
        
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

	// this function creates the connections(lines)
	// between particles which are less than a certain distance apart

	// joinParticles(particles) {
	// 	particles.forEach((element) => {
	// 		let dis = dist(this.x, this.y, element.x, element.y);
	// 		if (dis < 75) {
	// 			stroke("rgba(255,255,255,0.04)");
	// 			line(this.x, this.y, element.x, element.y);
	// 		}
	// 		if (particles.size <= 0.1) {
	// 			particles.splice(0, 1);
	// 			i--;
	// 		}
	// 	});
	// }
	update() {
		this.r -= 0.1;
	}
	handleParticles() {
		particles.forEach((element) => {
			let dis = dist(this.x, this.y, element.x, element.y);
			if (dis < 55) {
                strokeWeight(0.1)
				stroke(this.color);
				line(this.x, this.y, element.x, element.y);
			}
		});
		// for (let i = 0; i < particles.length; i++) {
		// 	if (particles[i].r <= 1) {
		// 		particles.splice(i, 1);
		// 		i--;
		// 	}
		// }
	}
}
