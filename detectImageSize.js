var fs = require('fs');
var sizeOf = require('image-size');

var root="./";

fs.readdir(root, function(err,files){
	if(err) throw err;
	files.forEach(function(elem, index){
		var imgREG = /([a-zA-Z0-9_]+)(.png|.jpeg|.jpg|.gif)$/
		if(imgREG.test(elem)){

			fs.stat(root + elem,function(err, stats){
				if(err) throw err;
				//console.log(stats);
				var size = (stats.size/1024);
				if(size > 300){
					console.log("image："+ root+elem +",          "+ (size).toFixed(2) +"KB,超过300KB限制");
				}
			});
			
/*
			var dimensions = sizeOf(root + elem);
			console.log(JSON.stringify(dimensions));*/
		}


		/*
		fs.readFile(root + elem, function(err, data){
			if(err) throw err;
			console.log(data);

		});
		*/
	});
	

});