#!/usr/env/bin node
"use strict";

import {execFileSync} from "child_process";

if (process.argv.length === 2) {
	execFileSync(`ts-node`, [], {
		stdio: `inherit`,
		encoding: `utf8`,
	});
} else {
	execFileSync(
		`node`,
		[
			`--disable-proto=delete`,
			`--disallow-code-generation-from-strings`,
			`--enable-source-maps`,
			`--experimental-repl-await`,
			`--experimental-loader=ts-node/esm`,
			`--experimental-modules`,
			`--experimental-specifier-resolution=node`,
			`--experimental-import-meta-resolve`,
			`--experimental-json-modules`,
			`--experimental-vm-modules`,
			`--`,
			...process.argv.slice(2),
		],
		{
			stdio: `inherit`,
			encoding: `utf8`,
		},
	);
}
