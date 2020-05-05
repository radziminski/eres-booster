
chrome.runtime.onInstalled.addListener(function() {
    // setting up collors
    chrome.storage.sync.set({colorPrimary: '#2D787C'}, function() {});
    chrome.storage.sync.set({colorSecondary: '#548BB0'}, function() {});
    chrome.storage.sync.set({colorText: '#fff'}, function() {});
    
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'studia3.elka.pw.edu.pl'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });

