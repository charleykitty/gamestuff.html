
    function obst() {
      this.x = w;
      this.y = 500;
      this.gravity = 4;
      this.velocity = 0;
    
      
      this.show = function() {
        fill(color('white'));
        rect(this.x,this.y,100,220);
      
   }
   this.update = function() {
    this.velocity += this.gravity; //gravity applied when not jumping
    this.x -= this.velocity;
   }
 } //object ends here
