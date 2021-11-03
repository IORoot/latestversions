var osmosis = require('osmosis');

var url = 'https://support.apple.com/en-us/HT201260';
var selector = '#tableWraper > table > tbody > tr:nth-child(2) > td:nth-child(2)'

osmosis
.get(url)
.find(selector)
.set('version')
.data(function(listing) {
    console.log(listing)
})