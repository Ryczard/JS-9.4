var height = prompt('Podaj wysokość choinki');
function drawTree(h){	
	for (i = 1 ; i <= h ; i++){
		var star = new String();
		for (k = i ; k <= h - 1; k++){
			star += ' ';
		}
		for (j = 1 ; j <= 2 * i - 1 ; j++){
			star += '*';
		}
		console.log(star);
	}
}
console.log(drawTree(height));