require('dotenv').config();
const fs = require('fs');
const Xray   = require('x-ray')
const xray   = Xray()
const base = require('airtable').base('app8NMPBTR6QCoYX2');

let rawdata = fs.readFileSync('targets.json');
const targets = JSON.parse(rawdata);

targets.forEach(target => {

  xray(target.url, target.selector)(function(err, returned) {

    var regex = new RegExp(target.regex);
    var version = returned.replace(regex,'');
    const date = new Date()

    base('versions').create({
      "id"     : target.id,
      "title"  : target.title,
      "version": version,
      "link"   : target.download,
      "date"   : date.toGMTString()
    }, function(err, record) {
      if (err) {
        console.error(err);
        return;
      }
    });

  })

})