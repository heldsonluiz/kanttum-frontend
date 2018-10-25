let express = require('express')
let path = require('path')
let serveStatic = require('serve-static')
let port = process.env.PORT || 5000

let app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))
app.listen(port)

console.log('server started ' + port)
