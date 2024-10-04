const db = require('../repositories/db');

module.exports.getAllDrivers = async (req) =>{
        const [record] = await db.query('SELECT * FROM driver')
        return record;
}

module.exports.addDriver = async () => {
    const datetime = new Date();
    var sql = "INSERT INTO driver (id, company_id, city, first_name, last_name, email, phone, avatar_url, status, creation_date) VALUES ?";
    var values =[[19, 5, 1006, "Mark", "West", "mark.west@gmail.com", 555118, "https://example.com/avatars/10.jpg", "active", datetime]]
    const [record] = await db.query(sql,[values]);
    return record;
}
