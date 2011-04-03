function VideoListRow(videoObject) {
	this.videoObject = videoObject;
}

VideoListRow.prototype.drawVideo = function(){
	//TODO deleteVideo and openUrlInNewTab are broken, find a pattern to implement them
	var rowDiv = document.createElement("div");
	
	var deleteLink = document.createElement("a");
	deleteLink.setAttribute("href", "#");
	deleteLink.setAttribute("onclick", "videoList.deleteVideo(\"" + this.videoObject.url + "\")");
	deleteLink.setAttribute("style", "vertical-align: middle");
	var deleteIcon = document.createElement("image");
	deleteIcon.src = "/img/delete.png";
	deleteIcon.setAttribute("style", "width:15px; margin-right: 5px;");
	deleteLink.appendChild(deleteIcon);
	rowDiv.appendChild(deleteLink);
	
	var link = document.createElement("a");
	link.setAttribute("href", "#");
	link.setAttribute("onclick", "videoList.openUrlInNewTab(\"" + this.videoObject.url + "\")");
	var videoUrl = document.createTextNode(this.videoObject.url);
	link.appendChild(videoUrl);
	rowDiv.appendChild(link);
	
	document.getElementById('videoList').appendChild(rowDiv);
}

VideoListRow.prototype.openUrlInNewTab = function(targetUrl){
	var createProperties = new Object();
	createProperties.url = targetUrl;
	chrome.tabs.create(createProperties);
}

VideoListRow.prototype.deleteVideo = function(videoUrl){
	watchListDao.deleteVideo(videoUrl);
	refresh();
}