const connection = require('../db');

// ----- Crear tablas -----
const createTableQuery = `CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2) NOT NULL,
        stock INT NOT NULL
    )`;

connection.query(createTableQuery, (err, results) => {
    if (err) {
        console.log('Error al crear la tabla');
        return;
    }
    console.log('Tabla creada!');
});