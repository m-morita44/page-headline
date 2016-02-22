
var getHeadline = function(){
  chrome.tabs.executeScript(null, {file: "jquery-1.12.0.min.js"}, function(){
      chrome.tabs.executeScript(null, {file: "inject.js"}, function(response){
      	console.log(response);
      	return response;
    });
  });
}