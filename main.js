var canvas = new fabric.canvas('myCanvas');
// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL("getImage", function(Img){
        block_image_object = Img;
        block_image_object.ScaleToWidth(block_image_width);
        block_image_height.ScaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(block_image_object);
    });
	// to upload images
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		new_image("rr1.png")
		console.log("r");// upload red ranger
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image("gr.pngf")
		console.log("g");// upload green ranger
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image("yr.pngf")
		console.log("y");// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image("pr.pngf")
		console.log("p");// upload pink ranger
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image("br.pngf")
		console.log("b");
		// upload blue ranger
	}
}

