function VideoListRow(videoObject) {
	this.videoObject = videoObject;
}

VideoListRow.prototype.drawVideo = function(){
	var rowDiv = document.createElement("div");
	
	var deleteLink = document.createElement("a");
	deleteLink.setAttribute("href", "#");
	deleteLink.setAttribute("onclick", "deleteVideo(\"" + this.videoObject.id + "\")");
	deleteLink.setAttribute("style", "vertical-align: middle");
	var deleteIcon = document.createElement("image");
	deleteIcon.src = "/img/delete.png";
	deleteIcon.setAttribute("style", "width:15px; margin-right: 5px;");
	deleteLink.appendChild(deleteIcon);
	rowDiv.appendChild(deleteLink);
	
	var link = document.createElement("a");
	link.setAttribute("href", "#");
	link.setAttribute("onclick", "openVideoInNewTab(\"" + this.videoObject.id + "\")");
	var videoUrl = document.createTextNode(this.videoObject.url);
	link.appendChild(videoUrl);
	rowDiv.appendChild(link);
	
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