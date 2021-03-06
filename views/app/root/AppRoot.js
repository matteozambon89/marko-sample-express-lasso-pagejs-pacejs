/*
* @Author: Matteo Zambon
* @Date:   2017-03-16 18:17:10
* @Last Modified by:   Matteo Zambon
* @Last Modified time: 2017-03-31 00:12:26
*/

'use strict'

const EventEmitter = require('events')

class AppRoot extends EventEmitter {
  constructor() {
    super()

    this._name = ''
    this._surname = ''
    this._useDefaultName = false
  }

  set name(newName) {
    this._name = newName
    this._emitChange()
  }

  get name() {
    return this._name
  }

  set surname(newSurname) {
    this._surname = newSurname
    this._emitChange()
  }

  get surname() {
    return this._surname
  }

  set useDefaultName(newUseDefaultName) {
    this._useDefaultName = newUseDefaultName
    this._emitChange()
  }

  get useDefaultName() {
    return this._useDefaultName
  }

  _emitChange() {
    this.emit('change', {
      'name': this._name,
      'surname': this._surname,
      'useDefaultName': this._useDefaultName
    })
  }
}

module.exports = AppRoot
