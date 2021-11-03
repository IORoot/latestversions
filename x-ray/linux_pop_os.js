const fs   = require('fs');
const Xray = require('x-ray')
const xray = Xray()

var url = 'https://distrowatch.com/table.php?distribution=popos';
var selector = 'body > table:nth-child(8) > tr:nth-child(1) > td:nth-child(2)'
var download = 'https://pop.system76.com/';
var folders = './results/os/linux'
var filename = 'pop_os.json'

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