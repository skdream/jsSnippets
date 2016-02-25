function AudioPlayer(options){

	var audio = document.createElement('audio');


	if(!audio){
		throw new Error('初始化音频失败！');
	}

	var html = "";
	if(options.autoplay){
		audio.setAttribute('autoplay',true);
	}

	if(options.controls){
		audio.setAttribute('controls',true);
	}
	if(options.loop){
		audio.setAttribute('loop',true);
	}

	if(options.preload){
		audio.setAttribute('preload',true);
	}

	if(options.ogg){
		html += "<source src='" + options.ogg + "' type='audio/ogg'>";
	}

	if(options.webm){
		html += "<source src='" + options.webm + "' type='audio/webm'>";
	}
	if(options.mp3){
		html += "<source src='" + options.mp3 + "' type='audio/mp3'>";
	}
	if(options.aac){
		html += "<source src='" + options.aac + "' type='audio/aac'>";
	}

	html += "您的浏览器不支持H5!";

	if(!audio.innerHTML || audio.innerHTML.length<0){
		audio.innerHTML = html;
	}


	return {
		audio:audio,
		play:function(){
			audio.play();
		},
		pause:function(){
			audio.pause();
		},
		stop:function(){
			audio.stop();
		},
		duration:function(){
			return audio.duration;
		},
		bind:function(){
			try{
				audio.addEventListener(event, handler,false);
			}catch(e){
				audio[event] = handler;
			}
		}
	}


}


var audio = new AudioPlayer({
		autoplay:true,
		controls:true,
		preload:true,
		loop:true,
		ogg:'url',
		webm:'url',
		mp3:'url',
		aac:'url',

	});

audio.play();
audio.stop();
audio.pause();
audio.bind('click',function(){});


