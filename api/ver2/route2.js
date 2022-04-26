const express = require('express')
const app = express()
const stats = require('../../database/result-with-stats.json')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const users = []
app.use(express.json())

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

module.exports.signup = async (v2, req, res, next) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const user = { name: req.body.name, password: hashedPassword }
      users.push(user)
      res.status(201).send()
    } catch {
      res.status(500).send()
    }
  }