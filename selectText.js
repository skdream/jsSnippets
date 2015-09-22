// http://stackoverflow.com/a/987376/1189321
function selectText(element){
	var doc = document,
		text = doc.getElementById(element),
		range,selection;
	if(doc.body.createTextRange){
		range = doc.body.createTextRange();
		range.moveToElementText(text);
		range.select();
	}else if(window.getSelection){
		selection = window.getSelection();
		range = doc.createRange();
		range.selectNodeContents(text);
		selection.removeAllRanges();
		selection.addRange(range);
	}
}