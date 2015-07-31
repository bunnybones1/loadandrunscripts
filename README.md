# loadandrunscripts

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Loads and runs scripts with a callback. Not unlike requirejs, but simpler and much more basic.
This module also decorates `document.write` to catch asyncronously added script tags and use an alternative method to load them. This is important if scripts you load try to load more scripts by using `document.write`.

## Usage

```
var onReady = function() {
	require('./main')();
};

var loadAndRunScripts = require('loadandrunscripts');
loadAndRunScripts(
	[
		'lib/three.js',
		'lib/stats.min.js',
		'lib/threex.rendererstats.js',
		'lib/gzip.js',
	],
	function() {
		loadAndRunScripts(
			[
				'lib/ColladaLoader.js',
				'lib/OBJLoader.js',
				'lib/SceneLoader.js',
				'https://maps.googleapis.com/maps/api/js?libraries=places&v=3.exp&sensor=false'
			],
			onReady
		);
	}
);
```

[![NPM](https://nodei.co/npm/loadandrunscripts.png)](https://nodei.co/npm/loadandrunscripts/)

## License

MIT, see [LICENSE.md](http://github.com/bunnybones1/loadandrunscripts/blob/master/LICENSE.md) for details.
