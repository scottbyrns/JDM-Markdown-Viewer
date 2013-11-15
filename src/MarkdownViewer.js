LiveWidgets.addWidget({
	name: "markdown-viewer",
	model: {},
	controller: {
	
		handleMessage: function (message, channel, id) {
			if (channel == "render-markdown") {
				
				this.element.innerHTML = markdown.toHTML(message);
				
			}
		}
		
	},
	constructor: function () {
		
	},
	reinit: function () {
		
	}
})