chrome.runtime.onInstalled.addListener(function() {
  chrome.browserAction.onClicked.addListener(function(activeTab){
    var newURL = "https://dashboard.e-gineering.com/";
    chrome.tabs.create({ url: newURL });
  });
});