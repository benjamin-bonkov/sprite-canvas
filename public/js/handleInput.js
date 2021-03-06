
function handleInput(dt) {
    input.hasKeyPressed = false;



    if(input.isDown('SPACE')) {
        if(!player.sprite.state.isJumping){
            // console.log('jump');
            player.sprite.startJump();
        }
    }

    if(input.isDown('DOWN') || input.isDown('s')) {
        if(!terrain.collide({pos:[player.pos[0], (player.pos[1] + player.speed * dt)]})){
            player.pos[1] += player.speed * dt;
        }
        input.hasKeyPressed = true;
        player.sprite.updateDir("DOWN");
        input.lastKey = "DOWN";
    }

    if(input.isDown('UP') || input.isDown('z')) {
        if(!terrain.collide({pos:[player.pos[0], (player.pos[1] - player.speed * dt)]})){
            player.pos[1] -= player.speed * dt;
        }
        input.hasKeyPressed = true;
        player.sprite.updateDir("UP");
        input.lastKey = "UP";
    }

    if(input.isDown('LEFT') || input.isDown('q')) {
        if(!terrain.collide({pos:[(player.pos[0] - player.speed * dt), player.pos[1]]})){
            player.pos[0] -= player.speed * dt;
        }
        input.hasKeyPressed = true;
        player.sprite.updateDir("LEFT");
        input.lastKey = "LEFT";
    }

    if(input.isDown('RIGHT') || input.isDown('d')) {
        if(!terrain.collide({pos:[(player.pos[0] + player.speed * dt), player.pos[1]]})){
            player.pos[0] += player.speed * dt;
        }
        input.hasKeyPressed = true;
        player.sprite.updateDir("RIGHT");
        input.lastKey = "RIGHT";
    }
    if(!input.hasKeyPressed){
        player.sprite.updateDir("STAND");

    }

    // if(input.isDown('SPACE') &&
    //    !isGameOver &&
    //    Date.now() - lastFire > 100) {
    //     var x = player.pos[0] + player.sprite.size[0] / 2;
    //     var y = player.pos[1] + player.sprite.size[1] / 2;

    //     bullets.push({ pos: [x, y],
    //                    dir: 'forward',
    //                    sprite: new Sprite('img/sprites.png', [0, 39], [18, 8]) });
    //     bullets.push({ pos: [x, y],
    //                    dir: 'up',
    //                    sprite: new Sprite('img/sprites.png', [0, 50], [9, 5]) });
    //     bullets.push({ pos: [x, y],
    //                    dir: 'down',
    //                    sprite: new Sprite('img/sprites.png', [0, 60], [9, 5]) });


    //     lastFire = Date.now();
    // }
}