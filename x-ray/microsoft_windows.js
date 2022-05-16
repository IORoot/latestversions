require('dotenv').config();
const Xray   = require('x-ray')
const xray   = Xray()
const base = require('airtable').base('app8NMPBTR6QCoYX2');


var id       = 'os-microsoft-windows';
var title    = 'Microsoft Windows';
var url      = 'https://en.wikipedia.org/wiki/Microsoft_Windows';
var selector = '#mw-content-text > div.mw-parser-output > table.infobox.vevent > tbody > tr:nth-child(5) > td'
var regex    = /\s.*/; // Match a whitespace and remove everything else.
var download = 'https://www.microsoft.com/en-gb/software-download';


// Get Result and push to Airtable.
xray(url, selector)(function(err, returned) {

  var version = returned.replace(regex,'');

  const date = new Date()

  base('versions').create({
    "id"     : id,
    "title"  : title,
    "version": version,
    "link"   : download,
    "date"   : date.toGMTString()
  }, function(err, record) {
    if (err) {
      console.error(err);
      return;
    }
  });

});