$(function(){
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendRequest(tab.id, {action: "headlines"}, function(response) {
      console.log(response.lines);
      for (var i = 0; i < response.lines.length; ++i) {
        console.log(response.lines[i]["description"]);
        $("#hd-list > ul").append($("<li></li>")
          .text(response.lines[i]["description"])
          .addClass(response.lines[i]["tag"])
          .attr("data-index", i)
          .click(function(){
            console.log($(this).attr("data-index"));
            chrome.tabs.sendRequest(tab.id, {action: "scrollTop", index: $(this).attr("data-index")});
          })
        )
      }
    });
  });
});
