require('dotenv').config();
const fs = require('fs');
const base = require('airtable').base('app8NMPBTR6QCoYX2');

let rawdata = fs.readFileSync('results.json');
const targets = JSON.parse(rawdata);

results.forEach(result => {

    var regex = new RegExp(result.regex);
    var version = returned.replace(regex,'');
    const date = new Date()

    base('versions').create({
      "id"     : result.id,
      "title"  : result.title,
      "version": version,
      "link"   : result.download,
      "date"   : date.toGMTString()
    }, function(err, record) {
      if (err) {
        console.error(err);
        return;
      }
    });

})