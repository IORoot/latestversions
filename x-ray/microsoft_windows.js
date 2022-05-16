const fs     = require('fs');
const Xray   = require('x-ray')
const xray   = Xray()

var url      = 'https://en.wikipedia.org/wiki/Microsoft_Windows';
var selector = '#mw-content-text > div.mw-parser-output > table.infobox.vevent > tbody > tr:nth-child(5) > td'
var regex    = /\s.*/; // Match a whitespace and remove everything else.
var download = 'https://www.microsoft.com/en-gb/software-download';
var folders  = './results/os/microsoft'
var filename = 'windows.json'


var api_key = process.env.AIRTABLE_API_KEY;
console.log(api_key);

var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('app8NMPBTR6QCoYX2');


xray(url, selector)(function(err, returned) {

  var version = returned.replace(regex,'');

  base('versions').create({
    "title": "Microsoft Windows",
    "version": version,
    "link": download
  }, function(err, record) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(record.getId());
  });

});

