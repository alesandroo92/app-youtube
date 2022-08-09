const ytdl = require('ytdl-core');


const audioYoutube = function(req, res, next) {
    console.log('audio descargando...')
    const {url} = req.body; 
    const date = Date.now();
    res.header("Content-Disposition", `attachmentt; filename="audio_${date}.mp4"`);
    return ytdl(url, { filter: 'audioonly' }).pipe(res);
};

const audioView = (req, res) => {
    res.render("audio");
};


module.exports = { audioYoutube, audioView };