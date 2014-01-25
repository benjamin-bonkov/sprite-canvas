function Terrain(){
	this.caseSize = 25;
	this.map = 
	[
		["","","","","","","","x","","","","","","","","","","","","","",""],
		["","","","","","","","","","","","","","","","","","","","","",""],
		["","","","","","","","","","","","","","","","","","","","","",""],
		["","","","","","","","x","","","","","","","","","","","","","",""],
		["","","","","","","","","","","","","","","","","","","","","",""],
		["","","","","","","","","","","","","","","","","","","","","",""],
		["","","","","","","","","","","","","","","","","","","","","",""],
		["","","","","","","","","","","","","","","","","","","","","",""],
		["","","","","","","","","","","","","","","","","","","","","",""],
		["","","","","","","","","","","","","","","","","","","","","",""],
		["x","x","x","x","","","","","","","","","","","","","","","","","",""],
		["","","","","","","","","","","","","","","","","","","","","",""],
		["","","","","","","","","","","","","","","","","","","","","",""],
		["","","","","","","","","","","","","","","","","","","","","",""],
		["","","","","","","","","","","","","","","","","","","","","",""],
		["","","","","","","","","","","","","","","","","","","","","",""],
		["","","","","","","","","","","","","","","","","","","","","",""],
		["","","","","","","","","","","","","","","","","","","","","",""],
		["","","","","","","","","","","","","","","","","","","","","",""],
		["","","","","","","","","","","","","","","","","","","","","",""],
		["","","","","","","","","","","","","","","","","","","","","",""],
		["","","","","","","","","","","","","","","","","","","","","",""]
	];
}
Terrain.prototype = {
	render : function(ctx){
		for(var i = 0, len = this.map.length; i < len; i++){
			for(var j = 0, len2 = this.map[i].length; j < len2; j++){
				if(terrain.map[i][j] == "x"){
					ctx.globalAlpha = 0.5;
					ctx.beginPath();
					ctx.rect(this.caseSize*j, this.caseSize*i, this.caseSize, this.caseSize);
					ctx.fillStyle = "black";
					ctx.fill();
					ctx.globalAlpha = 1;
				}else{
					ctx.globalAlpha = 0.5;
					ctx.beginPath();
					ctx.rect(this.caseSize*j, this.caseSize*i, this.caseSize, this.caseSize);
					ctx.strokeStyle = "black";
					ctx.stroke();
					ctx.globalAlpha = 1;
				}
			}
		}
	}
	,
	collide : function(item){
		console.log(item.pos[1])
		console.log(Math.floor(item.pos[1]/25))
		if(
		//limite terrain
			Math.floor(item.pos[1]/25) >= this.map.length-1
			||  Math.floor(item.pos[0]/25) >= this.map[0].length-1
			||	item.pos[1] <= 1
			||	item.pos[0] <= 1
		){
			console.log("?")
			return true;
		}
		// console.log(item.pos[1]/25)
		// console.log(Math.floor(item.pos[1]/25))
		// console.log(this.map[Math.floor(item.pos[1]/25)])
		//obstacle
		if(
			this.map[Math.floor(item.pos[1]/25)][Math.floor(item.pos[0]/25)] == 'x'
			||	this.map[Math.floor(item.pos[1]/25)+1][Math.floor(item.pos[0]/25)] == 'x'
			||	this.map[Math.floor(item.pos[1]/25)][Math.floor(item.pos[0]/25)+1] == 'x'
			||	this.map[Math.floor(item.pos[1]/25)+1][Math.floor(item.pos[0]/25)+1] == 'x'
		){
			return true;
		}
		return false;
	}
}