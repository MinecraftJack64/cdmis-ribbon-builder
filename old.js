var myGamePiece;
var upPressed;
function startGame() {
    myGamePiece = new component(30, 30, "red", 275, 225,"image",true);
    ground = new component(960, 30, "black", 0, 255,"image",false)
    myScore = new component("30px", "Consolas", "black", 280, 30, "text",false);
    myGameArea.start();
    myScore.text="SCORE: "
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        this.shooterInterval = setInterval(enemyShoot, 5000)
        window.addEventListener('keydown', function (e) {
            e.preventDefault();
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
    },
    stop : function() {
        clearInterval(this.interval);
    },    
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
function enemyShoot(){
  bullet.speed = -2;
  bullet.angle = enemy.angle-1.57;
  bullet.x = 225;
  bullet.y = 35;
}
function sprite(listOfComponents){
    this.components = listOfComponents;
    this.update = function(){
        for(var i = 0;i<this.components.length;i++){
            this.components[i].update()
        }
    }
}
function component(width, height, color, x, y, type, gforce, parentsprite) {
    this.gravityAffected = gforce;
    this.type = type;
    this.text = "";
    this.width = width;
    this.height = height;
    this.hidX = width;
    this.hidY = height;
    this.speed = 0;
    this.xes = 0;
    this.yes = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        
        
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
          ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
         ctx.fillStyle = color;
        ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        ctx.restore();    }
    }
    this.newPos = function() {
        //platformer engine
      if(this.gravityAffected){
        this.xes *= 0.9;
        this.x += this.xes;
        if(this.crashWith(ground)){
          this.y--;
          if(this.crashWith(ground)){
            this.y--;
            if(this.crashWith(ground)){
              this.y--;
              if(this.crashWith(ground)){
                this.y--;
                if(this.crashWith(ground)){
                  this.y--;
                  if(this.crashWith(ground)){
                    this.x += -1 * this.xes;
                    this.y += 5;
                    if(upPressed){
                      if(this.xes > 0){
                        this.xes = -5;
                      }
                      else{
                        this.xes = 5;
                      }
                      this.yes = -7;
                    }
                    else{
                      this.xes = 0;
                    }
                  }
                }
              }
            }
          }
        }
        this.yes += 0.5;
        this.y += this.yes;
        if(this.crashWith(ground)){
          this.y -= this.yes;
          this.yes = 0;
        }
        this.y += 1;
        if((this.crashWith(ground))&&(upPressed)){
          this.yes = -15;
        }
        this.y -= 1;
      }
    }

    this.hide = function(){
      this.height = 0;
      this.width = 0;
    }
    this.show = function(){
      this.height = this.hidY;
      this.width = this.hidX;
    }
    this.hidden = function(){
      return (this.height == 0)&&(this.width == 0)
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
    this.distanceTo = function(thatX,thatY){
      return Math.sqrt(Math.pow(this.y-thatY)+Math.pow(this.x-thatX));
    }
    this.glideTowards = function(obj){
      
    }
    this.glideTo = function(obj){
      for(t = 0;t < this.distanceTo(obj.x,obj.y);t++){
          this.newPos();
          this.update();
      }
    }
    this.createClone = function(emptyList){
      return emptyList.push(this);
    }
}
function updateGameArea() {
    myGameArea.clear();
    
    
    upPressed = false;
    if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.xes = -5; }
    if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.xes = 5; }
    if (myGameArea.keys && myGameArea.keys[38]) {upPressed = true; }
    if (myGameArea.keys && myGameArea.keys[32]) {myGamePiece.speed= 5; }
    
    myGamePiece.newPos();
    myGamePiece.update();
    
    //enemy.angle = enemy.pointTowards(Math.abs(myGamePiece.x-enemy.x), Math.abs(myGamePiece.y-enemy.y));
  //enemy.angle = enemy.pointTowards(myGamePiece2.x-enemy.x, myGamePiece2.y-enemy.y);
    
    myScore.update();
    myScore.newPos();
 
    ground.update();
}