const fs = require('fs');
const Xray   = require('x-ray')
const xray   = Xray()

let rawdata = fs.readFileSync('targets.json');
const targets = JSON.parse(rawdata);

var results = [];

targets.forEach(target => {

  xray(target.url, target.selector)(function(err, returned) {

    var regex = new RegExp(target.regex);
    var version = returned.replace(regex,'');
    const date = new Date()

    var json = {
      "id"     : target.id,
      "title"  : target.title,
      "version": version,
      "link"   : target.download,
      "date"   : date.toGMTString()
    }

    /* JSON Encode data */
    const data = JSON.stringify(json);

    /* Add data onto results array */
    results.push(data);
  })

  console.log(results);
  
  /* Write File */
  fs.writeFile('./results.json', results, (err) => {
    if (err) { throw err; }
  });

})