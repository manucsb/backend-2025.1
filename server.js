import express from 'express';

const app = express();
const PORT = 3000;

useWebRoutes(app);

app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get('/', (req, res)=>{
    res.send('hirono');
});

app.get('/nicholas', (req, res)=>{
    res.send('hello wang yixiang');
});

app.get('/user/:id', (req, res) => {

    res.json({
        params: req.params,
        query: req.query,
        method: req.method,
        headers: req.headers,
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escutando em http://127.0.0.1:${PORT}`)
});