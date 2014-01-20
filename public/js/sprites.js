
(function() {
    function Sprite(url, pos, size, speed, frames, dir, once) {
        this.pos = pos;
        this.size = size;
        this.speed = typeof speed === 'number' ? speed : 0;
        this.frames = frames;
        this._index = 0;
        this.url = url;
        this.dir = dir || 'STAND';
        this.once = once;
        this.isJumping = false;
        this.isJumpingUp = false;
        this.isJumpingDown = false;
        this.jumpHight = 20;
        this.decalJump = 0;
        this.gravityModifier = 1;
    };

    Sprite.prototype = {
        update: function(dt) {
            this._index += this.speed*dt;
        },

        updateDir: function(dir){
            this.dir = dir;
        },

        startJump : function(){
            // console.log("startJump");
            this.isJumping = true;
            this.isJumpingUp = true;
        },

        jumping : function(){
            if(this.isJumpingUp){
                this.decalJump += 1+this.gravityModifier;
                this.gravityModifier -= 0.1;
                if (this.decalJump >= this.jumpHight) {
                    this.isJumpingUp = false;
                    this.isJumpingDown = true;
                }
            }else{
                this.decalJump -= 1+this.gravityModifier;
                this.gravityModifier += 0.1;
                 if (this.decalJump <= 0) {
                    this.isJumping = false;
                    this.isJumpingDown = false;
                    this.decalJump = 0;
                    this.gravityModifier = 1;
                }
            }

        },

        render: function(ctx) {
            var frame;

            if(this.speed > 0) {
                var max = this.frames.length;
                var idx = Math.floor(this._index);
                frame = this.frames[idx % max];

                if(this.once && idx >= max) {
                    this.done = true;
                    return;
                }
            }
            else {
                frame = 0;
            }


            var x = this.pos[0];
            var y = this.pos[1];

            x += frame * this.size[0];
            switch(this.dir){
                case "DOWN" :
                    // console.log("DOWN");
                    y = 0;
                break;
                case "UP" :
                    // console.log("UP");
                    y = 3 * this.size[1];
                break;
                case "LEFT" :
                    // console.log("LEFT");
                    y = 2 * this.size[1];
                break;
                case "RIGHT" :
                    // console.log("RIGHT");
                    y = 1 * this.size[1];
                break;
                default:
                    // console.log("STAND");
                    // console.log(input.lastKey);
                    y = 0;
                    x = 0;
                    switch(input.lastKey){
                        case "DOWN" :
                            y = 0;
                            x = 0;
                        break;
                        case "UP" :
                            y = 3 * this.size[1];
                            x = 0;
                        break;
                        case "LEFT" :
                            y = 2 * this.size[1];
                            x = 0;
                        break;
                        case "RIGHT" :
                            y = 1 * this.size[1];
                            x = 0;
                        break;
                        default:
                            y = 0;
                            x = 0;
                        break;
                    }
            }
            // if(this.dir == 'vertical') {
            //     y += frame * this.size[1];
            // }
            // else {
            //     x += frame * this.size[0];
            // }

            if(this.isJumping){
                this.jumping();
            }
            ctx.drawImage(resources.get(this.url),
                          x, y,
                          this.size[0], this.size[1],
                          0, -this.decalJump,
                          this.size[0], this.size[1]);
        }

    };

    window.Sprite = Sprite;
})();