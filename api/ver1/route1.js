const score = require('../../database/result.json')


module.exports.matchres = function (v1, req, res, next) { 
    return res.status(200).json(score)
}

module.exports.mtchid = function(v1, req, res, next) {
    const id = parseInt(req.params.id)
    for (let scoreid of score) {
      if (scoreid.id === id) {
          return res.json(scoreid)
      }
  }
}