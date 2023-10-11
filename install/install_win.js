const fs = require('fs');

module.exports = function(){
    makeEnv('edge-js');
};

function makeEnv(pack) {
    fs.writeFileSync(fs.realpathSync(__dirname + '\\..') + "\\.env", `NNP_PACKAGE=${pack}`);
}
