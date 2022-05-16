const fs     = require('fs');
const Xray   = require('x-ray')
const xray   = Xray()

var url      = 'https://en.wikipedia.org/wiki/Microsoft_Windows';
var selector = '#mw-content-text > div.mw-parser-output > table.infobox.vevent > tbody > tr:nth-child(5) > td'
var regex    = /\s.*/; // Match a whitespace and remove everything else.
var download = 'https://www.microsoft.com/en-gb/software-download';
var folders  = './results/os/microsoft'
var filename = 'windows.json'


var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_API_KEY
});
var base = Airtable.base('app8NMPBTR6QCoYX2');




xray(url, selector)(function(err, returned) {

  var version = returned.replace(regex,'');

  // var json = {
  //   "latest_version": version,
  //   "html_url": download,
  // };

  

  // var data = JSON.stringify(json);

  // if (!fs.existsSync(folders)){
  //   fs.mkdirSync(folders, { recursive: true });
  // }

  // fs.writeFile(folders+'/'+filename, data, (err) => {
  //   if (err) {
  //       throw err;
  //   }
  //   console.log(folders+'/'+filename);
    
  // });

});

base('versions').create({
  "title": "Windows",
  "version": version,
  "link": download
}, function(err, record) {
  if (err) {
    console.error(err);
    return;
  }
});

