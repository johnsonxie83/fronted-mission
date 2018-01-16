#!/usr/bin/env node

var fs = require('fs')
var dirName = process.argv[2]

process.chdir("/Users/johnsonxie/Desktop/")
if (fs.existsSync("./" + dirName)) {
    console.log(dirName + " is already exist.")
    process.exit(1)
} else {
    fs.mkdirSync("./" + dirName)
    process.chdir("./" + dirName)
    fs.mkdirSync('css')
    fs.mkdirSync('js')

    fs.writeFileSync("./index.html", "<!DOCTYPE>\r\n<title>Hello</title>\r\n<h1>Hi</h1>")
    fs.writeFileSync("./css/style.css", "h1{color: red;}")
    fs.writeFileSync("./js/main.js", "var string = 'Hello World'\r\nalert(string)")

    process.exit(0)
}