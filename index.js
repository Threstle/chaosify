/**
 * Escape special characters in the given string of html.
 *
 * @param  {String} html
 * @return {String}
 */  

var fs = require('fs');

module.exports = {
	  glitchFile: function(path) {
	    fs.readdir(path, function(err,files){
	    console.log(files);
	  })
  }


};