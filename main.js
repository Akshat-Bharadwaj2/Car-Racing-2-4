canvas=document.getElementById("canvas");
background_image="racing.gif";
console.log(background_image);
car1_image="car1.jpg";
car2_image="car2.jpg";
car_height="100";
car_width="80";
car1_x="10";
car2_x="10";
car1_x="10";
car2_y="20"
function add()
{
    background.imgTag=new Image();
    background.imgTag.onload=uploadBackground;
    background.imgTag.src=background_image;

    car1imgTag=new Image();
    car1.imgTag.onload=uploadcar1;
    car1.imgTag.src=car1_image;
   
    car2imgTag=new Image();
    car2.imgTag.onload=uploadcar2;
    car2.imgTag.src=car2_image;
}
function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadcar1()
{
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car_width,car_height);
}
function uploadcar1()
{
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car_width,car_height);
}
window.addEventListener("keydown",my_keydown)

function my_keydown()
{
    keypressed=e.keycode;
    console.log(keypressed);
    if(keypressed=='37')
    {
        left();
        console.log("left");
    }
    if(keypressed=='38')
    {
        up();
        console.log("up");
    }
    if(keypressed=='39')
    {
        right();
        console.log("right");
    }
    if(keypressed=='40')
    {
        down();
        console.log("down");
    }
    if(keypressed=='65')
    {
        left2();
        console.log("a");
    }
    if(keypressed=='68')
    {
        right2();
        console.log("d");
    }
    if(keypressed=='83')
    {
        down2();
        console.log("s");
    }
    if(keypressed=='87')
    {
        up2();
        console.log("w");
    }
}
function left2()
{
    if(car2_x >= 0)
    {
        car2_x-=10
        console.log("When left arrow is pressed, x="+rover_x+" | y="+rover_y);
        uploadrover();
        uploadrover();
    }
}

function up2()
{
    if(car2_y >= 0)
    {
        car2_x-=10
        console.log("When up arrow is pressed, x="+rover_x+" | y="+rover_y);
        uploadrover();
        uploadrover();
    }
}

function right2()
{
    if(car2_x <= 700)
    {
        car2_x+=10
        console.log("When right arrow is pressed, x="+rover_x+" | y="+rover_y);
        uploadrover();
        uploadrover();
    }
}

function down2()
{
    if(car2_x <= 500)
    {
        car2_x+=10
        console.log("When down arrow is pressed, x="+rover_x+" | y="+rover_y);
        uploadrover();
        uploadrover();
    }
}
function left()
{
    if(car1_x >= 0)
    {
        car1_x-=10
        console.log("When left arrow is pressed, x="+rover_x+" | y="+rover_y);
        uploadrover();
        uploadrover();
    }
}

function up()
{
    if(car1_y >= 0)
    {
        car1_x-=10
        console.log("When up arrow is pressed, x="+rover_x+" | y="+rover_y);
        uploadrover();
        uploadrover();
    }
}

function right()
{
    if(car1_x <= 700)
    {
        car1_x+=10
        console.log("When right arrow is pressed, x="+rover_x+" | y="+rover_y);
        uploadrover();
        uploadrover();
    }
}

function down()
{
    if(car1_x <= 500)
    {
        car1_x+=10
        console.log("When down arrow is pressed, x="+rover_x+" | y="+rover_y);
        uploadrover();
        uploadrover();
    }
}