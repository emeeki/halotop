
var pints = ["bdaycake1.png", "blackcherry1.png", "cccd1.png"];

function myFunction() {
var random = Math.floor((Math.random() * pints.length));
document.getElementById('#pint').src = pints[random];
}

/*$('#random').on('click',
	function (){
		$('#pint').attr('src', pints[random]);

	});