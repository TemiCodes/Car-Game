//Create a reference for canvas
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

//Give specific height and width to the car image
car_height = 150;
car_width = 75;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
x = 5;
y = 225;
function add() {
	//upload car, and background images on the canvas.
	background_imageTag = new Image();
	background_imageTag.onload = uploadBackground;
	background_imageTag.src = background_image;
	green_car_imageTag = new Image();
	green_car_imageTag.onload = uploadgreencar;
	green_car_imageTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(green_car_imageTag,x,y,car_width,car_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if (y>0) {
		y = y - 10
		console.log("y = " + y + " x = " + x)
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if (y>0) {
		y = y + 10
		console.log("y = " + y + " x = " + x)
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if (x>0) {
		x = x - 10
		console.log("y = " + y + " x = " + x)
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if (x>0) {
		x = x + 10
		console.log("y = " + y + " x = " + x)
		uploadBackground();
		uploadgreencar();
	}
}
