// The main game loop
	var lastTime;
	function main() {
	    var now = Date.now();
	    var dt = (now - lastTime) / 1000.0;

	    update(dt);
	    render();

	    lastTime = now;
	    requestAnimFrame(main);
	};

// Create the canvas
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	canvas.width = 512;
	canvas.height = 480;
	document.body.appendChild(canvas);

//init
	function init() {
	    // terrainPattern = ctx.createPattern(resources.get('img/terrain.png'), 'repeat');

	    document.getElementById('play-again').addEventListener('click', function() {
	        reset();
	    });

	    reset();
	    lastTime = Date.now();
	    main();
	}

//load all ressources
	resources.load([
	    'public/images/dwarf-sprites.png'
	]);
	resources.onReady(init);

// Game state
	var player = {
	    pos: [0, 0],
	    //Sprite(url, pos, size, speed, frames, dir, once)
	    sprite: new Sprite({
	    	url : 'public/images/dwarf-sprites.png'
	    	,	pos : [0, 0]
	    	,	size: [25, 25]
	    	,	speed: 4
	    	,	frames: [1, 2]
			//,	dir
	    	//,	once
	    })
	};

	var gameTime = 0;
	var isGameOver;

// Speed in pixels per second
	var playerSpeed = 70;

// Update game objects
	function update(dt) {
	    gameTime += dt;
	    handleInput(dt);
	    updateEntities(dt);
	};

//updateEntities
	function updateEntities(dt) {
	    // Update the player sprite animation
	    player.sprite.update(dt);
	}

// Draw everything
	function render() {
		ctx.fillStyle = "green";
	    ctx.fillRect(0, 0, canvas.width, canvas.height);

	    // Render the player if the game isn't over
	    if(!isGameOver) {
	        renderEntity(player);
	    }
	};

	function renderEntities(list) {
	    for(var i=0, len=list.length; i<len; i++) {
	        renderEntity(list[i]);
	    }    
	}

	function renderEntity(entity) {
	    ctx.save();
	    ctx.translate(entity.pos[0], entity.pos[1]);
	    entity.sprite.render(ctx);
	    ctx.restore();
	}

// Reset game to original state
	function reset() {
	    isGameOver = false;
	    gameTime = 0;
	    score = 0;

	    enemies = [];
	    bullets = [];

	    player.pos = [50, canvas.height / 2];
	};