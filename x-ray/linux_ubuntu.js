const fs   = require('fs');
const Xray = require('x-ray')
const xray = Xray()

var url = 'https://distrowatch.com/table.php?distribution=ubuntu';
var selector = 'body > table:nth-child(8) > tr:nth-child(1) > td:nth-child(3)'
var download = 'https://ubuntu.com/download/desktop';
var folders = './results/os/linux'
var filename = 'ubuntu.json'

xray(url, selector)(function(err, returned) {

    // console.log(err);
    // console.log(returned);

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