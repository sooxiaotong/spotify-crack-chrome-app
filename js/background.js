chrome.webRequest.onHeadersReceived.addListener(function(details) { 
    if(details.responseHeaders.find(el => el.name == "Content-Type").value.includes("mp3"))
        return {redirectUrl: 'https://raw.githubusercontent.com/texnikru/blank-mp3s/master/point1sec.mp3'};
}, { urls: ["*://*.audio-akp-quic-spotify-com.akamaized.net/*"]}, ["blocking","responseHeaders"])
