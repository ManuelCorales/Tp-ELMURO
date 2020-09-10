const http = require('http'),
    url = require ('url'),
    fs = require ('fs');

console.log('Escuchando puerto 3000');
http.createServer(function (req, res) {
    const queryObject = url.parse(req.url,true).query.msg; // Extrae el dato msg del URL
    if (queryObject){
        fs.appendFile('mensajes.txt', `\n${queryObject}`, function (err, data) {
            if (err) return console.log(err);
        }); // Mete al archivo de mensajes el parametro msg introducido
    }
    var content = fs.readFileSync('mensajes.txt', 'utf8') // Lee el archivo de mensajes
    res.end(`${content}\n${queryObject ? queryObject: ""}`); // Muestra los mensajes más el último introducido
  }).listen(3000); // Escucha al puerto 3000