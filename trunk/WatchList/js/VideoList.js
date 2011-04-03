function VideoList() {}

VideoList.prototype.init = function(){
	this.drawVideoList();
}

VideoList.prototype.drawVideoList = function() {
	var videos = watchListDao.getAllVideos();

	for(var i = 0; i < videos.length; i++) {
		this.drawVideo(videos[i])
	}
}

VideoList.prototype.drawVideo = function(video){
	var rowDiv = document.createElement("div");
	
	var deleteLink = document.createElement("a");
	deleteLink.setAttribute("href", "#");
	deleteLink.setAttribute("onclick", "videoList.deleteVideo(\"" + video + "\")");
	deleteLink.setAttribute("style", "vertical-align: middle");
	var deleteIcon = document.createElement("image");
	deleteIcon.src = "/img/delete.png";
	deleteIcon.setAttribute("style", "width:15px; margin-right: 5px;");
	deleteLink.appendChild(deleteIcon);
	rowDiv.appendChild(deleteLink);
	
	var link = document.createElement("a");
	link.setAttribute("href", "#");
	link.setAttribute("onclick", "videoList.openUrlInNewTab(\"" + video + "\")");
	var videoUrl = document.createTextNode(video);
	link.appendChild(videoUrl);
	rowDiv.appendChild(link);
	
	document.getElementById('videoList').appendChild(rowDiv);
}

VideoList.prototype.openUrlInNewTab = function(targetUrl){
	var createProperties = new Object();
	createProperties.url = targetUrl;
	chrome.tabs.create(createProperties);
}

VideoList.prototype.deleteVideo = function(videoUrl){
	watchListDao.deleteVideo(videoUrl);
	refresh();
}