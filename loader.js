var loader = {
    load:function(data,fileload,complete){
        this.total = data.length;
        this.current=0;
        this.onFileLoad = fileload;
        this.onComplete = complete;
        for(var i=0;i<data.length;i++){
            this.loadImg( data[i] );
        }
    },
    loadImg:function(data){
        var img = new Image();
        var self = this;
        img.onload=function(){
            self.current++;
            self.ifLoadComplete();
        }
        img.src= data.file;
    },
    ifLoadComplete:function(){
        this.current===this.total? this.onComplete(): this.onFileLoad(this.current);
    }
}

loader(data,function(data){console.log(data)},function(){console.log('done'))