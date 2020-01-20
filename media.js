window.onload = () => {
    // サイト読み込んだら
    const json = JSON.parse(document.getElementById('js-initial-watch-data').getAttribute('data-api-data'))
    console.log(json)

    const video = document.getElementsByTagName('video')[0]

    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: json.video.title,
            artist: json.video.id,
            album: json.video.id,
            artwork: [{ src: json.video.largeThumbnailURL , sizes: '360x640',   type: 'image/*' }]
        });
        navigator.mediaSession.setActionHandler('play', function () {
            navigator.mediaSession.playbackState = "playing"
            video.play();
        });
        navigator.mediaSession.setActionHandler('pause', function () {
            navigator.mediaSession.playbackState = "paused"
            video.pause()
        });
        navigator.mediaSession.setActionHandler('seekbackward', function () { });
        navigator.mediaSession.setActionHandler('seekforward', function () { });
        navigator.mediaSession.setActionHandler('previoustrack', function () { });
        navigator.mediaSession.setActionHandler('nexttrack', function () { });
    }

}