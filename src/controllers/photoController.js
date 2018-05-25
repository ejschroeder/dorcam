var RaspiCam = require('raspicam');
var camera = new RaspiCam('photo', '../storage/photos')

module.exports = {
  /**
   * Take a photo
   */
  photo: function (req, res) {
    try {
      camera.start();
    } catch (e) {
      res.status(500).json({
        error: 'An error has occurred.'
      });
    }

    res.json({
        message: 'You have taken a snapshot!'
    });
  }
}
