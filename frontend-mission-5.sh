cd ~/Desktop/
if [ -d $1 ]; then
    echo "$1 is already exist."
    exit 1
else
    mkdir $1
    cd $1
    echo "<!DOCTYPE>\r\n<title>Hello</title>\r\n<h1>Hi</h1>" > index.html
    mkdir css
    mkdir js
    cd css
    echo "h1{color: red;}" > style.css
    cd ..
    cd js
    echo "var string = 'Hello World'\r\nalert(string)" > main.js
    exit
fi