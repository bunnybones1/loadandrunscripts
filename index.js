var loadsPending = 0;
var onScriptsLoadedCallback;

function onScriptLoad() {
	loadsPending--;
	if(loadsPending == 0) onScriptsLoadedCallback();
}

function loadAndRunScripts(paths, callback) {
	onScriptsLoadedCallback = callback;
	var head = document.getElementsByTagName('head')[0];
	loadsPending = paths.length;
	for (var i = 0; i < paths.length; i++) {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.onreadystatechange = function () {
		  if (this.readyState == 'complete') onScriptLoad();
		}
		script.onload = onScriptLoad;
		script.src = paths[i];
		// script.src = 'lib/stats.min.js';
		head.appendChild(script);
	};
}

var oldWrite = document.write;
document.write = function() {
	var src = /src=(["'])(.*?)\1/.exec(arguments[0]);
	if(src[2]) {
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = src[2];
		head.appendChild(script);
	} else {
		oldWrite.apply(null, arguments);
	}
}


module.exports = loadAndRunScripts;