const canvas = document.getElementById('gameArea');
const ctx = canvas.getContext('2d');

const imageStop = document.getElementById('marioStop');
const imageJump = document.getElementById('marioJump');
const imageRun = document.getElementById('marioGoRight');

const circle = {
	w: 170,
	h: 212,
	x: 400,
	y: 50,
	dx: 0,
	dy: 0,
	image: imageStop,
}

function drawImage() {
	ctx.drawImage(circle.image, circle.x, circle.y, circle.w, circle.h);
}

function update() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	
	drawImage();

	circle.x += circle.dx;
	circle.y += circle.dy;

	if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0 ) {
		circle.dx = 0;
	}

	if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0 ) {
		circle.dy = 0;
	}

	requestAnimationFrame(update);
}

update();

function keyDown(e) {
	if (e.key === 'ArrowDown') {
		circle.dy = 3;
	} else if (e.key === 'ArrowUp') {
		circle.image = imageJump;
		circle.dy = -3;
	} else if (e.key === 'ArrowLeft') {
		circle.dx = -3;
	} else if (e.key === 'ArrowRight') {
		circle.image = imageRun;
		circle.dx = 3;
	}
}

function keyUp(e) {
	circle.image = imageStop;
	circle.dy = 0;
	circle.dx = 0;
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
