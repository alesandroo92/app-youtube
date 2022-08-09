const ytdl = require('ytdl-core');


const videoYoutube = function (req, res, next) {
    console.log('video descargando...')
    const {url} = req.body; 
    const date = Date.now();
    res.header("Content-Disposition", `attachmentt; filename="video_${date}.mp4"`);
    return ytdl(url).pipe(res);
}

const videoView = (req, res) => {
    res.render("video");
};


module.exports = { videoYoutube, videoView };