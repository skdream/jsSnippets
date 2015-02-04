var Download = require('download');
var progress = require('download-status');
var readJson = require('read-package-json');
var movefile = require('./movefile');



var download = new Download({ extract: true, strip: 1, mode: '755' })
   // .get('http://att1.niucdn.com/snail-com/2014/1224/c6e97bc8e07ff0de07051bbdd392bd1899f42545.jpeg')
    .dest('dest')
    .use(progress());
    
readJson('./data/data.json',function(err, data){
    if (err) {
        console.error("There was an error reading the file")
        return
    }
    var fileUrl = data.files;
    for(var i=0,len=fileUrl.length;i<len;i++){
        download.get(fileUrl[i]);
    }
    
    download.run(function(err, files, stream){
        if(err){
            throw err;
        }
        movefile.movefile('./dest');
        console.log('File downloaded successfully!');
    });
});