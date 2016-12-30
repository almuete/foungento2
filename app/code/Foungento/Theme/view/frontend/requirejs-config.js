var rand = Math.floor((Math.random() * 1000) + 1);
console.log("requirejs-config.js - " + rand);

var config = {
	"map": {
	    "*": {
	        "appf": "Foungento_Theme/js/appf",
	    }
	},
   	"paths": {
        "jquery"        : "Foungento_Theme/js/foundation6/jquery",
        "what-input"    : "Foungento_Theme/js/foundation6/what-input",
        "foundation"    : "Foungento_Theme/js/foundation6/foundation",    
    },
    "shim": {
        "foundation": ['jquery'],
    }
}
