 var fs = require('fs');
 var cpFile = require('cp-file');
 
 
 function copyfile(oldPath,newPath,callback){

    cpFile(oldPath, newPath, function (err) {
        console.log('file copied');
        fs.unlink(oldPath,function(){
        
            console.log('oldfie' + oldPath + ' had deleted');
        });
    });
    return false;
    
/*
 var patharr = newPath.split('/');
 var path = [patharr[0],patharr[1],patharr[2]].join('/');
 fs.exists(path, function(exist){
    if(!exist){
        fs.mkdir(path,  function(){
        

        
            fs.rename(oldPath, newPath, function(err, data){
                if(err){
                    throw err;
                }
                callback(err,data);
            
            })
        })
    }
 })
 */
 

}
function moveFile(dir){
     fs.readdir(dir,function(err, files){
        
        for(var i=0,len=files.length; i<len; i++){
        
            var temarr =  files[i].split('.');
            var fileType = temarr[ temarr.length-1 ];
            switch(fileType){
                case 'jpeg':
                case 'jpg':
                    copyfile(dir + "/" + files[i],dir+"/images/" + files[i],function(err,data){
                    
                    
                    });
                    break;
                case 'js':
                    copyfile(dir + "/" + files[i],dir+"/js/" + files[i],function(err,data){
               
                    
                    });
                    break;
                case 'css':
                    copyfile(dir + "/" +  files[i],dir+"/css/" + files[i],function(err,data){
                       
                    
                    });
                    break;
            }
        }
    });
}
 


exports.movefile = moveFile;