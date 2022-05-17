const fs = require('fs');
const Xray   = require('x-ray')
const xray   = Xray()

let rawdata = fs.readFileSync('targets.json');
const targets = JSON.parse(rawdata);

var results = [];

targets.forEach(target => {

  var json;

  xray(target.url, target.selector)(function(err, returned) {

    var regex = new RegExp(target.regex);
    var version = returned.replace(regex,'');
    const date = new Date()

    json = {
      "id"     : target.id,
      "title"  : target.title,
      "version": version,
      "link"   : target.download,
      "date"   : date.toGMTString()
    }

  })

  /* Add data onto results array */
  results.push(json);
})

console.log(results);

/* JSON Encode data */
const data = JSON.stringify(results);

/* Write File */
fs.writeFile('./results.json', data, (err) => {
  if (err) { throw err; }
});