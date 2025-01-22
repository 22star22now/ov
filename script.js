function toggleFullscreen(iframeClass) {
    const iframe = document.querySelector(`.${iframeClass}`);
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen(); // Firefox
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen(); // Chrome, Safari, Opera
    } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen(); // IE/Edge
    }
}
