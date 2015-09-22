var i,j;

var arrArange = [];

for(i=0;i<=195;i=i+15){
    
    for(j=0;j<=195;j=j+15){

        arr = j+'px '+ i+'px 0 rgb(114, 188, 191)';
        if(i==0){
            arrArange.push(arr);
        }else if(j==0){
            arrArange.push(arr);
        }else if(i==195){
            arrArange.push(arr);
        }else if(j==195){
            arrArange.push(arr);
        }
    }
}