const fs     = require('fs');
const Xray   = require('x-ray')
const xray   = Xray()
var faunadb  = require('faunadb')
var query    = faunadb.query

var url      = 'https://en.wikipedia.org/wiki/Microsoft_Windows';
var selector = '#mw-content-text > div.mw-parser-output > table.infobox.vevent > tbody > tr:nth-child(5) > td'
var regex    = /\s.*/; // Match a whitespace and remove everything else.
var download = 'https://www.microsoft.com/en-gb/software-download';
var folders  = './results/os/microsoft'
var filename = 'windows.json'


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



var client = new faunadb.Client({
  secret: process.env.FAUNADB,
  domain: 'db.fauna.com',
  // NOTE: Use the correct domain for your database's Region Group.
  port: 443,
  scheme: 'https',
})

var createP = client.query(
  q.Create(
    q.Collection('versions'),
    { data: {
      "latest_version": "2011.08.19",
      "html_url": "https://test.com/"
    } }
  )
)

createP.then(function(response) {
  console.log(response.ref); // Logs the ref to the console.
})