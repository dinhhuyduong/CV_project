var memoryArray = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];
var memoryVal = [];
var memoryTileId = [];
var memoryFlippedTile = 0;
var x = 0;
// document.getElementById('score').innerHTML = x;

Array.prototype.shuffleAll = function(){
	var i = this.length , j , temp ;
	while(i-- > 0){
		j = Math.floor(Math.random() * (i+1));
		temp = this[j];
		this[j] = this[i];
		this[i] = temp;
	}   				
}

function newTile(){
	x = 0;
	document.getElementById('score').innerHTML = x;
	memoryFlippedTile = 0;
	var tileOutput ="";
	memoryArray.shuffleAll();
	for(var i = 0; i < memoryArray.length; i++){
		tileOutput +='<div id="tile'+i+'" class="cube" onclick="memoryTileFlip(this,\''+memoryArray[i]+'\')"></div>'; 
	}
	document.getElementById('memoryPair').innerHTML = tileOutput ;
}
	
function memoryTileFlip(tile,val){
	if(tile.innerHTML == "" && memoryVal.length < 2){
		tile.style.background= "#000";
		tile.innerHTML = val;
		if(memoryVal.length == 0){
			memoryVal.push(val);
			memoryTileId.push(tile.id);
		}
		else if(memoryVal.length == 1){
			memoryVal.push(val);
			memoryTileId.push(tile.id);
			if(memoryVal[0] == memoryVal[1]){
				memoryFlippedTile += 2;
				memoryVal = [];
				memoryTileId = [];
				x += 10;
				document.getElementById('score').innerHTML = x;
				if(memoryFlippedTile == memoryArray.length){
					document.getElementById('memoryPair').innerHTML == "";
				}
			} else {
				function flipTileBack(){
					var tile1 = document.getElementById(memoryTileId[0]);
					var tile2 = document.getElementById(memoryTileId[1]);
					x -= 5;
					document.getElementById('score').innerHTML = x;
					tile1.style.background = 'yellowgreen';
					tile1.innerHTML="";
					tile2.style.background = 'yellowgreen';
					tile2.innerHTML="";
					memoryVal = [];
					memoryTileId = [];
				}
				setTimeout(flipTileBack,1000);
			}
		}
	}
}