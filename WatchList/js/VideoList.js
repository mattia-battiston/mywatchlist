function VideoList() {
	this.videoListRows = new Array();
}

VideoList.prototype.init = function(){
	var videoObjects = watchListDao.getAllVideos();
	for(var i = 0; i < videoObjects.length; i++) {
		this.videoListRows[i] = new VideoListRow(videoObjects[i]);
	}
	
	this.drawVideoList();
}

VideoList.prototype.drawVideoList = function() {
	for(var i = 0; i < this.videoListRows.length; i++) {
		this.videoListRows[i].drawVideo();
	}
}