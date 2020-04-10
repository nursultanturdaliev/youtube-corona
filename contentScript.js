console.log("Content Script from YouTube Corona!");

setInterval(function(){ 
    document.querySelectorAll("#video-title").forEach(
        function(element) {
            if(element.innerText.match(/(corona|covid|корона)/i)){
                var videoTitle = element.parentElement.parentElement.parentElement.parentElement;
                var videoThumbnail = videoTitle.parentElement;
                var container = videoThumbnail.parentElement.parentElement;
                container.parentNode.removeChild(container);
            }
        }
    );
}, 1000);