/**
 * Escape special characters in the given string of html.
 *
 * @param  {String} html
 * @return {String}
 */  

var fs = require('fs');
var readimage = require('readimage');
module.exports = {
	glitchFile: function(path,finalPath,intensity) {
	    fs.readFile(path, function(err,data){

	    var strData;

	    for(var i = 0; i < data.length; i++){
	    	strData += data[i].toString();

	    }
	    strData = strData.substr(100, strData.length);
	    console.log(data);
	    //data = strData
	   // var header = data.slice(0,data.length/10);
	   // data = data.slice(data.length/10, data.length);
	   intensity = 40;
	    for(var i = 0; i < intensity; i++){
	    	data = module.exports.copyChar(data,2,5000,1);
	    	data = module.exports.randomizeChar(data,11,5000);
	    	//data = module.exports.invertChar(data,101);
	    	//data = module.exports.skipChar(data,100);
	    	
		}
		//data = header.concat(data);
		//data = Buffer.concat([header, data]);
		 console.log(data);
  		fs.writeFile(finalPath, data, function (err) {
		  if (err) throw err;
		  console.log('It\'s savesed!');
		});
	  })

 	},

	randomizeChar: function(data,nbIt,sizeHeader,rand){
	  	for(var i = 0; i < nbIt; i++){
		    var k = Math.floor(data.length*Math.random()+sizeHeader);
	  		data[k] = Math.floor(Math.random()*rand);
	  		
	    }

	  	return data;
	},

	copyChar: function(data,nbIt,sizeHeader,rand,sizeDecal){
		for(var i = 0; i < nbIt; i++){
			var k= Math.floor(data.length*Math.random()+sizeHeader);
			for(var j = 0; j < sizeDecal; j++){
				data[i+j+sizeDecal] = data[i+j];
			}
		}
		return data;
	},

	invertChar: function(data,sizeHeader){

		for(var j = sizeHeader+1000; j < data.length-1000; j++){
			if(data[j] == 1)data[j] = 0;
			if(data[j] == 0)data[j] = 1;
		}
		
		return data;
	},

	skipChar: function(data,sizeHeader){

		for(var j = sizeHeader; j < data.length-500; j+=20){
			data[j] = "66";
		}
		
		return data;
	}


};