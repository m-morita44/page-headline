$(function(){
  chrome.tabs.executeScript(null, {file: "jquery-1.12.0.min.js"}, function(){
    chrome.tabs.executeScript(null, {file: "inject.js"}, function(response){
      console.log(response[0]);
  
      for (var i = 0; i < response[0].length; ++i) {
        console.log(response[0][i]["description"]);
        $("#hd-list > ul").append($("<li></li>")
        	.text(response[0][i]["description"])
        	.addClass(response[0][i]["tag"]))
      }
    });
  });
});
