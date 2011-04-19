function VideoListRow(videoObject) {
	this.videoObject = videoObject;
}

VideoListRow.prototype.drawVideo = function(){
	var rowDiv = document.createElement("div");
	rowDiv.setAttribute("class", "videoListRow");
	
	var deleteLink = document.createElement("a");
	deleteLink.setAttribute("href", "#");
	deleteLink.setAttribute("onclick", "deleteVideo(\"" + this.videoObject.id + "\")");
	deleteLink.setAttribute("style", "vertical-align: middle");
	rowDiv.appendChild(deleteLink);
	
	var deleteIcon = document.createElement("image");
	deleteIcon.src = "/img/delete.png";
	deleteIcon.setAttribute("style", "width:15px; margin-right: 5px;");
	deleteLink.appendChild(deleteIcon);
	
	var link = document.createElement("a");
	link.setAttribute("href", "#");
	link.setAttribute("onclick", "openVideoInNewTab(\"" + this.videoObject.id + "\")");
	rowDiv.appendChild(link);
	
	var videoUrl = document.createTextNode(this.videoObject.title);
	link.appendChild(videoUrl);
	
	document.getElementById('videoList').appendChild(rowDiv);
}

VideoListRow.prototype.openVideoInNewTab = function(targetUrl){
	var createProperties = new Object();
	createProperties.url = this.videoObject.url;
	chrome.tabs.create(createProperties);
}

VideoListRow.prototype.deleteVideo = function(){
	watchListDao.deleteVideo(this.videoObject);
}

VideoListRow.prototype.isVideoWithId = function(id){
	return this.videoObject.id == id;
}