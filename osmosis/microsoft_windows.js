const fs   = require('fs');
var osmosis = require('osmosis');

var url = 'https://en.wikipedia.org/wiki/List_of_Microsoft_Windows_versions';
var selector = '#mw-content-text > div.mw-parser-output > table:nth-child(7) > tbody > tr:last-child > td:nth-child(1)'
var download = 'https://www.microsoft.com/en-gb/software-download';
var folders = './results/os/microsoft'
var filename = 'windows.json'


osmosis
.get(url)
.find(selector)
.set('version')
.data(function(returned) {

    var json = {
        "latest_version": returned.version,
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

    console.log(returned)
})
// .log(console.log)
.error(console.log)
// .debug(console.log)