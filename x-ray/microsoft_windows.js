const fs   = require('fs');
const Xray = require('x-ray')
const xray = Xray()

var url = 'https://changewindows.org/platforms/pc';
var selector = '#app > div > div > main > div > div > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2) > a > div.d-flex.flex-row > div > p > small'
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