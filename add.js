function add(a,b){
	var addplus = function(b){
		return a + b;
	}
	if(typeof b == 'undefined' ){
		return addplus();
	}else{
		return addplus(b);
	}
}