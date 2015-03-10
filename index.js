/**
 * Escape special characters in the given string of html.
 *
 * @param  {String} html
 * @return {String}
 */  

var fs = require('fs');

module.exports = {
	glitchFile: function(path,finalPath,intensity) {
	    fs.readFile(path, function(err,data){
	    for(var i = 0; i < intensity; i++){
	    	data = module.exports.randomizeChar(data,data.length,data.length/10,5000);
	    	data = module.exports.copyChar(data,data.length,data.length/10,5000,1);
		}
  		fs.writeFile(finalPath, data, function (err) {
		  if (err) throw err;
		  console.log('It\'s saved!');
		});
	  })

 	},

	randomizeChar: function(data,nbIt,sizeHeader,rand){
	  	for(var i = 0; i < nbIt; i++){
		    var i = Math.floor(data.length*Math.random()+sizeHeader);
	  		data[i] = Math.floor(Math.random()*rand);
	    }

	  	return data;
	},

	copyChar: function(data,nbIt,sizeHeader,rand,sizeDecal){
		for(var i = 0; i < nbIt; i++){
			var i = Math.floor(data.length*Math.random()+sizeHeader);
			for(var j = 0; j < sizeDecal; j++){
				data[i+j+sizeDecal] = data[i+j];
			}
		}
		return data;
	}


};