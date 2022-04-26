const laliga = require('../../database/result-with-stats.json')


module.exports.matchreswithstat = function (v2, req, res, next) { 
    return res.status(200).json(laliga)
}