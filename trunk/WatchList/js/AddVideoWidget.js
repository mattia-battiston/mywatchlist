function AddVideoWidget() {}

AddVideoWidget.prototype.init = function() {
	this.loadUrlInBox();
};

AddVideoWidget.prototype.loadUrlInBox = function() {
	chrome.tabs.getSelected(null, function(tab) {
		document.getElementById("addVideoTitle").value = tab.title;
		document.getElementById("addVideoUrl").value = tab.url;
		
		makeTitleTextSelected();
	});
}

AddVideoWidget.prototype.addVideo = function(){
	var videoTitle = document.getElementById("addVideoTitle").value;
	var videoUrl = document.getElementById("addVideoUrl").value;
	watchListDao.insertVideo(videoTitle, videoUrl);
	refresh();
}

function makeTitleTextSelected(){
	document.getElementById("addVideoTitle").focus();
    document.getElementById("addVideoTitle").select();
}