const fs     = require('fs');
const Xray   = require('x-ray')
const xray   = Xray()

var url      = 'https://en.wikipedia.org/wiki/Microsoft_Windows';
var selector = '#mw-content-text > div.mw-parser-output > table.infobox.vevent > tbody > tr:nth-child(5) > td'
var regex    = /\s.*/; // Match a whitespace and remove everything else.
var download = 'https://www.microsoft.com/en-gb/software-download';
var folders  = './results/os/microsoft'
var filename = 'windows.json'


console.log(process.env.AIRTABLE_API_KEY);
var api_key = process.env.AIRTABLE_API_KEY;
console.log(api_key);
// var base = new Airtable({apiKey: api_key}).base('app8NMPBTR6QCoYX2');

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: api_key
});
var base = Airtable.base('app8NMPBTR6QCoYX2');

base('versions').create({
  "title": "test2",
  "version": "testing2",
  "link": "https://test2.com"
}, function(err, record) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(record.getId());
});


xray(url, selector)(function(err, returned) {

  var version = returned.replace(regex,'');

  var json = {
    "latest_version": version,
    "html_url": download,
  };

  var data = JSON.stringify(json);

  

  if (!fs.existsSync(folders)){
    fs.mkdirSync(folders, { recursive: true });
  }

  fs.writeFile(folders+'/'+filename, data, (err) => {
    if (err) {
        throw err;
    }
    console.log(folders+'/'+filename);
    
  });

});

