var RaspiCam = require('raspicam');
var PNGImage = require('pngjs-image');
const config = require('../../config/config');

function takeRaspicamPhoto(path, callback) {
  var camera = new RaspiCam({
    mode: 'photo',
    output: path
  })
  .on("read", callback)
  .start();
}

function generatePng(path, callback) {
  var image = PNGImage
    .createImage(300, 300)
    .writeImage(path, callback);
}

function getTimestamp() {
  return + new Date();
}

function getStaticImageRelativeUrl(filename) {
  return '/images/' + filename;
}

function getFilename() {
  return getTimestamp() + (process.env.NODE_ENV === 'production' ? '.jpeg' : '.png');
}

module.exports = {
  /**
   * Take a photo
   */
  takePhoto: function (callback) {
    var relativeUrl = getStaticImageRelativeUrl(getFilename());
    var filePath = config.staticsDirectory + relativeUrl;

    function onImageResult(err) {
      if (err) {
        console.log('Something went wrong:', err);
        callback(null, err);
      } else {
        callback(relativeUrl, null);
      }
    }

    if (process.env.NODE_ENV === 'production')
      takeRaspicamPhoto(filePath, onImageResult);
    else
      generatePng(filePath, onImageResult);
  }
}