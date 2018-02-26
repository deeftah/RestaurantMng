const mysql = require('mysql');

export default() => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Liewec.mays!124',
    database: 'restaurantmng',
  });

  connection.connect((err) => {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
      return;
    }

    console.log(`connected as id ${connection.threadId}`);
  });
};
