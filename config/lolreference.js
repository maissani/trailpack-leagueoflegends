
module.exports = {
	references: [
		{
			apiName: 'champion',
			version: '1.2', 
			methods: [{
				methodName: 'getChampions', 
				path: '/api/lol/{region}/v1.2/champion'
			},
			{
				methodName: 'getChampion', 
				path: '/api/lol/{region}/v1.2/champion/{id}'
			}]
		},
		{
			apiName: 'championmastery',
			version: '1', 
			methods: [{
				methodName: 'getPlayerMasteryByChampion', 
				path: '/championmastery/location/{platformId}/player/{playerId}/champion/{championId}'
			},
			{
				methodName: 'getPlayerMasteries', 
				path: '/championmastery/location/{platformId}/player/{playerId}/champions'
			},
			{
				methodName: 'getPlayerMasteryScore', 
				path: '/championmastery/location/{platformId}/player/{playerId}/score'
			},
			{
				methodName: 'getPlayerTopChampions', 
				path: '/championmastery/location/{platformId}/player/{playerId}/topchampions'
			}]
		},
		{
			apiName: 'current-game',
			version: '1.0', 
			methods: [{
				methodName: 'getCurrentGame', 
				path: '/observer-mode/rest/consumer/getSpectatorGameInfo/{platformId}/{summonerId}'
			}]
		},
		{
			apiName: 'featured-games',
			version: '1.0', 
			methods: [{
				methodName: 'getFeatured', 
				path: '/observer-mode/rest/featured'
			}]
		},
		{
			apiName: 'game',
			version: '1.3', 
			methods: [{
				methodName: 'getGames', 
				path: '/api/lol/{region}/v1.3/game/by-summoner/{summonerId}/recent'
			}]
		},
		{
			apiName: 'league',
			version: '2.5', 
			methods: [{
				methodName: 'getLeagueBySummoner', 
				path: '/api/lol/{region}/v2.5/league/by-summoner/{summonerIds}'
			},
			{
				methodName: 'getLeagueEntryBySummoner', 
				path: '/api/lol/{region}/v2.5/league/by-summoner/{summonerIds}/entry'
			},
			{
				methodName: 'getLeagueByTeam', 
				path: '/api/lol/{region}/v2.5/league/by-team/{teamIds}'
			},
			{
				methodName: 'getLeagueEntryByTeam', 
				path: '/api/lol/{region}/v2.5/league/by-team/{teamIds}/entry'
			},
			{
				methodName: 'getChallengers', 
				path: '/api/lol/{region}/v2.5/league/challenger'
			},
			{
				methodName: 'getMasters', 
				path: '/api/lol/{region}/v2.5/league/master'
			}]
		},
		{
			apiName: 'static-data',
			version: '1.2', 
			methods: [{
				methodName: 'getStaticChampionList', 
				path: '/api/lol/static-data/{region}/v1.2/champion'
			},
			{
				methodName: 'getStaticChampion', 
				path: '/api/lol/static-data/{region}/v1.2/champion/{id}'
			},
			{
				methodName: 'getStaticItemList', 
				path: '/api/lol/static-data/{region}/v1.2/item'
			},
			{
				methodName: 'getStaticItem', 
				path: '/api/lol/static-data/{region}/v1.2/item/{id}'
			},
			{
				methodName: 'getStaticLanguageString', 
				path: '/api/lol/static-data/{region}/v1.2/language-strings'
			},
			{
				methodName: 'getStaticLanguages', 
				path: '/api/lol/static-data/{region}/v1.2/languages'
			},
			{
				methodName: 'getStaticMap', 
				path: '/api/lol/static-data/{region}/v1.2/map'
			},
			{
				methodName: 'getStaticMasteryList', 
				path: '/api/lol/static-data/{region}/v1.2/mastery'
			},
			{
				methodName: 'getStaticMastery', 
				path: '/api/lol/static-data/{region}/v1.2/mastery/{id}'
			},
			{
				methodName: 'getStaticRealmData', 
				path: '/api/lol/static-data/{region}/v1.2/realm'
			},
			{
				methodName: 'getStaticRunesList', 
				path: '/api/lol/static-data/{region}/v1.2/rune'
			},
			{
				methodName: 'getStaticRune', 
				path: '/api/lol/static-data/{region}/v1.2/rune/{id}'
			},
			{
				methodName: 'getStaticSummonersList', 
				path: '/api/lol/static-data/{region}/v1.2/summoner-spell'
			},
			{
				methodName: 'getStaticSummoners', 
				path: '/api/lol/static-data/{region}/v1.2/summoner-spell/{id}'
			},
			{
				methodName: 'getStaticVersions', 
				path: '/api/lol/static-data/{region}/v1.2/versions'
			}]
		},
		{
			apiName: 'lol-status',
			version: '1.0', 
			methods: [{
				methodName: 'getShardList', 
				path: '/shards'
			},
			{
				methodName: 'getShard', 
				path: '/shards/{shard}'
			}]
		},
		{
			apiName: 'match',
			version: '2.2', 
			methods: [{
				methodName: 'getMatch', 
				path: '/api/lol/{region}/v2.2/match/{matchId}'
			}]
		},
		{
			apiName: 'matchlist',
			version: '2.2', 
			methods: [{
				methodName: 'getMatchList', 
				path: '/api/lol/{region}/v2.2/matchlist/by-summoner/{summonerId}'
			}]
		},
		{
			apiName: 'stats',
			version: '1.3', 
			methods: [{
				methodName: 'getPlayerRankedStats', 
				path: '/api/lol/{region}/v1.3/stats/by-summoner/{summonerId}/ranked'
			},
			{
				methodName: 'getPlayerStats', 
				path: '/api/lol/{region}/v1.3/stats/by-summoner/{summonerId}/summary'
			}]
		},
		{
			apiName: 'summoner',
			version: '1.4', 
			methods: [{
				methodName: 'getSummonersByName', 
				path: '/api/lol/{region}/v1.4/summoner/by-name/{summonerNames}'
			},
			{
				methodName: 'getSummonersById', 
				path: '/api/lol/{region}/v1.4/summoner/{summonerIds}'
			},
			{
				methodName: 'getSummonersMasteries', 
				path: '/api/lol/{region}/v1.4/summoner/{summonerIds}/masteries'
			},
			{
				methodName: 'getSummonersNameById', 
				path: '/api/lol/{region}/v1.4/summoner/{summonerIds}/name'
			},
			{
				methodName: 'getSummonersRunes', 
				path: '/api/lol/{region}/v1.4/summoner/{summonerIds}/runes'
			}]
		},
		{
			apiName: 'team',
			version: '2.4', 
			methods: [{
				methodName: 'getTeamBySUmmonerId', 
				path: '/api/lol/{region}/v2.4/team/by-summoner/{summonerIds}'
			},
			{
				methodName: 'getTeam', 
				path: '/api/lol/{region}/v2.4/team/{teamIds}'
			}]
		},
	]
}	