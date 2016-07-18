'use strict'

const Service = require('trails-service')
const _ = require('lodash')
const uriParser = require('uri-template')
const Promise = require('promise')
const request = require('request');
/**
 * @module LeagueOfLegendsService
 * @description Call data from Riot Games API
 */
module.exports = class LeagueOfLegendsService extends Service {
  get(apiName, methodName, parameters) {
  	const config = this.app.config.lolreference
  	let targetPath = this.getConfig(apiName, methodName)
  	let targetApiUrl = uriParser.parse(targetPath)
  	let apiUrl = targetApiUrl.expand(parameters)
    return this.resolve(apiUrl)
  }
  getConfig(lolapiName, lolmethodName) {
  	const config = this.app.config.lolreference
  	let apiPath = _.pick(_.find(config.references, { apiName: lolapiName }),['methods'])
  	let methodPath = _.pick(_.find(apiPath.methods, { methodName: lolmethodName }),['path'])
  	let targetUrl = methodPath.path
  	return targetUrl
  }

  resolve(urlPath) {
    let requestedUrl = 'https://euw.api.pvp.net' + urlPath + '?api_key=' + this.app.config.leagueoflegends.apiKey
    return new Promise(function(resolve, reject){
      request(
        {
          url: requestedUrl, 
          method: 'GET'
        },
        function(error, response, body) {
          if (!error && response.statusCode == 200) {
              var data = JSON.parse(body)
              resolve(data)
          } else {
              reject();
          }
        }
      )
    })
  }

}

