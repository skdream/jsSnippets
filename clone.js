var clone = function (obj){
    var newObj;
    
    if(obj instanceof Array){
        newObj = [];
        for(var i in obj){
            newObj.push( clone(obj[i]) );
        }
    }else if(obj instanceof Object){
        newObj = {};
        for(var i in obj){
            newObj[i] = clone(obj[i]);
        }
    }else if(typeof obj != 'object' && typeof obj != 'function' && typeof obj != 'undefined'){
        return obj;
    }
    return newObj;
}