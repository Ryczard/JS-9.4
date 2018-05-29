var height = prompt('Podaj wysokość choinki');
function drawTree(h){	
	for (var i = 1; i <= h; i++){
		var star = "";
		for (var k = i; k < h; k++){
			star += ' ';
		}
		for (var j = 1; j < 2 * i; j++){
			star += '*';
		}
		console.log(star);
	}
}
drawTree(height);