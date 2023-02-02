
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var apirouter = ('routes/api/api.js') 
const listkey = ("era");
__path = process.cwd()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/namaku', async (req, res, next) => {
    var apikey = req.query.apikey
    if(!apikey) return res.json({ status: false })
    if(listkey.includes(apikey)){
	res.json({
	    apikey: apikey,
status: true,
namaku: 'ZeroGanz'
	})
	} else {
	    res.json({
	     status: false
	        })
	    }
})

app.get('/status', async (req, res, next) => {
    var apikey = req.query.apikey
    var status = req.query.status
    if(!apikey) return res.json({ status: false })
    if(listkey.includes(apikey)){
	res.json({
	   apikey: apikey,
	    status: true,
	    nama: 'ZeroGanz',
	    status: status
	})
	} else {
	    res.json({
	     status: false
	      })
	    }
})

app.get('/info', async (req, res, next) => {
    var apikey = req.query.apikey
    var infone = req.query.infone
    if(!apikey) return res.json(loghandler.noapikey)
    if(listkey.includes(apikey)){
	res.json({
	    apikey: apikey,
status: true,
info: infone,
creator: 'Kapet 19'
	})
	} else {
	    res.json(loghandler.apikey)
	    }
})

app.get('/index', (req, res) => {
    res.sendFile(__path + '/index.html')
})

app.get('/', function (req, res) {
  res.send('Rest Api Backend On Mazeh')
})
app.get('/yo', function (req, res) {
  res.send('YO!')
})
var server = app.listen(3000, function () {
  console.log('Server running at http://localhost:' + server.address().port)
})