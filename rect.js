
    function obst() {
      this.x = w;
      this.y = 500;
      this.gravity = 2;
      this.velocity = 0;
    
      
      this.show = function() {
        fill(color('white'));
        rect(this.x,this.y,100,220);
      
   }
   this.update = function() {
    this.velocity += this.gravity; //gravity applied when not jumping
    this.x -= this.velocity;
    if(this.x < 0){
      this.x = w;
      this.velocity = 0;
    }
   }
     if (this.x < -50){
       this.x = w-50;
       this.y = Math.floor(Math.random()*h );
       this.velocity = 0;
       this.gravity += 0.25;
     }
 } //object ends here
