chrome.extension.onRequest.addListener(function(request, sender, callback) {
  switch (request.action){
    case "headlines":
      console.log(request.action);
      var $lines = [];
      $("h1, h2, h3, h4, h5, h6").each(function(i) {
        $lines.push({"tag": this.tagName, "description": $(this).text()});
      });
      callback({lines: $lines});
      break;

    case "scrollTop":
      console.log(request.action);
      console.log(request.index);
      $("html, body").animate({
        scrollTop: $("h1, h2, h3, h4, h5, h6").eq(request.index).offset().top
      }, "fast");
      break;
  }
});
