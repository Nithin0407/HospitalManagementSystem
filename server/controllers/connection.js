const mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'mysql-99236-0.cloudclusters.net',
  port: '12592',
  user: 'admin',
  password: 'yDRYWIVE',
  database: 'hdb',
});

conn.connect((err) => {
  if (err) {
    console.log(err + '----');
  } else {
    console.log('mysql database connected');
  }
});

mysqlQuery = (query) => {
  return new Promise((resolve, reject) => {
    conn.query(query, (err, result, fields) => {
      if (err) {
        console.log(err.message);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = mysqlQuery;
