const stats = require('../../database/result-with-stats.json')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


module.exports.matchreswithstat = function (v2, req, res, next) { 
    return res.status(200).json(stats)
}

module.exports.mtchstatid = function(v2, req, res, next) {
    const id = parseInt(req.params.id)
    for (let statsid of stats) {
      if (statsid.id === id) {
        return res.json(statsid)
      }
  }
}

module.exports.signup = function (v2, req, res, next) {

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);

    const user = User.add({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })

    var token = jwt.sign({
        id: user.id
    }, config.jwtsecret, {
        expiresIn: 86400 // expires in 24 hours
    })
    res.status(200).send({
        auth: true,
        token: token
    })
}