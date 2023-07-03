const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;



app.use(cors())

app.get('/', (req,res) => {
	res.send("Nice app bro!")
});

app.get('/api/device/:name', (req,res) => {
	const { name } = req.params;
	if(!name) res.status(400).send("please provide name");
	if(name == "v1"){
		res.status(200).send({'device': 'phone'})
	}else if(name == "v2"){
		res.status(200).send({'device': 'TV'})
	}else{
		res.status(404).send({'device': 'no device'})
	}
});

app.get('/api/download', (req,res) => {
	const options = { root: path.join(__dirname) };
	console.log(options)
	const fileName = "hello.txt";
	res.sendFile(fileName, options, function(err) {
		if(err){ 
			next(err) 
		}else{ 
			console.log('Sent', fileName) 
		}
	})
});

app.listen(port, () => {
	console.log(`App runnin on port ${port}`)
})