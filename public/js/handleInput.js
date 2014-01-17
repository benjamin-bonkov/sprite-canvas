

function handleInput(dt) {
    if(input.isDown('DOWN') || input.isDown('s')) {
        player.pos[1] += playerSpeed * dt;
        player.sprite.updateDir("DOWN");
        input.lastKey = "DOWN";
        return;
    }

    if(input.isDown('UP') || input.isDown('z')) {
        player.pos[1] -= playerSpeed * dt;
        player.sprite.updateDir("UP");
        input.lastKey = "UP";
        return;
    }
    
    // if(input.isDown('SPACE')) {
    //     player.sprite.jump();
    //     return;
    // }

    if(input.isDown('LEFT') || input.isDown('q')) {
        player.pos[0] -= playerSpeed * dt;
        player.sprite.updateDir("LEFT");
        input.lastKey = "LEFT";
        return;
    }

    if(input.isDown('RIGHT') || input.isDown('d')) {
        player.pos[0] += playerSpeed * dt;
        player.sprite.updateDir("RIGHT");
        input.lastKey = "RIGHT";
        return;
    }
    player.sprite.updateDir("STAND");

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