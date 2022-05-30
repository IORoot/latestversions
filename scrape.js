require('dotenv').config();
const fs = require('fs');
const Xray   = require('x-ray')
const xray   = Xray()

let rawdata = fs.readFileSync('targets.json');
const targets = JSON.parse(rawdata);

const versions = []

targets.forEach(target => {
  
  xray(target.url, target.selector)(function(err, returned) {

    var regex = new RegExp(target.regex);
    var version = returned.replace(regex,'');
    const date = new Date()

    versions.push({
      category: target.category,
      company:  target.company,
      title:    target.title,
      version:  version,
      link:     target.download,
      date:     date.toGMTString(),
      logo_url: target.logo_url,
      colour1:  target.colour1,
      colour2:  target.colour2,
    });
    var json = JSON.stringify(versions);

    fs.writeFile('results.json', json, 'utf8', function(err) {
      if (err) throw err;
    }
  );

  })

})