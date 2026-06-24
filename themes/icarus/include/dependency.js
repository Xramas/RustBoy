/* eslint no-process-exit: "off" */
const fs = require('fs');
const path = require('path');
const semver = require('semver');
const createLogger = require('hexo-log');
const packageInfo = require('../package.json');
const { yellow, red, green } = require('./util/console');

const logger = createLogger.default();

module.exports = hexo => {
    function checkDependency(name, reqVer) {
        try {
            const resolved = require.resolve(name + '/package.json');
            const version = JSON.parse(fs.readFileSync(resolved, 'utf8')).version;
            if (!semver.satisfies(version, reqVer)) {
                logger.error(`Package ${yellow(name)}'s version (${yellow(version)}) does not satisfy the required version (${red(reqVer)}).`);
                return false;
            }
            return true;
        } catch (e) {
            // Fallback: resolve main entry and walk up to find package.json
            try {
                const entry = require.resolve(name);
                let dir = path.dirname(entry);
                while (dir !== path.dirname(dir)) {
                    const pkgPath = path.join(dir, 'package.json');
                    if (fs.existsSync(pkgPath)) {
                        const version = JSON.parse(fs.readFileSync(pkgPath, 'utf8')).version;
                        if (!semver.satisfies(version, reqVer)) {
                            logger.error(`Package ${yellow(name)}'s version (${yellow(version)}) does not satisfy the required version (${red(reqVer)}).`);
                            return false;
                        }
                        return true;
                    }
                    dir = path.dirname(dir);
                }
            } catch (e2) {
                // ignore
            }
            logger.error(`Package ${yellow(name)} is not installed.`);
        }
        return false;
    }

    logger.info('=== Checking package dependencies ===');
    const dependencies = Object.assign({}, packageInfo.dependencies);
    const missingDeps = Object.keys(dependencies)
        .filter(name => !checkDependency(name, dependencies[name]));
    if (missingDeps && missingDeps.length) {
        logger.error('Please install the missing dependencies your Hexo site root directory:');
        logger.error(green('npm install --save ' + missingDeps.map(name => `${name}@${dependencies[name]}`).join(' ')));
        logger.error('or:');
        logger.error(green('yarn add ' + missingDeps.map(name => `${name}@${dependencies[name]}`).join(' ')));
        process.exit(-1);
    }
};
