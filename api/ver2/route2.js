const stats = require('../../database/result-with-stats.json')


module.exports.matchreswithstat = function (v2, req, res, next) { 
    return res.status(200).json(stats)
}

module.exports.mtchstatid = function(v2, req, res, next) {
    const id = parseInt(req.params.id)
    for (let statsid of stats) {
      if (statsid.id === id) {
          res.json(statsid);
          return;
      }
  }
}