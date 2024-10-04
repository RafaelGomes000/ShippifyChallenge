const mysql = require('mysql2/promise');

const mysqlPool = mysql.createPool({
    host: 'new-database.cluster-cv2sgxogwffx.sa-east-1.rds.amazonaws.com',
    user: 'candidate3',
    password: 'ubnpS3rySnj88Sum',
    database: 'shippify3'
});

module.exports = mysqlPool;