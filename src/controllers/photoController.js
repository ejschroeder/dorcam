var RaspiCam = require('raspicam');

function getTimestamp() {
  return (new Date()).toISOString();
}

module.exports = {
  /**
   * Take a photo
   */
  photo: function (req, res) {
    var camera;
    try {
      camera = new RaspiCam({
        mode: 'photo',
        output: './storage/photos/' + getTimestamp()
      });

      camera.start();
    } catch (e) {
      res.status(500).json({
        error: 'An error has occurred.'
      });
    }

    res.json({
        message: 'You have taken a photo!'
    });
  }
}
