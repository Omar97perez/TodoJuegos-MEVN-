'use strict'

const jwt = require('jwt')
const moment = require('moment')
const config = require('../config.json')

function isAdmin(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(403).send({ message: 'No tienes autorización' })
  }
  const token = req.headers.authorization.split(' ')[1]
  const payload = jwt.decode(token, config.secret)

  if(payload.exp <= moment.unix()) {
    return res.status(401).send({ message: 'El Token ha expirado' })
  }
  if(payload.sub != 'admin@admin.com') {
    return res.status(403).send({ message: 'No tienes autorización' })
  }

  req.user = payload.sub
  next()
}

module.exports = isAuth