var fms = require('fms');
fms.run();

fms.ajax({
	url:'/test/',
	type:'get',
	res:{
		ok:{"name":"小明"},
		err:'no'
	}
})