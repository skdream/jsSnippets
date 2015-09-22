function getFlashMovieObject(movieName) {
    if (window.document[movieName] && !$.support.leadingWhitespace) {
		return window.document[movieName];
	} else if ((navigator.appName.indexOf("Microsoft Internet") == -1) && (document.embeds && document.embeds[movieName])) {
		return document.embeds[movieName];
	} else {
		return document.getElementById(movieName);
	}
}