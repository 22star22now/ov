function toggleFullscreen(elementId) {
    const element = document.getElementById(elementId);

    if (element.requestFullscreen) {
        element.requestFullscreen(); // Standard method
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen(); // Firefox
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(); // Chrome, Safari, Opera
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen(); // IE/Edge
    } else {
        alert('Fullscreen is not supported by this browser.');
    }
}
