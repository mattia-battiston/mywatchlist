function AddVideoWidget() {}

AddVideoWidget.prototype.init = function() {
	this.loadUrlInBox();
};

AddVideoWidget.prototype.loadUrlInBox = function() {
	chrome.tabs.getSelected(null, function(tab) {
		document.getElementById("addVideoUrl").value = tab.url;
	});
}

AddVideoWidget.prototype.addVideo = function(){
	var videoUrl = document.getElementById("addVideoUrl").value;
	watchListDao.insertVideo("my new video", videoUrl);
	refresh();
}