# trailpack-leagueoflegends
[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-download]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

:package: Add a Trails service to get data from League Of Legends API.

## Install
### With yeoman : 

```sh
npm install -g yo generator-trails
yo trails:trailpack trailpack-leagueoflegends
```

### With npm (you will have to create config file manually) :
```sh
$ npm install --save trailpack-leagueoflegends
```

## Configuration
Enable SrcdsRcon

```js
// config/main.js
module.exports = {
  packs: [
    // ... other trailpacks
    require('trailpack-leagueoflegends')
  ]
}
```
Check that leagueoflegends config is loaded on index.js
```js
// config/index.js
...
exports.srcds = require('./leagueoflegends')
```
Configure

```js
// config/leagueoflegends.js

module.exports = {
  // Your Riot Games Api must me set here
  apiKey: 'your-league-api-key-here'
}
```

## Usage
``` javascript
	/**
	* Example of calls possible
	* First Parameter is the Api Name, the seconde is method name and the third one contrains parameters needed
	* return a Promise that contains the api datas
	*/
  	this.app.services.LeagueOfLegendsService.get('champion', 'getChampions', { region: 'euw' }).then(data => {
  		console.log(data);
  	});
  	// Example for Get Current Summoner Elo
  	let summonerName = 'WarkAngel'
  	this.app.services.LeagueOfLegendsService.get('summoner', 'getSummonersByName', { region: 'euw', summonerNames: summonerName }).then(data => {
  		this.app.services.LeagueOfLegendsService.get('league', 'getLeagueBySummoner', { region: 'euw', summonerIds: data[summonerName.toLowerCase()].id }).then(league =>{
  			console.log(league);
  		});
  	});

```
## Methods and API Available

All methods are available, see [method Reference](./config/lolreference.js) for more information about how to use.

[npm-image]: https://img.shields.io/npm/v/trailpack-leagueoflegends.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-leagueoflegends
[npm-download]: https://img.shields.io/npm/dt/trailpack-leagueoflegends.svg
[ci-image]: https://img.shields.io/travis/maissani/trailpack-leagueoflegends/master.svg?style=flat-square
[ci-url]: https://travis-ci.org/maissani/trailpack-leagueoflegends
[daviddm-image]: http://img.shields.io/david/maissani/trailpack-leagueoflegends.svg?style=flat-square
[daviddm-url]: https://david-dm.org/maissani/trailpack-leagueoflegends
[codeclimate-image]: https://img.shields.io/codeclimate/github/maissani/trailpack-leagueoflegends.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/maissani/trailpack-leagueoflegends
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/trailsjs/trails