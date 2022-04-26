const laliga = require('../../database/result.json')


module.exports.matchres = function (v1, req, res, next) { 
    return res.status(200).json(laliga)
}