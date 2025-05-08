const fs = require('fs'); // readdir, stat, stats.isDirectory
const path = require('path'); // extname, join
const util = require('util');

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

const printPath = async dirPath => {
    try {
        const files = await readdir(dirPath);
        
        for (const file of files) {
            const fullPath = path.join(dirPath, file);
            const stats = await stat(fullPath);

            if (stats.isDirectory()) {
                printPath(fullPath);
            } else if (path.extname(file) === '.js') {
                console.log(`${fullPath}`);
            }
        }
    } catch (err) {
        console.error(err);
    }
}

printPath('./test');