const PORT = 8000
const fs = require('fs');
const express = require('express')
const Xray = require('x-ray')
const xray = Xray()


let rawdata = fs.readFileSync('targets.json');
const targets = JSON.parse(rawdata);

const app = express();
const versions = []

targets.forEach(target => {

    xray(target.address, target.selector)(function(err, returned) {
        // returned = returned.replace(/(\r\n|\n|\r)/gm, "");

        versions.push({
            owner: target.owner,
            product: target.product,
            returned,
            download: target.download,
        })
    })

})


app.get('/', (req, res) => {
    res.json('Welcome to the latest-version API service.')
})


app.get('/os', (req, res) => {
    res.json(versions)
})


app.get('/os/:productId', (req, res) => {
    const productId = req.params.productId
    const target = targets.filter(target => target.product === productId)[0]
    const specificProduct = []

    xray(target.address, target.selector)(function(err, returned) {
        // returned = returned.replace(/(\r\n|\n|\r)/gm, "");
        specificProduct.push({
            owner: target.owner,
            product: target.product,
            returned,
            download: target.download,
        })

        res.json(specificProduct)
    })

})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))