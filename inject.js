var headlines = [];
$("h1, h2, h3, h4, h5, h6").each(function(i) {
	headlines.push({"tag": this.tagName, "description": $(this).text()});
});
headlines;