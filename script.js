
jQuery(document).ready(function() {
	$('#copy').click(function(e) {
		e.preventDefault();
		var textToCopy = $('#input').val();
		var tempInput = document.createElement('input');
		tempInput.value = textToCopy;
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand('copy');
		document.body.removeChild(tempInput);
		alert('text: ' + textToCopy + ' is copied to clipboard');
	});

});

