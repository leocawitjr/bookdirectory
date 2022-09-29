const mysql = require('mysql');

const connectDB = function () {
    const db = mysql.createConnection({
        host : process.env.DBHOST,
        user : process.env.DBUSER,
        password : process.env.DBPASS,
        database : process.env.DBNAME
    });

    db.connect((err) => {
        if(err){
            throw err;
        }
        console.log(`MySQL is now connected on ${process.env.DBHOST}...`);
    });
}

module.exports = connectDB;


