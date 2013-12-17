function Popup() {

    this.sharer = new Sharer();

    $('a.request').click(function() {
        chrome.tabs.query({ active: true }, function(data) {
            var site;
            if (data && data[0].url) {
                site = new URL(data[0].url).hostname;
            } else {
                site = "FILL ME IN!";
            }
            $('.waltz-share').data('site', site);
            $('.request-container').slideDown();
        });
    });

    chrome.browserAction.getBadgeText({}, function(details) {
        chrome.browserAction.setBadgeText({ text: "" });
        console.log(details);
    })
}

var popup = new Popup();