// global function 
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

// initializing the objects
const app = express()

// self define function
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const dirRoot = require('./util/path')


// init body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

// set the routers -- i
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(dirRoot, 'views', '404.html'))
})

app.listen(3001);