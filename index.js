/*
author: Miqueias S. R.
*/


const app = require('express')();

app.listen(3000, ()=> console.log('Servidor rodando!'));

app.get('/pointer', (req, res)=>{
    res.send({
        data: [10, 20, 30, 40],
        index: [0, 1, 2, 3],
        length: 4,
    });
});