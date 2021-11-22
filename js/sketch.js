var vehicle; // VAR ET ARRAY
var food = []; //VAR ET ARRAY
let particles = [];

var debug;
function setup() {
	createCanvas(windowWidth, windowHeight);
	vehicle = new Vehicle(width / 2, height / 2);
	for (var i = 0; i < 10; i++) {
		var x = random(width);
		var y = random(height);
		food.push(createVector(x, y));
	}
}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }

  setInterval(function(){ particles = []; }, 120000);

function draw() {
	background(0);

	for (var i = 0; i < food.length; i++) {
		fill(0, 0, 0);
		stroke(0, 0, 0);
		ellipse(food[i].x, food[i].y, 8, 8);
	}

	if (random(1) < 0.02) {
		var x = random(width);
		var y = random(height);
		food.push(createVector(x, y));
	}
	for (let i = 0; i < 2; i++) {
		particles.push(new Particle());
	}
	for (let i = 0; i < particles.length; i++) {
		particles[i].createParticle();
		particles[i].moveParticle();
		// particles[i].joinParticles(particles.slice(i));
		particles[i].handleParticles();
		particles[i].update();
		if (particles[i].r <= 5) {
			particles.splice(i, 1);
			i--;
		}
	}
	if (hue < 255){
		hue++;
	} else if (hue == 255){
		hue = 0;
	}
	vehicle.eat(food);
	//vehicle.seek(food);
	vehicle.update();
	vehicle.display();
}

//FØRSTE SKETCH VEHICLE
// let vehicle;
// let target;

// function setup() {
//   createCanvas(600, 600);
//   vehicle = new Vehicle(100, 100);
// }

// function draw() {
//   background(51);
//   target = createVector(mouseX, mouseY);

//   fill(127);
//   stroke(200);
//   strokeWeight(2);
//   circle(target.x, target.y, 32);

//   vehicle.seek(target);
//   vehicle.update();
//   vehicle.show();
// }
