const fs   = require('fs');
const Xray = require('x-ray')
const xray = Xray()

var url = 'https://en.wikipedia.org/wiki/List_of_Microsoft_Windows_versions';
var selector = '#mw-content-text > div.mw-parser-output > table:nth-child(7) > tbody > tr:last-child > td:nth-child(1)'
var download = 'https://www.microsoft.com/en-gb/software-download';
var folders = './results/os/microsoft'
var filename = 'windows.json'

xray(url, selector)(function(err, returned) {

  var json = {
    "latest_version": returned,
    "html_url": download,
  };

  const data = JSON.stringify(json);

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