const PhotoService = require('../services/photoService.js');

module.exports = {
  /**
   * Take a photo
   */
  photo: function (req, res) {
    PhotoService.takePhoto(function(path, err) {
      if (err)
        res.status(500).json({ error: 'An error has occurred.' });
      else
        res.json({
          message: 'You have taken a photo!',
          path: path
        })
    });
  }
}
