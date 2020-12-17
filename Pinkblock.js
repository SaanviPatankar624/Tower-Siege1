class Pinkblock extends Block{
    constructor(x, y){
    super(x, y, 20, 30);
    }
    display(){
       fill("pink");
       super.display();
    }
};