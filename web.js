export default function useWebRoutes(app) {
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

app.get('/portifólio', (req, res)=> {
    res.render('portifólio', {nome: 'wang yixiang'});
});


}

