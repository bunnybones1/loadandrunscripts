var loadAndRunScripts = require('./');
loadAndRunScripts(
	[
		'lib/test1.js',
		'lib/test2.js'
	],
	function() {
		console.log("DONE");	
	}
);