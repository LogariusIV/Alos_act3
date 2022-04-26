const express = require('express')
const app = express()
//const jwt = require('jsonwebtoken')
const route1 = require('./api/ver1/route1')
const route2 = require('./api/ver2/route2')
const totoro = require('totoro-node')

app.use(express.json())


app.use('/laliga', totoro.rain({
    v1: {
        endpoints: [
            {
                route: "/match",
                method: "GET",
                implementation: route1.matchres
            }
            
        ],
        endpoints: [
            {
                route: "/match/:id",
                method: "GET",
                implementation: route1.mtchid
            }
        ]
    },
    v2: {
        endpoints: [
            {
                route: "/match",
                method: "GET",
                implementation: route2.matchreswithstat
            }
        ],
        endpoints: [
            {
                route: "/match/:id",
                method: "GET",
                implementation: route2.mtchstatid
            }
        ]
    }
}))


app.listen(3000, () => {
    console.log('Server Started')
  })