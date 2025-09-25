(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.zombi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACBQIjJAAIAAifIDJAAIDGAAIAACfg");
	this.shape.setTransform(39,-12.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033FF").s().p("AmHGIIAAsPIMPAAIAAC2IjKAAIAACgIDKAAIAAG5g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.zombi, new cjs.Rectangle(-39.2,-39.2,98.2,78.5), null);


(lib.health = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AipCqIAAlTIFTAAIAAFTg");
	this.shape.setTransform(2.05,2.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.health, new cjs.Rectangle(-14.9,-14.9,34,34), null);


(lib.gun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AmyEJIAAoRINlAAIAAIRg");
	this.shape.setTransform(43.5414,11.5443,2.3333,0.6604);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gun, new cjs.Rectangle(-57.9,-5.9,202.9,35), null);


(lib.fire = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhyAyQgUAAgPgPQgPgOAAgVQAAgUAPgOQAPgPAUAAIDlAAQAUAAAPAPQAPAOAAAUQAAAVgPAOQgPAPgUAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fire, new cjs.Rectangle(-16.5,-5,33,10), null);


(lib.ammo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399FF").s().p("AidCdIAAk6IE6AAIAAE6g");
	this.shape.setTransform(-96.2,-69.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ammo, new cjs.Rectangle(-111.9,-84.9,31.5,31.500000000000007), null);


(lib.player = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.gun();
	this.instance.setTransform(17.1,-4.4,0.3071,0.3071,0,0,0,43.6,11.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCEF00").s().p("AliFjIAArFILFAAIAALFg");
	this.shape.setTransform(-13.475,-0.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.player, new cjs.Rectangle(-48.9,-35.7,97.1,70.9), null);


// stage content:
(lib.Zombi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [1];
	// timeline functions:
	this.frame_1 = function() {
		//// Game Class
		//class Player {
		//  constructor(stage) {
		//    this.stage = stage;
		//    this.keysPressed = {};
		//    this.bullets = [];
		//    this.ammo = 1000;
		//    this.currentAmmo = 30;
		//    this.reloadDuration = 2000;
		//    this.reloading = false;
		//    this.player = declare("player", 300, 600);
		//    this.playerHealth = 100;
		//    this.isJumping = false;
		//    
		//    // Camera settings
		//    this.cameraDeadZone = 200; // Distance from center before camera moves
		//    this.cameraSmoothness = 0.1; // How smooth camera follows (0.1 = smooth, 1.0 = instant)
		//    this.levelWidth = 3200; // Set your level width here
		//    this.levelHeight = 900; // Set your level height here
		//    
		//    this.initEvents();
		//  }
		
		
		//  takeDamage(amount) {
		//    this.playerHealth -= amount;
		//    console.log( "Player took " + amount + " damage. Health = " + this.playerHealth);
		
		//    if (this.playerHealth <= 0) {
		//      this.playerHealth = 0;
		//      console.log("Player has died!");
		//      this.stage.removeChild(this.player)
		//      // Fire custom event
		//      //this.player.dispatchEvent("dead");
		//    }
		//  }
		
		//  heal(amount) {
		//    this.playerHealth += amount;
		//    if (this.playerHealth > 100) this.playerHealth = 100; // cap health
		//    console.log( "Player healed. Health = " + this.playerHealth);
		//  }
		
		//  initEvents() {
		//    window.addEventListener("keydown", (event) => this.handleKeyDown(event));
		//    window.addEventListener("keyup", (event) => this.handleKeyUp(event));
		//  }
		
		//  handleKeyDown(event) {
		//    this.keysPressed[event.code] = true;
		
		//    // Movement and jumping logic
		//    if (this.keysPressed["Space"] && this.keysPressed["KeyD"]) {
		//      this.jump(-350, 150); // Reduced horizontal movement for smoother jump
		//    } else if (this.keysPressed["Space"] && this.keysPressed["KeyA"]) {
		//      this.jump(-350, -150); // Reduced horizontal movement for smoother jump
		//    } else {
		//      switch (event.keyCode) {
		//        case 68: // D key
		//          this.movePlayer(20);
		//          break;
		//        case 65: // A key
		//          this.movePlayer(-20);
		//          break;
		//        case 32: // Space key
		//          this.jump(-350, 0);
		//          break;
		//        case 69: // E key (fire)
		//          this.fire();
		//          break;
		//        case 82: // R key (reload)
		//          this.reloadAmmo();
		//          break;
		//      }
		//    }
		//  }
		
		//  handleKeyUp(event) {
		//    delete this.keysPressed[event.code];
		//  }
		
		//  movePlayer(dx) {
		//    if ((dx > 0 && this.player.scaleX < 0) || (dx < 0 && this.player.scaleX > 0)) {
		//      this.player.scaleX *= -1;
		//    }
		//    this.player.x += dx;
		//    
		//    // Update camera to follow player
		//    this.updateCamera();
		//  }
		
		//  updateCamera() {
		//    const canvasWidth = this.stage.canvas.width;
		//    const canvasHeight = this.stage.canvas.height;
		//    
		//    // Calculate where camera should be to center player
		//    const targetCameraX = -(this.player.x - canvasWidth / 2);
		//    const targetCameraY = -(this.player.y - canvasHeight / 2);
		//    
		//    const centerX = canvasWidth / 2;
		//    const centerY = canvasHeight / 2;
		//    const playerScreenX = this.player.x + this.stage.x;
		//    const playerScreenY = this.player.y + this.stage.y;
		//    
		//    let newCameraX = this.stage.x;
		//    let newCameraY = this.stage.y;
		//    
		//    if (Math.abs(playerScreenX - centerX) > this.cameraDeadZone) {
		//      newCameraX += (targetCameraX - this.stage.x) * this.cameraSmoothness;
		//    }
		//    
		//    if (Math.abs(playerScreenY - centerY) > this.cameraDeadZone * 0.5) {
		//      newCameraY += (targetCameraY - this.stage.y) * this.cameraSmoothness;
		//    }
		//    
		//    // Clamp camera to level boundaries
		//    const maxCameraX = 0;
		//    const minCameraX = -(this.levelWidth - canvasWidth);
		//    const maxCameraY = 0;
		//    const minCameraY = -(this.levelHeight - canvasHeight);
		//    
		//    this.stage.x = Math.max(minCameraX, Math.min(maxCameraX, newCameraX));
		//    this.stage.y = Math.max(minCameraY, Math.min(maxCameraY, newCameraY));
		//  }
		
		//  jump(valY, valX) {
		//    if (this.isJumping) return; // Prevent multiple jumps
		//    
		//    if (this.player.y >= 590.65) {
		//      this.isJumping = true;
		//      this.player.stop();
		//      
		//      // Smoother jump with better easing and longer duration
		//      createjs.Tween.get(this.player)
		//        .to({ y: this.player.y + valY, x: this.player.x + valX }, 600, createjs.Ease.sineOut)
		//        .to({ y: this.player.y, x: this.player.x + valX * 2 }, 600, createjs.Ease.sineIn)
		//        .call(() => {
		//          this.player.play();
		//          this.isJumping = false; // Reset jumping state
		//        });
		//      
		//      // Update camera during jump
		//      setTimeout(() => this.updateCamera(), 300); // Update camera mid-jump
		//      setTimeout(() => this.updateCamera(), 900); // Update camera at landing
		//    }
		//  }
		
		//  fire() {
		//    if (this.currentAmmo > 0) {
		//      const direction = this.player.scaleX < 0 ? "right" : "left";
		//      const bullet = {
		//        instance: declare("fire", this.player.x, this.player.y - 15),
		//        direction: direction,
		//      };
		
		//      this.currentAmmo--;
		
		//      const intervalId = setInterval(() => this.moveBullet(bullet, intervalId), 1000 / 128);
		//      this.bullets.push({ bullet, intervalId });
		//    } else {
		//      this.reloadAmmo();
		//    }
		//  }
		
		//  moveBullet(bullet, intervalId) {
		//    if (bullet.direction === "left") {
		//      bullet.instance.x += 20;
		//    } else {
		//      bullet.instance.x -= 20;
		//    }
		
		//    // Check if bullet hits zombie
		//    if (zombis && zombis.isAlive && isColliding(bullet.instance, zombis.zombi)) {
		//      console.log("Bullet hit zombie!");
		//      zombis.takeDamage(25); // Bullet does 25 damage (4 shots to kill)
		//      // Remove the bullet
		//      clearInterval(intervalId);
		//      this.bullets = this.bullets.filter((b) => b.intervalId !== intervalId);
		//      this.stage.removeChild(bullet.instance);
		//      return;
		//    }
		
		//    if (bullet.instance.x <= 1 || bullet.instance.x >= this.levelWidth) {
		//      clearInterval(intervalId);
		//      this.bullets = this.bullets.filter((b) => b.intervalId !== intervalId);
		//      this.stage.removeChild(bullet.instance);
		//    }
		//  }
		
		//  reloadAmmo() {
		//    if (this.currentAmmo > 0 || this.ammo >= 0) {
		//      if (!this.reloading) {
		//        this.reloading = true;
		//        const reloadStartTime = createjs.Ticker.getTime();
		
		//        createjs.Ticker.addEventListener("tick", () => {
		//          const elapsed = createjs.Ticker.getTime() - reloadStartTime;
		//          if (elapsed >= this.reloadDuration) {
		//            if (this.ammo < 30) {
		//              this.currentAmmo = this.ammo;
		//              this.ammo = 0;
		//            } else {
		//              const ammoToAdd = 30 - this.currentAmmo;
		//              this.currentAmmo += ammoToAdd;
		//              this.ammo -= ammoToAdd;
		//            }
		//            if(this.ammo!=0){
		//              this.reloading = false;
		//              createjs.Ticker.removeEventListener("tick", this.reloadAmmo);
		//              console.log("Reload complete!");}
		//          }
		//        });
		//      }
		//    } else {
		//      createjs.Ticker.removeEventListener("tick", this.reloadAmmo);
		//      console.log("No ammo left to reload!");
		//    }
		//  }
		//}
		
		//// Zombi Class
		//class Zombi {
		//  constructor(ThePlayer) {
		//    this.Player = ThePlayer;
		//    this.zombi = declare("zombi", 0, 600);
		//    this.zombieHealth = 100; // Add zombie health
		//    this.isAlive = true; // Add alive state
		//    createjs.Ticker.addEventListener("tick", this.follow.bind(this));
		//    console.log("Zombi position is: x=" + this.zombi.x + ", nominalBounds=" + this.zombi.scaleX);
		//    console.log("Player position is: x=" + this.Player.player.x + ", nominalBounds=" + this.Player.player.scaleX);
		//  }
		
		
		
		//  // Add method for zombie to take damage
		//  takeDamage(amount) {
		//    if (!this.isAlive) return;
		//    
		//    this.zombieHealth -= amount;
		//    console.log("Zombie took " + amount + " damage. Health = " + this.zombieHealth);
		
		//    if (this.zombieHealth <= 0) {
		//      this.zombieHealth = 0;
		//      this.isAlive = false;
		//		
		//		this.createAmmoInstance()
		//		
		//      console.log("Zombie has died!");
		//      stage.removeChild(this.zombi);
		//      // Remove the tick listener when zombie dies
		//      createjs.Ticker.removeEventListener("tick", this.follow);
		//    }
		//  }
		
		//	createAmmoInstance(){
		//		return new Ammo(this.Player,this.zombi.x,this.zombi.y)
		//	}
		
		//  between(value, min, max) {
		//    return value >= min && value <= max;
		//  }
		//  
		//  follow(event) {
		//    if (!this.isAlive) return; // Don't move if dead
		//    
		//    if (this.between(zombis.zombi.x, player1.player.x - 20, player1.player.x + 20) == false) {
		//      if (player1.player.x > zombis.zombi.x) {
		//        // Player is to the right, zombie moves right and faces right
		//        zombis.zombi.x += 3;
		//        if (zombis.zombi.scaleX < 0) zombis.zombi.scaleX = Math.abs(zombis.zombi.scaleX); // Face right
		//      } else {
		//        // Player is to the left, zombie moves left and faces left
		//        zombis.zombi.x -= 3;
		//        if (zombis.zombi.scaleX > 0) zombis.zombi.scaleX = -Math.abs(zombis.zombi.scaleX); // Face left
		//      }
		//    }
		
		//    if (isColliding(this.zombi, this.Player.player) && this.Player.playerHealth != 0) {
		//      console.log("Zombi hit the player!");
		//      this.Player.takeDamage(1);
		//      console.log(this.Player.playerHealth);
		//    }
		//  }
		//}
		
		
		
		//function isColliding(obj1, obj2) {
		//  // Prefer getBounds(), fallback to nominalBounds
		//  let bounds1 = obj1.getBounds ? obj1.getBounds() : null;
		//  let bounds2 = obj2.getBounds ? obj2.getBounds() : null;
		
		//  if (!bounds1 && obj1.nominalBounds) bounds1 = obj1.nominalBounds;
		//  if (!bounds2 && obj2.nominalBounds) bounds2 = obj2.nominalBounds;
		
		//  if (!bounds1 || !bounds2) {
		//    console.warn("Could not determine bounds for collision check.");
		//    return false;
		//  }
		
		//  // Account for each object's transform
		//  let x1 = obj1.x - bounds1.width / 2;
		//  let y1 = obj1.y - bounds1.height / 2;
		//  let x2 = obj2.x - bounds2.width / 2;
		//  let y2 = obj2.y - bounds2.height / 2;
		
		//  return !(
		//    x1 + bounds1.width < x2 ||
		//    x1 > x2 + bounds2.width ||
		//    y1 + bounds1.height < y2 ||
		//    y1 > y2 + bounds2.height
		//  );
		//}
		
		// function declare(name, x, y) {
		//    const button = new lib[name]();
		//    stage.addChild(button);
		//    button.x = x;
		//    button.y = y;
		//    return button;
		//  }
		
		//class Ammo{
		//	constructor(Player,x,y){
		//		this.Player=Player;
		//		console.log("Player is "+this.Player)
		//		this.ammo=declare("ammo",x,y)
		
		//		this.healAmount=30;
		//		
		//	}
		//	healPlayer(){
		//		if(isColliding(this.Player.player,this.ammo)){
		//			stage.removeChild(this.ammo)
		//			this.Player.heal(this.healAmount);
		//		}
		//	}
		//	
		//}
		
		//const stageGame = new createjs.Stage("canvas");
		//stage.stop();
		//const player1 = new Player(stage);
		
		//const zombis = new Zombi(player1);
		
		  // Camera follow logic with dead zone and smooth movement
		
		class Player {
		  constructor(stage) {
		    this.stage = stage;
		    this.keysPressed = {};
		    this.bullets = [];
		    this.ammo = 100;
		    this.currentAmmo = 30;
		    this.reloadDuration = 2000; // Reload time in milliseconds
		    this.reloading = false;
		    this.player = this.declare("player", 300, 600);
		    this.playerHealth = 100;
		    this.isJumping = false; // Add jumping state to prevent multiple jumps
		    
		    // Mario-style jump physics
		    this.velocityY = 0;
		    this.velocityX = 0;
		    this.gravity = 0.8; // How fast player falls
		    this.jumpPower = -16; // Initial jump velocity (negative = up)
		    this.groundY = 600; // Ground level
		    this.maxSpeed = 8; // Max horizontal speed
		    this.acceleration = 1.2; // How fast player accelerates
		    this.friction = 0.85; // How much speed is lost when not moving
		    
		    // Camera settings
		    this.cameraDeadZone = 200; // Distance from center before camera moves
		    this.cameraSmoothness = 0.03; // How smooth camera follows (0.1 = smooth, 1.0 = instant)
		    this.levelWidth = 4900; // Set your level width here
		    this.levelHeight = 800; // Set your level height here
		    
		    this.initEvents();
		    
		    // Start physics update loop
		    this.startPhysicsLoop();
		  }
		  updateCamera() {
		    const canvasWidth = this.stage.canvas.width;
		    const canvasHeight = this.stage.canvas.height;
		    
		    // Calculate where camera should be to center player
		    const targetCameraX = -(this.player.x - canvasWidth / 2);
		    const targetCameraY = -(this.player.y - canvasHeight / 2);
		    
		    const centerX = canvasWidth / 2;
		    const centerY = canvasHeight / 2;
		    const playerScreenX = this.player.x + this.stage.x;
		    const playerScreenY = this.player.y + this.stage.y;
		    
		    let newCameraX = this.stage.x;
		    let newCameraY = this.stage.y;
		    
		    if (Math.abs(playerScreenX - centerX) > this.cameraDeadZone) {
		      newCameraX += (targetCameraX - this.stage.x) * this.cameraSmoothness;
		    }
		    
		    if (Math.abs(playerScreenY - centerY) > this.cameraDeadZone * 0.5) {
		      newCameraY += (targetCameraY - this.stage.y) * this.cameraSmoothness;
		    }
		    
		    // Clamp camera to level boundaries
		    const maxCameraX = 0;
		    const minCameraX = -(this.levelWidth - canvasWidth);
		    const maxCameraY = 0;
		    const minCameraY = -(this.levelHeight - canvasHeight);
		    
		    this.stage.x = Math.max(minCameraX, Math.min(maxCameraX, newCameraX));
		    this.stage.y = Math.max(minCameraY, Math.min(maxCameraY, newCameraY));
		  }
		
		  declare(name, x, y) {
		    const button = new lib[name]();
		    this.stage.addChild(button);
		    button.x = x;
		    button.y = y;
		    return button;
		  }
		
		  takeDamage(amount) {
		    this.playerHealth -= amount;
		    console.log( "Player took " + amount + " damage. Health = " + this.playerHealth);
		
		    if (this.playerHealth <= 0) {
		      this.playerHealth = 0;
		      console.log("Player has died!");
		      this.stage.removeChild(this.player)
		      // Fire custom event
		      //this.player.dispatchEvent("dead");
		    }
		  }
		
		  heal(amount) {
		    this.playerHealth += amount;
		    if (this.playerHealth > 100) this.playerHealth = 100; // cap health
		    console.log( "Player healed. Health = " + this.playerHealth);
		  }
		
		  initEvents() {
		    window.addEventListener("keydown", (event) => this.handleKeyDown(event));
		    window.addEventListener("keyup", (event) => this.handleKeyUp(event));
		  }
		
		  handleKeyDown(event) {
		    this.keysPressed[event.code] = true;
		
		    switch (event.keyCode) {
		      case 68: // D key - move right
		        // Mario-style movement is handled in physics loop
		        break;
		      case 65: // A key - move left
		        // Mario-style movement is handled in physics loop
		        break;
		      case 32: // Space key - Mario jump
		        this.jump();
		        break;
		      case 69: // E key (fire)
		        this.fire();
		        break;
		      case 82: // R key (reload)
		        this.reloadAmmo();
		        break;
		    }
		  }
		
		  handleKeyUp(event) {
		    delete this.keysPressed[event.code];
		  }
		
		  // Mario-style physics update loop
		  startPhysicsLoop() {
		    createjs.Ticker.addEventListener("tick", () => this.updatePhysics());
		  }
		
		  updatePhysics() {
		    // Handle horizontal movement (Mario-style)
		    if (this.keysPressed["KeyD"]) {
		      this.velocityX = Math.min(this.velocityX + this.acceleration, this.maxSpeed);
		      if (this.player.scaleX < 0) this.player.scaleX *= -1; // Face right
		    } else if (this.keysPressed["KeyA"]) {
		      this.velocityX = Math.max(this.velocityX - this.acceleration, -this.maxSpeed);
		      if (this.player.scaleX > 0) this.player.scaleX *= -1; // Face left
		    } else {
		      // Apply friction when no keys pressed
		      this.velocityX *= this.friction;
		      if (Math.abs(this.velocityX) < 0.1) this.velocityX = 0; // Stop tiny movements
		    }
		
		    // Apply horizontal movement
		    this.player.x += this.velocityX;
		
		    // Handle vertical movement (gravity and jumping)
		    this.velocityY += this.gravity;
		    this.player.y += this.velocityY;
		
		    // Ground collision
		    if (this.player.y >= this.groundY) {
		      this.player.y = this.groundY;
		      this.velocityY = 0;
		      this.isJumping = false;
		    } else {
		      this.isJumping = true;
		    }
		
		    // Update camera
		    this.updateCamera();
		  }
		
		  // Mario-style jump - can only jump when on ground
		  jump() {
		    if (!this.isJumping && this.player.y >= this.groundY) {
		      this.velocityY = this.jumpPower;
		      this.isJumping = true;
		      console.log("Mario Jump!");
		    }
		  }
		
		  fire() {
		    if (this.currentAmmo > 0 && !this.reloading) {
		      const direction = this.player.scaleX < 0 ? "right" : "left";
		      const bullet = {
		        instance: this.declare("fire", this.player.x, this.player.y - 15),
		        direction: direction,
		      };
		
		      this.currentAmmo--;
		      console.log("Fired! Ammo: " + this.currentAmmo + "/30, Reserve: " + this.ammo);
		
		      const intervalId = setInterval(() => this.moveBullet(bullet, intervalId), 1000 / 128);
		      this.bullets.push({ bullet, intervalId });
		    } else if (this.reloading) {
		      console.log("Can't shoot while reloading!");
		    } else {
		      console.log("Out of ammo! Press R to reload.");
		      // Optional: Auto-reload when trying to fire with empty magazine
		      // this.reloadAmmo();
		    }
		  }
		
		  moveBullet(bullet, intervalId) {
		    if (bullet.direction === "left") {
		      bullet.instance.x += 20;
		    } else {
		      bullet.instance.x -= 20;
		    }
		
		    // Check if bullet hits zombie
		    if (zombis && zombis.isAlive && isColliding(bullet.instance, zombis.zombi)) {
		      console.log("Bullet hit zombie!");
		      zombis.takeDamage(25); // Bullet does 25 damage (4 shots to kill)
		      // Remove the bullet
		      clearInterval(intervalId);
		      this.bullets = this.bullets.filter((b) => b.intervalId !== intervalId);
		      this.stage.removeChild(bullet.instance);
		      return;
		    }
		
		    if (bullet.instance.x <= 1 || bullet.instance.x >= this.levelWidth) {
		      clearInterval(intervalId);
		      this.bullets = this.bullets.filter((b) => b.intervalId !== intervalId);
		      this.stage.removeChild(bullet.instance);
		    }
		  }
		
		  reloadAmmo() {
		    // Can't reload if already reloading, no reserve ammo, or magazine is full
		    if (this.reloading || this.ammo <= 0 || this.currentAmmo >= 30) {
		      if (this.ammo <= 0) {
		        console.log("No reserve ammo left!");
		      } else if (this.currentAmmo >= 30) {
		        console.log("Magazine is already full!");
		      }
		      return;
		    }
		
		    this.reloading = true;
		    console.log("Reloading... (" + this.reloadDuration/1000 + " seconds)");
		    
		    // Use setTimeout instead of createjs.Ticker for simpler, more reliable timing
		    setTimeout(() => {
		      if (!this.reloading) return; // Check if reload was cancelled somehow
		      
		      // Calculate how much ammo to transfer from reserve to current
		      const ammoNeeded = 30 - this.currentAmmo;  // How much space in magazine
		      const ammoToAdd = Math.min(ammoNeeded, this.ammo);  // Don't exceed reserve ammo
		      
		      // Transfer ammo
		      this.currentAmmo += ammoToAdd;
		      this.ammo -= ammoToAdd;
		      
		      // Finish reloading
		      this.reloading = false;
		      console.log("Reload complete! Magazine: " + this.currentAmmo + "/30, Reserve: " + this.ammo);
		      
		    }, this.reloadDuration);
		  }
		}
		
		// Zombi Class
		class Zombi {
		  constructor(ThePlayer) {
		    this.Player = ThePlayer;
		    this.zombi = this.declare("zombi", 0, 600);
		    this.zombieHealth = 100; // Add zombie health
		    this.isAlive = true; // Add alive state
		    createjs.Ticker.addEventListener("tick", this.follow.bind(this));
		    console.log("Zombi position is: x=" + this.zombi.x + ", nominalBounds=" + this.zombi.scaleX);
		    console.log("Player position is: x=" + this.Player.player.x + ", nominalBounds=" + this.Player.player.scaleX);
		  }
		
		  declare(name, x, y) {
		    const button = new lib[name]();
		    stage.addChild(button);
		    button.x = x;
		    button.y = y;
		    return button;
		  }
		
		  // Add method for zombie to take damage
		  takeDamage(amount) {
		    if (!this.isAlive) return;
		    
		    this.zombieHealth -= amount;
		    console.log("Zombie took " + amount + " damage. Health = " + this.zombieHealth);
		
		    if (this.zombieHealth <= 0) {
		      this.zombieHealth = 0;
		      this.isAlive = false;
		      console.log("Zombie has died!");
		      stage.removeChild(this.zombi);
		      // Remove the tick listener when zombie dies
		      createjs.Ticker.removeEventListener("tick", this.follow);
		    }
		  }
		
		  between(value, min, max) {
		    return value >= min && value <= max;
		  }
		  
		  follow(event) {
		    if (!this.isAlive) return; // Don't move if dead
		    
		    if (this.between(zombis.zombi.x, player1.player.x - 20, player1.player.x + 20) == false) {
		      if (player1.player.x > zombis.zombi.x) {
		        // Player is to the right, zombie moves right and faces right
		        zombis.zombi.x += 3;
		        if (zombis.zombi.scaleX < 0) zombis.zombi.scaleX = Math.abs(zombis.zombi.scaleX); // Face right
		      } else {
		        // Player is to the left, zombie moves left and faces left
		        zombis.zombi.x -= 3;
		        if (zombis.zombi.scaleX > 0) zombis.zombi.scaleX = -Math.abs(zombis.zombi.scaleX); // Face left
		      }
		    }
		
		    if (isColliding(this.zombi, this.Player.player) && this.Player.playerHealth != 0) {
		      console.log("Zombi hit the player!");
		      this.Player.takeDamage(1);
		      console.log(this.Player.playerHealth);
		    }
		  }
		}
		
		function isColliding(obj1, obj2) {
		  // Prefer getBounds(), fallback to nominalBounds
		  let bounds1 = obj1.getBounds ? obj1.getBounds() : null;
		  let bounds2 = obj2.getBounds ? obj2.getBounds() : null;
		
		  if (!bounds1 && obj1.nominalBounds) bounds1 = obj1.nominalBounds;
		  if (!bounds2 && obj2.nominalBounds) bounds2 = obj2.nominalBounds;
		
		  if (!bounds1 || !bounds2) {
		    console.warn("Could not determine bounds for collision check.");
		    return false;
		  }
		
		  // Account for each object's transform
		  let x1 = obj1.x - bounds1.width / 2;
		  let y1 = obj1.y - bounds1.height / 2;
		  let x2 = obj2.x - bounds2.width / 2;
		  let y2 = obj2.y - bounds2.height / 2;
		
		  return !(
		    x1 + bounds1.width < x2 ||
		    x1 > x2 + bounds2.width ||
		    y1 + bounds1.height < y2 ||
		    y1 > y2 + bounds2.height
		  );
		}
		
		const stageGame = new createjs.Stage("canvas");
		stage.stop();
		const player1 = new Player(stage);
		console.log(player1)
		
		const zombis = new Zombi(player1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(6));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("El10AU8IAAx8ITIAAIAByjIMjAAIAASjMAy2AAAIAAtxIOYAAIgBNxMA+NAAAIAAxWINKAAIAARWMBI/AAAIgB1iII+AAIAAViMAoFAAAIAAtLIHMAAIAANLMAneAAAIAAzvIKLAAIAATvMApRAAAIAAslIHLAAIAAMlMAxqAAAIgB0WIWJAAIAAUWMA8/AAAIAA37IQKAAIAAX7MA41AAAIAAzvIZHAAIAATvMAsRAAAIAAyjIOXAAIAASjMAm4AAAIAAxWIKyAAIAARWII/AAIAAR8g");
	this.shape.setTransform(1734.15,662.35);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(6));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4126.7,796.4);
// library properties:
lib.properties = {
	id: '0B6B5393B3FC8F489578E67DF971CA6B',
	width: 1456,
	height: 850,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0B6B5393B3FC8F489578E67DF971CA6B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;