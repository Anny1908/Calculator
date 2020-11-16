const express = require("express");
const app = express();

app.listen(3001, function() {
    console.log("Server is listening on port 3001. Ready to accept requests!");
});

app.get("/", function(req, res) {
    res.send("Hello World!");
});

app.get("/add", function(req, res) {
    const number = req.query;
    const result = +number.numero1 + +number.numero2;
    res.send(result.toString());

});

app.get("/substract", function(req, res) {
    const number = req.query;
    const result = +number.numero1 - +number.numero2;
    res.send(result.toString());
});

app.get("/multiplicar", function(req, res) {
    const number = req.query;
    const result = +number.numero1 * +number.numero2;
    res.send(result.toString());
});

app.get("/divide", function(req, res) {
    const number = req.query;
    const result = +number.numero1 / +number.numero2;
    res.send(result.toString());
});

app.get('/:account/:repository', (req, res) => {
    const accountID = req.params.account;
    const repositoryID = req.params.repository;
    console.log("The user requested the repository" + repositoryID + " of the user " + accountID);
    res.send('The user requested the repository' + repositoryID + ' of the user ' + accountID)
})

http: //localhost:3000/add/10/2
    app.get('/add/:nro1/:nro2', (req, res) => {
        const sum1 = req.params.nro1;
        const sum2 = req.params.nro2;
        const result = +sum1 + +sum2;
        res.send(result.toString());

    })

app.get('/substract/:nro1/:nro2', (req, res) => {
    const sum1 = req.params.nro1;
    const sum2 = req.params.nro2;
    const result = +sum1 - +sum2;
    res.send(result.toString());

})

app.get('/multiply/:nro1/:nro2', (req, res) => {
    const sum1 = req.params.nro1;
    const sum2 = req.params.nro2;
    const result = +sum1 * +sum2;
    res.send(result.toString());
})

app.get('/divide/:nro1/:nro2', (req, res) => {
    const sum1 = req.params.nro1;
    const sum2 = req.params.nro2;
    const result = +sum1 / +sum2;
    res.send(result.toString());
})

const myLogger = (req, res, next) => {
    const visitTime = new Date();
    console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
    next();
};
app.use(myLogger);