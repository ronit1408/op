class Paper{

constructer(x,y){

var option = {

    isStatic:false,
    restitution:0.3,
    density:1.2
}
  
this.body=bodies.circle(x,y,20,option);
this.radius=20;
World.add(world,this.body);
}
display(){
 var pos = this.body.position;
 Push(); 
 translate(pos.x,pos.y);
 ellipseMode(RADIUS);

 fill("purple");
ellipse(0,0,this.radius*2,this.radius*2);
Pop();
}

}