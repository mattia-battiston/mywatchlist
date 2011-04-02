function echo(message) {
	console.log(message);
}

function AddVideoWidget() {
	console.log("creo widget AddVideo");
}

AddVideoWidget.prototype.sayHello = function() {
	console.log('hello');
};