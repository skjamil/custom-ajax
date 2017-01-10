'use strict';

var init = function() {

	/* Comment */
	var func = function() {
		var content = '';
		var resultDiv = document.getElementById('result');
		content = resultDiv.innerHTML;

		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4 && xhr.status == 200) {
				var result = JSON.parse(xhr.responseText);
				console.log(result);
				content = '';
				result.forEach(function(item){
					console.log(item);
					content += '<p>' + item.name + ' by ' + item.author + '</p>';
				});
				console.log(content);
				resultDiv.innerHTML = content;
			}
		}
		xhr.open('GET', 'server_data.php', true);
		xhr.send(null);

	};

	/* Event */
	var btn = document.getElementById('btn');

	btn.addEventListener('click', func, false);

}


window.addEventListener('load', init, false);
