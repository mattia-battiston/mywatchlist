function AddVideoWidget() {
}

AddVideoWidget.prototype.init = function() {
	this.loadUrlInBox();
};

AddVideoWidget.prototype.loadUrlInBox = function() {
	chrome.tabs.getSelected(null, function(tab) {
		document.getElementById("addVideoUrl").value = tab.url;
	});
}