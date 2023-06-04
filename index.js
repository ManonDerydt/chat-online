const app = require("express")();
const server = require('http').createServer(app)
const io = require("socket.io")(server);

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

io.on('connection', (socket) => {
    console.log('Un utilisateur s\'est connecté');

    socket.on('chat message', (data) => {
        console.log("Message de " + data.username + " : " + data.message);
        io.emit('chat message', data);
    });
});


server.listen(3000, () => {
    console.log("Le serveur tourne sur le port 3000")
})

