const fs = require('fs');

fs.createReadStream('src/index.d.ts').pipe(fs.createWriteStream('dist/index.d.ts'));
