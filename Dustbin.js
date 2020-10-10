class Bin{
    constructor(x, y, width, height){
        var options = {
            isStatic:true,
            restitution:0.5,
            density:1.2
        }
        this.body =Bodies.rectangle(x,y,width,height,options)
         this.width = width
         this.height = height
         this.image = loadImage("dustbin.png")    
         World.add(world,this.body)
         
}
show(){
    var pos = this.body.position
    imageMode(CENTER)
    image(this.image,700,620,this.width,this.height)
}
display(){
    var pos = this.body.position
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)
}
}