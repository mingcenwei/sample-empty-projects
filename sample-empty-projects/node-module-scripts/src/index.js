#!/usr/bin/env node
"use strict";

import {fileURLToPath} from "url";

if (
	process.argv[1].replace(/\.m?js$/, ``) ===
	fileURLToPath(import.meta.url).replace(/\.m?js$/, ``)
) {
	// Main
} else {
	// Imported
}
