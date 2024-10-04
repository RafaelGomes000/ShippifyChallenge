const db = require('../repositories/db');

module.exports.getVehiclesByDriver = async (id) => {
    const [record] = await db.query('SELECT * FROM vehicle WHERE driver_id = ?', [id])
    return record;
}

module.exports.addVehicle = async () => {
    const datetime = new Date();
    var sql = "INSERT INTO vehicle (id, driver_id, plate, model, type, capacity, creation_date) VALUES ?";
    var values =[[19, 18, "DEX755", "Eco Sport", "car", "small", datetime]]
    const [record] = await db.query(sql,[values]);
    return record;
}

module.exports.deleteVehicleById = async (id) => {
    const [record] = await db.query('DELETE FROM vehicle WHERE id = ?', [id])
    return record;
}