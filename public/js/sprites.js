
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
    };

    Sprite.prototype = {
        update: function(dt) {
            this._index += this.speed*dt;
        },

        updateDir: function(dir){
            this.dir = dir;
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

            ctx.drawImage(resources.get(this.url),
                          x, y,
                          this.size[0], this.size[1],
                          0, 0,
                          this.size[0], this.size[1]);
        }
    };

    window.Sprite = Sprite;
})();