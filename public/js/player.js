
(function() {
	// url, pos, size, speed, frames, dir, once
	function Sprite(param) {
		this.pos = param.pos;
		this.size = param.size;
		this.speed = typeof param.speed === 'number' ? param.speed : 0;
		this.frames = param.frames;
		this._index = 0;
		this.url = param.url;
		this.dir = param.dir || 'STAND';
		this.once = param.once;
		this.state = {
			isJumping : false
		};
		this.jump = {
			up : false
			, down : false
			, maxH : 20
			, h : 0
			, gravityModifier : 1
		}

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
			this.state.isJumping = true;
			this.jump.up = true;
		},

		jumping : function(){
			if(this.jump.up){
				this.jump.h += 1+this.jump.gravityModifier;
				this.jump.gravityModifier -= 0.1;
				if (this.jump.h >= this.jump.maxH) {
					this.jump.up = false;
					this.jump.down = true;
				}
			}else{
				this.jump.h -= 1+this.jump.gravityModifier;
				this.jump.gravityModifier += 0.1;
				if (this.jump.h <= 0) {
					this.jump.isJumping = false;
					this.jump.down = false;
					this.jump.h = 0;
					this.jump.gravityModifier = 1;
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
				break;
			}

            if(this.state.isJumping){
            	this.jumping();
            }

            ctx.drawImage(resources.get(this.url),
            	x, y,
            	this.size[0], this.size[1],
            	0, -this.jump.h,
            	this.size[0], this.size[1]);
        }

    };

    window.Sprite = Sprite;
})();