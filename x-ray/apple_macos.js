const fs   = require('fs');
const Xray = require('x-ray')
const xray = Xray()

var url = 'https://support.apple.com/en-us/HT201260';
var selector = '#tableWraper > table > tbody > tr:nth-child(2) > td:nth-child(2)'
var download = 'https://www.apple.com/uk/macos';
var folders = './results/os/apple'
var filename = 'macos.json'

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