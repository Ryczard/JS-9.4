var height = prompt('Podaj wysokość choinki');
function drawTree(h){
	for (var i = 0 ; i < h ; i++){

		var star = new String();

		for (j = 0 ; j <= i ; j++){

			star += '*';

		}

	console.log(star);
		
	}
}

console.log(drawTree(height));

//v1, pracuje nad równą choinką