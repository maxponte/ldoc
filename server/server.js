var http = require('http');

function zip(L, K, f) {
	var i, n = Math.min(L.length, K.length), O = [];
	for (i = 0; i < n; i++) {
		O.push(f(L[i], K[i]));
	}
	return O;
}

function mkResponse() {
	
}

http.createServer(function (req, res) {
	var keys = Object.keys(req);
	res.end('{\n' + zip(keys, keys.map(function (k) {
		return req[k];
	}), function (l, k) {
		return '  ' + l + ': ' + k;
	}).join(',\n') + '\n}');
}).listen(1337);