import jsx from './jsx/jsx.js'; jsx.buildIn();

function time(f, label, n, ...params) {
	let start = Date.now();
	for (let i = 1; i <= n; i++) {
		f(...params);
	}

	console.log(label, (Date.now() - start) / 1000, Math.log10(n));
}

function test(...params) {
	let p = 0;
	while (true) {
		params.shuffle();
		for (let subParams of params) {
			time(subParams[0], subParams[1], 10**p, ...subParams.slice(2));
		}

		console.log('\n');
		p++;
	}
}

export {test, time};
