const fs = require('fs');
fs.readdir('themes',function(err,files){
    if (err) return console.log(err);
    console.log('[')
    files.forEach(function(f){console.log(`   "${f}",`)});
    console.log(']')
});