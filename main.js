function preload()
{

}

function setup()
{
    canvas = createCanvas(530,330);
    canvas.position(150, 150);
    
}

function draw()
{
 fill(255,0,0);
 stroke(0,255,255);

 circle(50,50,80);
 circle(50,280,80);
 circle(480,50,80);
 circle(480,280,80);

 fill(0,255,0);
 stroke(0,255,0);

 rect(87,45,355,20);
}