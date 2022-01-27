exports.sqlConfig = {
  host: process.env.MYSQL_DATABASE || 'mysql_server',
  user: process.env.MYSQL_USER || 'student',
  password: process.env.MYSQL_PASSWORD || 'secret',
  database: process.env.MYSQL_ROOT_PASSWORD || 'test_db',
};
