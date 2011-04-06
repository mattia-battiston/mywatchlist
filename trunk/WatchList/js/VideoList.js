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

VideoList.prototype.openVideoInNewTab = function(videoObjectId) {
	this.getVideoListRow(videoObjectId).openVideoInNewTab();
}

VideoList.prototype.deleteVideo = function(videoObjectId) {
	this.getVideoListRow(videoObjectId).deleteVideo();
}

VideoList.prototype.getVideoListRow = function(videoObjectId){
	for(var i = 0; i < this.videoListRows.length; i++) {
		if(this.videoListRows[i].isVideoWithId(videoObjectId)){
			return this.videoListRows[i];
		}
	}
}