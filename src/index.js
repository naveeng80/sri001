const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World! Divya')
})

app.listen(3001, () => console.log('App running on port 3000'))
