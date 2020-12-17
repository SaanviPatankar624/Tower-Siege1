class Orangeblock extends Block{
    constructor(x, y){
    super(x, y, 20, 30);
    }
    display(){
       fill("orange");
       super.display();
    }
};