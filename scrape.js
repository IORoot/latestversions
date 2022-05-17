const fs = require('fs');
const Xray   = require('x-ray')
const xray   = Xray()

let rawdata = fs.readFileSync('targets.json');
const targets = JSON.parse(rawdata);

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

    /* Write File */
    fs.writeFile('./results.json', data, (err) => {
      if (err) { throw err; }
      console.log('./results.json');
    });

  })

})