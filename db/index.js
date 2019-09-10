//Username: N9kFmXPG3t
// Database name: N9kFmXPG3t
// Password: a8PAl8ojnF
// Server: remotemysql.com
// Port: 3306

const mysql = require('mysql');

const con = mysql.createConnection({
  host: "remotemysql.com",
  user: "N9kFmXPG3t",
  password: "a8PAl8ojnF"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const saveExpense = (expense) => {
    console.log(expense);
    con.query(`insert into expenses(id, category, amount) values(null)`, (err, results) => {
        if(err) { console.log(err) }
        else { }
    })
}

const getAllExpenses = () => {
    con.query('')
}

module.exports = { saveExpense, getAllExpenses } 