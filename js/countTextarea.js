	var W3CDOM = document.createElement && document.getElementsByTagName;
	
	window.onload = setMaxLength;
	
	function setMaxLength() {
		//if (!W3CDOM) return;
		var textareas = document.getElementsByTagName('textarea');
		var counter = document.createElement('div');
		counter.className = 'counter';
		for (var i=0;i<textareas.length;i++) {
			if (textareas[i].getAttribute('maxlength')) {
				var counterClone = counter.cloneNode(true);
				counterClone.innerHTML = '<span>0</span>/'+textareas[i].getAttribute('maxlength');
				textareas[i].parentNode.insertBefore(counterClone,textareas[i].nextSibling);
				textareas[i].relatedElement = counterClone.getElementsByTagName('span')[0];
				textareas[i].onkeyup = textareas[i].onchange = checkMaxLength;
				textareas[i].onkeyup();
			}
		}
	}
	
	function checkMaxLength() {
		var maxLength = this.getAttribute('maxlength');
		var currentLength = this.value.length;
		if (currentLength > maxLength)
			this.relatedElement.className = 'toomuch';
		else
			this.relatedElement.className = '';	
		this.relatedElement.firstChild.nodeValue = currentLength;
	}