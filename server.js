const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const db = require('./db')
const port = 3000;

app.use(parser());
app.use(express.static(path.join(__dirname, 'dist')))

app.post('/saveExpense', (req, res) => {
    console.log(req.body)

    db.saveExpense(req.body, (err, suc) => {
        if(err) console.log(err);
    })
    
})

app.get('/getAllExpenses', (req, res) => {
    db.getAllExpenses((err, suc) => {
        if(err) { console.log(err) }
        else { res.send(suc) }
    })
    
})

app.listen(port, ()=> console.log(`listening on ${port} `))